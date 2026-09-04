'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import { Dumbbell, Sparkles, RefreshCw } from 'lucide-react';

// Equipment 1: Pro Olympic Barbell & Weight Plate Stack
function OlympicBarbellMesh({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.4;
    }
  });

  return (
    <group ref={groupRef} scale={1.1}>
      {/* Long Barbell Shaft */}
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.15, 0.15, 5.2, 32]} />
        <meshStandardMaterial color="#e5e5e5" metalness={0.95} roughness={0.15} />
      </mesh>

      {/* Left 45lb Bumper Plate */}
      <mesh position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.5, 1.5, 0.35, 36]} />
        <meshStandardMaterial color="#171717" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[-1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.1, 0.05, 16, 36]} />
        <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Right 45lb Bumper Plate */}
      <mesh position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.5, 1.5, 0.35, 36]} />
        <meshStandardMaterial color="#171717" roughness={0.3} metalness={0.8} />
      </mesh>
      <mesh position={[1.8, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <torusGeometry args={[1.1, 0.05, 16, 36]} />
        <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Equipment 2: Squat Power Rack Rig
function PowerRackMesh({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.3;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.6, 0]} scale={0.95}>
      {/* Vertical Steel Posts */}
      {[
        [-1.2, 1.8, -1.2],
        [1.2, 1.8, -1.2],
        [-1.2, 1.8, 1.2],
        [1.2, 1.8, 1.2],
      ].map((pos, i) => (
        <mesh key={i} position={pos as [number, number, number]}>
          <boxGeometry args={[0.22, 3.8, 0.22]} />
          <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.2} />
        </mesh>
      ))}

      {/* Top Connecting Beams */}
      <mesh position={[0, 3.6, -1.2]}>
        <boxGeometry args={[2.6, 0.2, 0.2]} />
        <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
      </mesh>
      <mesh position={[0, 3.6, 1.2]}>
        <boxGeometry args={[2.6, 0.2, 0.2]} />
        <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
      </mesh>
      
      {/* Pull Up Bar */}
      <mesh position={[0, 3.5, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.1, 0.1, 2.6, 24]} />
        <meshStandardMaterial color="#e5e5e5" metalness={0.9} roughness={0.2} />
      </mesh>

      {/* Safety Arms */}
      <mesh position={[0, 1.2, -1.2]}>
        <boxGeometry args={[0.2, 0.15, 2.4]} />
        <meshStandardMaterial color="#E50914" metalness={0.8} roughness={0.2} />
      </mesh>
      <mesh position={[0, 1.2, 1.2]}>
        <boxGeometry args={[0.2, 0.15, 2.4]} />
        <meshStandardMaterial color="#E50914" metalness={0.8} roughness={0.2} />
      </mesh>
    </group>
  );
}

