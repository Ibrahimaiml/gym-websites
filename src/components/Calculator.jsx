import React, { useState, useEffect } from 'react';
import { Activity, Dumbbell, Flame } from 'lucide-react';
import './Calculator.css';

const Calculator = () => {
  const [gender, setGender] = useState('male');
  const [age, setAge] = useState(25);
  const [height, setHeight] = useState(175);
  const [weight, setWeight] = useState(70);
  const [activity, setActivity] = useState(1.55);
  const [goal, setGoal] = useState('bulk');

  const [results, setResults] = useState({
    calories: 0,
    protein: 0,
    fats: 0,
    carbs: 0
  });

  useEffect(() => {
    calculateMacros();
  }, [gender, age, height, weight, activity, goal]);

  const calculateMacros = () => {
    // Mifflin-St Jeor Equation
    let bmr = (10 * weight) + (6.25 * height) - (5 * age);
    bmr = gender === 'male' ? bmr + 5 : bmr - 161;
    
    let tdee = bmr * activity;
    
    // Adjust for goal
    let targetCalories = goal === 'bulk' ? tdee + 300 : tdee - 500;
    
    // Macro Distribution
    // Protein: 2.2g per kg of body weight
    const protein = weight * 2.2;
    const proteinCalories = protein * 4;
    
    // Fats: 0.8g per kg of body weight
    const fats = weight * 0.8;
    const fatCalories = fats * 9;
    
    // Carbs: Remaining calories
    const remainingCalories = targetCalories - proteinCalories - fatCalories;
    const carbs = Math.max(0, remainingCalories / 4);

    setResults({
      calories: Math.round(targetCalories),
      protein: Math.round(protein),
      fats: Math.round(fats),
      carbs: Math.round(carbs)
    });
  };

  return (
    <section className="section bg-surface" id="calculator">
      <div className="container">
        <h2 className="section-title">
          Nutrition <span className="text-accent">Mechanics</span>
        </h2>
        
        <div className="calculator-container">
          <div className="calculator-form">
            <h3 className="form-title">Calculate Your Macros</h3>
            
            <div className="form-group goal-toggle">
              <button 
                className={`toggle-btn ${goal === 'bulk' ? 'active' : ''}`}
                onClick={() => setGoal('bulk')}
              >
                Clean Bulk
              </button>
              <button 
                className={`toggle-btn ${goal === 'cut' ? 'active' : ''}`}
                onClick={() => setGoal('cut')}
              >
                Aggressive Cut
              </button>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Gender</label>
                <select value={gender} onChange={(e) => setGender(e.target.value)} className="form-input">
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div className="form-group">
                <label>Age (years)</label>
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className="form-input" min="15" max="100" />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Height (cm)</label>
                <input type="number" value={height} onChange={(e) => setHeight(Number(e.target.value))} className="form-input" min="100" max="250" />
              </div>
              <div className="form-group">
                <label>Weight (kg)</label>
                <input type="number" value={weight} onChange={(e) => setWeight(Number(e.target.value))} className="form-input" min="30" max="200" />
              </div>
            </div>

            <div className="form-group">
              <label>Activity Level</label>
              <select value={activity} onChange={(e) => setActivity(Number(e.target.value))} className="form-input">
                <option value={1.2}>Sedentary (Little or no exercise)</option>
                <option value={1.375}>Lightly Active (Exercise 1-3 days/week)</option>
                <option value={1.55}>Moderately Active (Exercise 3-5 days/week)</option>
                <option value={1.725}>Very Active (Exercise 6-7 days/week)</option>
                <option value={1.9}>Super Active (Physical job or hard daily training)</option>
              </select>
            </div>
          </div>

          <div className="calculator-results">
            <h3 className="results-title">Your Daily Targets</h3>
            
            <div className="result-main">
              <Flame size={32} color="var(--accent-primary)" />
              <div className="result-main-info">
                <span className="result-label">Target Calories</span>
                <span className="result-value text-accent">{results.calories} <small>kcal</small></span>
              </div>
            </div>

            <div className="macros-grid">
              <div className="macro-card">
                <Dumbbell size={24} color="#FF5252" />
                <span className="macro-label">Protein</span>
                <span className="macro-value">{results.protein}g</span>
              </div>
              <div className="macro-card">
                <Activity size={24} color="#448AFF" />
                <span className="macro-label">Carbs</span>
                <span className="macro-value">{results.carbs}g</span>
              </div>
              <div className="macro-card">
                <Activity size={24} color="#FFC107" />
                <span className="macro-label">Fats</span>
                <span className="macro-value">{results.fats}g</span>
              </div>
            </div>

            <div className="results-disclaimer">
              * Calculations are based on the Mifflin-St Jeor formula. Adjust based on your real-world progress.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
