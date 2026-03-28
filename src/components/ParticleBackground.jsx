import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const Particles = ({ count = 200 }) => {
  const mesh = useRef();

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const sizes = new Float32Array(count);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
      sizes[i] = Math.random() * 0.03 + 0.01;
    }
    return { positions, sizes };
  }, [count]);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (mesh.current) {
      mesh.current.rotation.y = time * 0.03;
      mesh.current.rotation.x = Math.sin(time * 0.02) * 0.1;
    }
  });

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        color="#8b5cf6"
        transparent
        opacity={0.6}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
};

const FloatingGeometry = () => {
  const torusRef = useRef();
  const octaRef = useRef();
  const icoRef = useRef();

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (torusRef.current) {
      torusRef.current.rotation.x = time * 0.3;
      torusRef.current.rotation.y = time * 0.2;
      torusRef.current.position.y = Math.sin(time * 0.5) * 0.5;
    }
    if (octaRef.current) {
      octaRef.current.rotation.x = time * 0.2;
      octaRef.current.rotation.z = time * 0.3;
      octaRef.current.position.y = Math.cos(time * 0.4) * 0.3 + 1;
    }
    if (icoRef.current) {
      icoRef.current.rotation.y = time * 0.25;
      icoRef.current.rotation.z = time * 0.15;
      icoRef.current.position.y = Math.sin(time * 0.6) * 0.4 - 1;
    }
  });

  return (
    <>
      <mesh ref={torusRef} position={[3, 0, -2]}>
        <torusGeometry args={[0.8, 0.3, 16, 32]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.3}
        />
      </mesh>
      <mesh ref={octaRef} position={[-3, 1, -3]}>
        <octahedronGeometry args={[0.7]} />
        <meshStandardMaterial
          color="#06b6d4"
          wireframe
          transparent
          opacity={0.25}
        />
      </mesh>
      <mesh ref={icoRef} position={[2, -1, -4]}>
        <icosahedronGeometry args={[0.6]} />
        <meshStandardMaterial
          color="#8b5cf6"
          wireframe
          transparent
          opacity={0.2}
        />
      </mesh>
    </>
  );
};

const ParticleBackground = () => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={0.5} color="#8b5cf6" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#06b6d4" />
        <Particles count={150} />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
};

export default ParticleBackground;
