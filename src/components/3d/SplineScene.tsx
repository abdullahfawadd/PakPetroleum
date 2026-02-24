"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars, Line, PerspectiveCamera, Instances, Instance } from "@react-three/drei";
import * as THREE from "three";

function NetworkGraph() {
  const groupRef = useRef<THREE.Group>(null);

  // Generate nodes on a sphere surface
  const nodes = useMemo(() => {
    const temp = [];
    const count = 40;
    const radius = 3.5;

    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const x = radius * Math.sin(phi) * Math.cos(theta);
      const y = radius * Math.sin(phi) * Math.sin(theta);
      const z = radius * Math.cos(phi);
      temp.push(new THREE.Vector3(x, y, z));
    }
    return temp;
  }, []);

  // Create connections based on distance
  const connections = useMemo(() => {
    const lines: THREE.Vector3[] = [];
    // Optimization: Use squared distance to avoid expensive Math.sqrt calls
    // and a nested loop starting from i+1 to halve the iterations
    const thresholdSq = 2.5 * 2.5;

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const node = nodes[i];
        const other = nodes[j];
        if (node.distanceToSquared(other) < thresholdSq) {
          lines.push(node);
          lines.push(other);
        }
      }
    }
    return lines;
  }, [nodes]);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      groupRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.1;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Nodes - Optimized with Instances for single draw call */}
      <Instances range={nodes.length}>
        <sphereGeometry args={[0.04, 8, 8]} />
        <meshBasicMaterial color="#64FFDA" />

        {nodes.map((pos, i) => (
          <Instance key={i} position={pos} />
        ))}
      </Instances>

      {/* Connections - using simple Line for performance/style */}
      <Line
        points={connections}
        color="#112240" // Light Navy connection
        opacity={0.3}
        transparent
        lineWidth={1} // Pixel width
        segments // Treat points as segments (pairs)
      />

      {/* Highlighted Connections - a few brighter lines for "energy" flow */}
       <Line
        points={connections.slice(0, 20)} // Just a subset
        color="#64FFDA"
        opacity={0.6}
        transparent
        lineWidth={1.5}
        segments
      />
    </group>
  );
}

export default function SplineScene({ className }: { className?: string }) {
  return (
    <div className={className}>
      <Canvas dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={50} />

        {/* Environment / Lighting */}
        <ambientLight intensity={0.2} color="#0a192f" />
        <pointLight position={[10, 10, 10]} intensity={1} color="#64FFDA" />

        {/* Floating Network */}
        <Float speed={1} rotationIntensity={0.2} floatIntensity={0.2}>
          <NetworkGraph />
        </Float>

        {/* Background Particles */}
        <Stars radius={50} depth={50} count={2000} factor={3} saturation={0} fade speed={0.5} />
      </Canvas>
    </div>
  );
}