// Equipment 3: Adjustable Workout Bench
function WorkoutBenchMesh({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.35;
    }
  });

  return (
    <group ref={groupRef} position={[0, -0.4, 0]} scale={1.1}>
      {/* Main Steel Frame Base */}
      <mesh position={[0, -0.6, 0]}>
        <boxGeometry args={[3.2, 0.2, 0.4]} />
        <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.2} />
      </mesh>
      {/* Legs */}
      <mesh position={[-1.4, -1.1, 0]}>
        <boxGeometry args={[0.2, 1.0, 1.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
      </mesh>
      <mesh position={[1.4, -1.1, 0]}>
        <boxGeometry args={[0.2, 1.0, 1.2]} />
        <meshStandardMaterial color="#0a0a0a" metalness={0.8} roughness={0.3} />
      </mesh>

      {/* Padded Seat */}
      <mesh position={[-0.9, -0.3, 0]}>
        <boxGeometry args={[1.0, 0.25, 0.8]} />
        <meshStandardMaterial color="#171717" roughness={0.9} />
      </mesh>
      {/* Inclined Backrest Cushion */}
      <mesh position={[0.5, 0.3, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[2.0, 0.25, 0.85]} />
        <meshStandardMaterial color="#171717" roughness={0.9} />
      </mesh>
      {/* Crimson Trim Line */}
      <mesh position={[0.5, 0.42, 0]} rotation={[0, 0, Math.PI / 6]}>
        <boxGeometry args={[2.02, 0.04, 0.87]} />
        <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Equipment 4: Hex Pro Dumbbell Pair
function HexDumbbellMesh({ autoRotate }: { autoRotate: boolean }) {
  const groupRef = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    if (groupRef.current && autoRotate) {
      groupRef.current.rotation.y += delta * 0.5;
    }
  });

  return (
    <group ref={groupRef} scale={1.3}>
      <mesh rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.2, 0.2, 3.2, 32]} />
        <meshStandardMaterial color="#f3f4f6" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[-1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.1, 1.1, 0.8, 6]} />
        <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.3} />
      </mesh>
      <mesh position={[1.2, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[1.1, 1.1, 0.8, 6]} />
        <meshStandardMaterial color="#171717" metalness={0.9} roughness={0.3} />
      </mesh>
      {/* Crimson Brand Plates */}
      <mesh position={[-1.61, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial color="#FF0033" metalness={0.95} roughness={0.1} />
      </mesh>
      <mesh position={[1.61, 0, 0]} rotation={[0, -Math.PI / 2, 0]}>
        <circleGeometry args={[0.5, 32]} />
        <meshStandardMaterial color="#FF0033" metalness={0.95} roughness={0.1} />
      </mesh>
    </group>
  );
}

const EQUIPMENT_DATA = [
  {
    id: 'dumbbells',
    name: 'Hex Pro Dumbbells',
    specs: 'Commercial Grade Hex Cast Iron (2.5kg - 50kg)',
    features: ['Ergonomic Chrome Knurled Handle', 'Anti-Roll Hexagon Design', 'Heavy Duty Vulcanized Rubber'],
    render: HexDumbbellMesh,
  },
  {
    id: 'barbell',
    name: 'Olympic Power Barbell & Plates',
    specs: '20KG Competition Bar (2000lb Tensile Rating)',
    features: ['Precision Needle Bearings', 'Color-Coded Rubber Bumper Plates', 'Zero Bounce Drop Rating'],
    render: OlympicBarbellMesh,
  },
  {
    id: 'rack',
    name: 'Heavy Power Cage & Rig',
    specs: '3x3" 11-Gauge Structural Steel Tube Frame',
    features: ['Multi-Grip Pull Up Station', 'Laser Cut Hole Spacing', 'Heavy Duty Safety Drop Pins'],
    render: PowerRackMesh,
  },
  {
    id: 'bench',
    name: 'Commercial Adjustable Bench',
    specs: '7 Incline Angles (-15° to +85° Settings)',
    features: ['High-Density Tear-Resistant Foam', 'Built-in Rear Transport Wheels', '1000lb Tested Weight Capacity'],
    render: WorkoutBenchMesh,
  },
];

export default function EquipmentVisualizer() {
  const [activeTab, setActiveTab] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const currentEquipment = EQUIPMENT_DATA[activeTab];
  const ActiveMesh = currentEquipment.render;

  return (
    <section id="equipment" className="py-20 bg-dark-900/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-beast-500/10 border border-beast-500/30 text-beast-400 text-xs font-semibold uppercase tracking-wider mb-4 shadow-glow-crimson">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Interactive 3D Gear Visualizer</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight font-heading">
            INSPECT OUR <span className="crimson-gradient-text">BEAST GEAR</span>
          </h2>
          <p className="mt-4 text-gray-400 text-base md:text-lg">
            Experience our commercial workout gear in interactive WebGL 3D before your first workout at Keelaveethi, Madurai.
          </p>
        </div>

        {/* Equipment Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {EQUIPMENT_DATA.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-3 rounded-2xl font-bold text-sm transition-all duration-300 flex items-center space-x-2 ${
                activeTab === idx
                  ? 'bg-gradient-to-r from-beast-500 to-beast-600 text-white shadow-glow-crimson scale-105 border border-beast-400'
                  : 'bg-dark-800 text-gray-300 hover:text-white hover:bg-dark-700 border border-neutral-800'
              }`}
            >
              <Dumbbell className={`w-4 h-4 ${activeTab === idx ? 'text-white' : 'text-beast-400'}`} />
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        {/* 3D Visualizer Container Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center glass-panel rounded-3xl p-6 md:p-8 border border-beast-500/30">
          {/* 3D Canvas Box */}
          <div className="lg:col-span-7 relative h-[380px] md:h-[480px] w-full rounded-2xl bg-dark-950/95 overflow-hidden border border-neutral-800 shadow-2xl">
            {/* Control Toggles */}
            <div className="absolute top-4 right-4 z-10 flex items-center space-x-2">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-xl border backdrop-blur-md text-xs font-semibold transition-all flex items-center space-x-1.5 ${
                  autoRotate
                    ? 'bg-beast-500/20 text-beast-400 border-beast-500/40'
                    : 'bg-dark-800 text-gray-400 border-neutral-700'
                }`}
                title="Toggle Auto Rotation"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${autoRotate ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">{autoRotate ? 'Rotating ON' : 'Paused'}</span>
              </button>
            </div>

            {mounted ? (
              <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
                <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={45} />
                <ambientLight intensity={0.7} />
                <directionalLight position={[8, 12, 6]} intensity={1.8} color="#ffffff" />
                <pointLight position={[-6, -4, -4]} intensity={2.5} color="#FF0033" />
                <pointLight position={[6, -4, 4]} intensity={2.0} color="#E50914" />
                
                <ActiveMesh autoRotate={autoRotate} />
                
                <OrbitControls enableZoom={true} minDistance={3} maxDistance={8} rotateSpeed={0.7} />
              </Canvas>
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="w-12 h-12 border-4 border-beast-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}
          </div>

          {/* Equipment Technical Details */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-beast-400">Gym Equipment Specification</span>
              <h3 className="text-2xl md:text-3xl font-extrabold text-white mt-1 font-heading">{currentEquipment.name}</h3>
              <p className="text-beast-500 font-medium text-sm mt-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-beast-400" />
                {currentEquipment.specs}
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <h4 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Key Build Specs:</h4>
              <ul className="space-y-2.5">
                {currentEquipment.features.map((feat, i) => (
                  <li key={i} className="flex items-start space-x-3 text-gray-300 text-sm">
                    <div className="w-5 h-5 rounded-full bg-beast-500/20 text-beast-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                      ✓
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Call to Action */}
            <div className="pt-4">
              <a
                href="tel:08428090900"
                className="w-full inline-flex items-center justify-center space-x-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-beast-500 via-beast-600 to-beast-900 text-white font-extrabold text-base shadow-glow-crimson hover:brightness-125 transition-all transform hover:-translate-y-0.5"
              >
                <span>Call Gym to Test Gear: 084280 90900</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
