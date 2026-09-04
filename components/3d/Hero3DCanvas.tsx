'use client';

import React, { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';

// Procedural Dumbbell 3D Mesh Component
function MetallicDumbbell({ isHovered }: { isHovered: boolean }) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * (isHovered ? 0.8 : 0.3);
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.15;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} scale={1.2}>
      {/* Central Knurled Handle Bar */}
      <mesh position={[0, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.22, 0.22, 3.8, 32]} />
        <meshStandardMaterial
          color="#e5e5e5"
          metalness={0.95}
          roughness={0.15}
          envMapIntensity={1.5}
        />
      </mesh>

      {/* Grip Rubber / Knurl Accent Rings */}
      {[-0.8, -0.4, 0, 0.4, 0.8].map((x, i) => (
        <mesh key={i} position={[x, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.24, 0.24, 0.08, 24]} />
          <meshStandardMaterial color="#0a0a0a" roughness={0.9} metalness={0.1} />
        </mesh>
      ))}

      {/* Left Weight Plates Stack */}
      {[-1.25, -1.5, -1.75].map((x, i) => (
        <group key={`left-${i}`} position={[x, 0, 0]}>
          {/* Main Metallic Plate */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.2 - i * 0.08, 1.2 - i * 0.08, 0.22, 32]} />
            <meshStandardMaterial
              color="#171717"
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
          {/* Inner Crimson Red Accent Ring */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.8 - i * 0.05, 0.03, 16, 32]} />
            <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Left Locking Collar */}
      <mesh position={[-1.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 24]} />
        <meshStandardMaterial color="#E50914" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Right Weight Plates Stack */}
      {[1.25, 1.5, 1.75].map((x, i) => (
        <group key={`right-${i}`} position={[x, 0, 0]}>
          {/* Main Metallic Plate */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[1.2 - i * 0.08, 1.2 - i * 0.08, 0.22, 32]} />
            <meshStandardMaterial
              color="#171717"
              metalness={0.9}
              roughness={0.2}
            />
          </mesh>
          {/* Inner Crimson Red Accent Ring */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <torusGeometry args={[0.8 - i * 0.05, 0.03, 16, 32]} />
            <meshStandardMaterial color="#FF0033" metalness={0.9} roughness={0.1} />
          </mesh>
        </group>
      ))}

      {/* Right Locking Collar */}
      <mesh position={[1.95, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.4, 0.4, 0.15, 24]} />
        <meshStandardMaterial color="#E50914" metalness={0.9} roughness={0.1} />
      </mesh>
    </group>
  );
}

// Glowing Crimson Particle Ring
function FloatingParticleRing() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame((_, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.1;
      pointsRef.current.rotation.z += delta * 0.05;
    }
  });

  const particleCount = 80;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount; i++) {
    const angle = (i / particleCount) * Math.PI * 2;
    const radius = 2.8 + Math.random() * 0.6;
    positions[i * 3] = Math.cos(angle) * radius;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 1.5;
    positions[i * 3 + 2] = Math.sin(angle) * radius;
  }

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#FF0033"
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

export default function Hero3DCanvas() {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[400px] md:h-[540px] flex flex-col items-center justify-center bg-dark-900/60 rounded-3xl border border-beast-500/20 backdrop-blur-md">
        <div className="w-16 h-16 border-4 border-beast-500 border-t-transparent rounded-full animate-spin"></div>
        <p className="mt-4 text-beast-400 text-sm font-medium tracking-wide">Loading Interactive 3D Equipment...</p>
      </div>
    );
  }

  return (
    <div 
      className="relative w-full h-[400px] md:h-[540px] rounded-3xl overflow-hidden glass-panel border border-beast-500/40 shadow-glow-crimson group cursor-grab active:cursor-grabbing"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Floating Badge */}
      <div className="absolute top-4 left-4 z-10 bg-dark-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-beast-500/40 flex items-center space-x-2 shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-beast-500 animate-ping"></span>
        <span className="text-xs font-semibold text-beast-400 tracking-wider uppercase">Interactive 3D View · Drag to Rotate</span>
      </div>

      <Canvas gl={{ antialias: true }} dpr={[1, 2]}>
        <PerspectiveCamera makeDefault position={[0, 0, 5.5]} fov={50} />

        {/* Ambient & Crimson Studio Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1.8} color="#ffffff" />
        <pointLight position={[-8, -5, -5]} intensity={3.0} color="#FF0033" />
        <pointLight position={[5, -5, 5]} intensity={2.0} color="#E50914" />
        <spotLight position={[0, 10, 0]} intensity={2.5} angle={0.6} penumbra={1} color="#FF0033" />

        {/* 3D Floating Dumbbell */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.8}>
          <MetallicDumbbell isHovered={isHovered} />
          <FloatingParticleRing />
        </Float>

        {/* Orbit Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
          rotateSpeed={0.8}
        />
      </Canvas>

      {/* Interactive Controls Overlay Hint */}
      <div className="absolute bottom-4 right-4 z-10 bg-dark-950/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-neutral-800 text-[11px] text-gray-300 flex items-center gap-1.5">
        <svg className="w-4 h-4 text-beast-400 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
        <span>Click & drag 360°</span>
      </div>
    </div>
  );
}
