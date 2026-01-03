import { Canvas, useFrame } from '@react-three/fiber';
import { useRef, useMemo } from 'react';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 2000;

  const particles = useMemo(() => {
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      
      // Distribute particles in a sphere
      const radius = Math.random() * 25 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      
      positions[i3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i3 + 2] = radius * Math.cos(phi);

      // Blue-purple gradient colors
      const colorChoice = Math.random();
      if (colorChoice < 0.33) {
        colors[i3] = 0.2;     // R
        colors[i3 + 1] = 0.4; // G
        colors[i3 + 2] = 1.0; // B (blue)
      } else if (colorChoice < 0.66) {
        colors[i3] = 0.6;     // R
        colors[i3 + 1] = 0.2; // G
        colors[i3 + 2] = 1.0; // B (purple)
      } else {
        colors[i3] = 0.0;     // R
        colors[i3 + 1] = 0.8; // G
        colors[i3 + 2] = 1.0; // B (cyan)
      }
    }

    return { positions, colors };
  }, []);

  useFrame(({ clock }) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = clock.getElapsedTime() * 0.05;
      pointsRef.current.rotation.x = Math.sin(clock.getElapsedTime() * 0.1) * 0.2;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={particles.colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingOrbs() {
  const orb1Ref = useRef<THREE.Mesh>(null);
  const orb2Ref = useRef<THREE.Mesh>(null);
  const orb3Ref = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();

    if (orb1Ref.current) {
      orb1Ref.current.position.x = Math.sin(t * 0.3) * 8;
      orb1Ref.current.position.y = Math.cos(t * 0.2) * 6;
      orb1Ref.current.position.z = Math.sin(t * 0.4) * 4;
    }

    if (orb2Ref.current) {
      orb2Ref.current.position.x = Math.cos(t * 0.4) * 10;
      orb2Ref.current.position.y = Math.sin(t * 0.3) * 8;
      orb2Ref.current.position.z = Math.cos(t * 0.2) * 6;
    }

    if (orb3Ref.current) {
      orb3Ref.current.position.x = Math.sin(t * 0.2) * 12;
      orb3Ref.current.position.y = Math.cos(t * 0.4) * 7;
      orb3Ref.current.position.z = Math.sin(t * 0.3) * 5;
    }
  });

  return (
    <>
      <mesh ref={orb1Ref}>
        <sphereGeometry args={[1.5, 32, 32]} />
        <meshStandardMaterial
          color="#3b82f6"
          emissive="#3b82f6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh ref={orb2Ref}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>

      <mesh ref={orb3Ref}>
        <sphereGeometry args={[1.2, 32, 32]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={0.5}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

export default function AnimatedBackground3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{ alpha: true, antialias: true }}
        dpr={[1, 2]}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <ParticleField />
        <FloatingOrbs />
      </Canvas>
    </div>
  );
}