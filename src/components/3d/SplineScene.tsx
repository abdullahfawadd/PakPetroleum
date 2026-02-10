"use client";

import { Canvas } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, AdaptiveDpr } from "@react-three/drei";

function SceneContent() {
  return (
    <>
      <Float
        speed={1} // Animation speed
        rotationIntensity={0.5} // XYZ rotation intensity
        floatIntensity={0.5} // Up/down float intensity
      >
        <Icosahedron args={[1, 1]} scale={2.5}>
          <MeshDistortMaterial
            color="#64FFDA" // Teal
            attach="material"
            distort={0.4} // Strength, 0 disables the effect
            speed={2} // Speed
            roughness={0.2}
            metalness={0.9}
            flatShading
          />
        </Icosahedron>
      </Float>
      {/* Lighting for Industrial/Metallic Look */}
      <ambientLight intensity={0.5} color="#0a192f" />
      <directionalLight position={[10, 10, 5]} intensity={2} color="#64FFDA" />
      <pointLight position={[-10, -10, -5]} intensity={1} color="#f59e0b" />
    </>
  );
}

export default function SplineScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        dpr={[1, 2]} // Clamp pixel ratio for performance
        gl={{ antialias: true, alpha: true }}
      >
        <SceneContent />
        <AdaptiveDpr pixelated />
      </Canvas>
    </div>
  );
}
