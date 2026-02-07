"use client";

import { useEffect, useRef, useMemo, useCallback } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/* ============================================
   THREE.JS PARTICLE FIELD
   ============================================ */
const PARTICLE_COUNT = 800;

function ParticleField() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);

  const particleData = useMemo(() => {
    const data: {
      base: THREE.Vector3;
      speed: number;
      offset: number;
      scale: number;
      orbit: number;
    }[] = [];

    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const phi = Math.acos(1 - (2 * (i + 0.5)) / PARTICLE_COUNT);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      const r = 3 + Math.random() * 6;

      data.push({
        base: new THREE.Vector3(
          r * Math.sin(phi) * Math.cos(theta),
          r * Math.sin(phi) * Math.sin(theta),
          r * Math.cos(phi)
        ),
        speed: 0.15 + Math.random() * 0.4,
        offset: Math.random() * Math.PI * 2,
        scale: 0.01 + Math.random() * 0.025,
        orbit: 0.05 + Math.random() * 0.2,
      });
    }
    return data;
  }, []);

  useEffect(() => {
    if (!meshRef.current) return;
    const colors = [
      new THREE.Color("#3B7BF7"),
      new THREE.Color("#22C55E"),
      new THREE.Color("#FBBF24"),
      new THREE.Color("#6366F1"),
      new THREE.Color("#14B8A6"),
    ];
    const arr = new Float32Array(PARTICLE_COUNT * 3);
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const c = colors[Math.floor(Math.random() * colors.length)];
      arr[i * 3] = c.r;
      arr[i * 3 + 1] = c.g;
      arr[i * 3 + 2] = c.b;
    }
    meshRef.current.instanceColor = new THREE.InstancedBufferAttribute(arr, 3);
  }, []);

  useFrame((state) => {
    if (!meshRef.current) return;
    const t = state.clock.getElapsedTime();
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const p = particleData[i];
      const a = t * p.speed + p.offset;
      dummy.position.set(
        p.base.x + Math.sin(a) * p.orbit,
        p.base.y + Math.cos(a * 0.7) * p.orbit,
        p.base.z + Math.sin(a * 0.5) * p.orbit * 0.5
      );
      dummy.scale.setScalar(p.scale * (1 + Math.sin(t * p.speed + p.offset) * 0.3));
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
    meshRef.current.rotation.y = t * 0.015;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]} frustumCulled={false}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial transparent opacity={0.5} toneMapped={false} />
    </instancedMesh>
  );
}

/* ============================================
   HERO SECTION
   ============================================ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);
  const line3Ref = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const lines = [line1Ref.current, line2Ref.current, line3Ref.current].filter(Boolean);

      // Set initial state
      gsap.set(lines, { opacity: 0, y: 80, rotateX: -15 });
      gsap.set(subtitleRef.current, { opacity: 0, y: 40 });
      gsap.set(ctaRef.current, { opacity: 0, y: 40 });
      gsap.set(scrollRef.current, { opacity: 0 });
      if (canvasRef.current) gsap.set(canvasRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 3.2, defaults: { ease: "power4.out" } });

      // Canvas fade in
      if (canvasRef.current) {
        tl.to(canvasRef.current, { opacity: 1, duration: 2, ease: "power2.inOut" }, 0);
      }

      // Headline lines stagger in
      tl.to(lines, {
        opacity: 1,
        y: 0,
        rotateX: 0,
        duration: 1.2,
        stagger: 0.15,
      }, 0.2);

      // Subtitle
      tl.to(subtitleRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.9,
      }, 0.8);

      // CTA
      tl.to(ctaRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
      }, 1.1);

      // Scroll indicator
      tl.to(scrollRef.current, {
        opacity: 1,
        duration: 0.6,
      }, 1.6);

      // Parallax on scroll
      gsap.to(sectionRef.current, {
        yPercent: 20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Scroll indicator animation
  useEffect(() => {
    if (!scrollRef.current) return;
    const el = scrollRef.current.querySelector(".scroll-icon");
    if (!el) return;
    const anim = gsap.to(el, {
      y: 8,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
    return () => { anim.kill(); };
  }, []);

  const handleScrollDown = useCallback(() => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Three.js particles */}
      <div ref={canvasRef} className="absolute inset-0 z-0 opacity-0" aria-hidden="true">
        <Canvas
          camera={{ position: [0, 0, 8], fov: 60, near: 0.1, far: 100 }}
          dpr={[1, 1.5]}
          gl={{ antialias: false, alpha: true }}
          style={{ background: "transparent" }}
        >
          <ParticleField />
        </Canvas>
      </div>

      {/* Radial glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full z-0 pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(59,123,247,0.06) 0%, transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 container-main w-full pt-40 pb-20 lg:pt-48 lg:pb-28">
        <div className="max-w-5xl perspective">
          {/* Headline - massive typography */}
          <h1 className="mb-8">
            <span
              ref={line1Ref}
              className="block text-hero font-extrabold text-text-primary"
            >
              Powering
            </span>
            <span
              ref={line2Ref}
              className="block text-hero font-extrabold gradient-text"
            >
              Pakistan&apos;s
            </span>
            <span
              ref={line3Ref}
              className="block text-hero font-extrabold text-text-primary"
            >
              Future.
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-body-lg text-text-secondary max-w-xl mb-12 leading-relaxed"
          >
            Premium petroleum trading and distribution, building the nation&apos;s
            most trusted energy network. Launched 2026.
          </p>

          {/* CTA */}
          <div ref={ctaRef} className="flex flex-wrap items-center gap-5">
            <a
              href="#operations"
              className="group relative inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-bg bg-text-primary overflow-hidden transition-all duration-500 hover:shadow-glow-blue hover:scale-[1.02]"
            >
              <span className="relative z-10">Explore Operations</span>
              <ArrowRight className="relative z-10 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-semibold text-text-primary border border-border-light transition-all duration-500 hover:border-border-active hover:bg-white/[0.03]"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-3 cursor-pointer opacity-0"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
        aria-label="Scroll down"
        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleScrollDown(); }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-text-muted">
          Scroll
        </span>
        <div className="scroll-icon">
          <ChevronDown className="w-4 h-4 text-text-muted" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, #050505, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
