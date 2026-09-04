import React from 'react';
import { Star, MessageCircle, Calendar } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="overview">
      <div className="container hero-container">
        <div className="hero-content">
          <div className="social-proof">
            <div className="stars">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={16} fill="var(--accent-primary)" color="var(--accent-primary)" />
              ))}
            </div>
            <span><strong className="text-accent">4.8 Rating</strong> (17 Google Reviews)</span>
          </div>
          <h1 className="hero-headline">
            MASTER YOUR <br />
            <span className="text-accent">BODY MECHANICS</span>
          </h1>
          <p className="hero-subheadline">
            Anna Nagar East's premier gym for strength, elite body transformation, and peak performance.
          </p>
          <div className="hero-ctas">
            <a href="https://wa.me/917810820005?text=Hi%20Body%20Mechanics%2C%20I%20am%20interested%20in%20booking%20a%20free%20session!" target="_blank" rel="noreferrer" className="btn btn-primary">
              <Calendar size={20} style={{ marginRight: '8px' }} />
              Book Free Session
            </a>
            <a href="https://wa.me/917810820005?text=Hi%20Body%20Mechanics%2C%20I%20have%20a%20few%20questions." target="_blank" rel="noreferrer" className="btn btn-outline">
              <MessageCircle size={20} style={{ marginRight: '8px' }} />
              WhatsApp Us
            </a>
          </div>
        </div>
        <div className="hero-visual">
          <div className="image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
              alt="Elite Gym Workout" 
              className="hero-image"
            />
            <div className="glow-border"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
