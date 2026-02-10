"use client";

import { useRef, useCallback } from "react";
import dynamic from "next/dynamic";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@/hooks/useGSAP";

const SplineScene = dynamic(() => import("@/components/3d/SplineScene"), {
  ssr: false,
  loading: () => (
    <div
      className="absolute top-0 right-0 w-[80vw] h-[80vh] opacity-10 pointer-events-none"
      style={{
        background: "radial-gradient(circle at 70% 30%, #64FFDA 0%, transparent 60%)",
        filter: "blur(120px)",
      }}
    />
  ),
});

export default function Hero() {
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const sectionRef = useGSAP<HTMLElement>(() => {
    // Initial states
    gsap.set([tagRef.current, headlineRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 40,
    });
    gsap.set(scrollRef.current, { opacity: 0 });

    // Intro timeline
    const tl = gsap.timeline({ delay: 0.5, defaults: { ease: "power3.out" } });
    tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.8 });
    tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1 }, 0.2);
    tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 1 }, 0.4);
    tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 1 }, 0.6);
    tl.to(scrollRef.current, { opacity: 1, duration: 0.8 }, 1.5);

    // Parallax effect
    if (sectionRef.current) {
      gsap.to(sectionRef.current, {
        yPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }

    // Scroll icon animation
    if (scrollRef.current) {
      const el = scrollRef.current.querySelector(".scroll-icon");
      if (el) {
        gsap.to(el, {
          y: 6,
          duration: 1.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut",
        });
      }
    }
  }, []);

  const handleScrollDown = useCallback(() => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#020c1b]"
    >
      {/* Background Mesh/Grid - Industrial Look */}
      <div className="absolute inset-0 bg-mesh opacity-20 pointer-events-none" />

      {/* Subtle Dark Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#020c1b]/80 via-transparent to-[#020c1b] pointer-events-none" />

      {/* Abstract Energy Flow (3D Scene) */}
      <SplineScene className="absolute top-0 right-0 w-full h-full z-0 pointer-events-none opacity-60 mix-blend-screen" />

      {/* Content */}
      <div className="relative z-10 container-main w-full pt-32 pb-24 lg:pt-52 lg:pb-40">
        <div className="max-w-5xl">
          <p ref={tagRef} className="text-teal-400 font-mono text-sm tracking-widest mb-6 uppercase">
            National Energy Infrastructure
          </p>

          <h1
            ref={headlineRef}
            className="text-hero font-display text-slate-light leading-tight mb-8"
          >
            Powering a <br />
            <span className="text-teal-400">Nation in Motion.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-slate-400 max-w-2xl leading-relaxed mb-12"
          >
            PAK Petroleum ensures the continuity of Pakistan&apos;s critical energy supply.
            From strategic reserves to last-mile distribution, we are the backbone of
            industrial and commercial mobility.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center gap-6">
            <a href="#services" className="btn-primary group">
              <span>Our Capabilities</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-outline">
              Partner With Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-12 left-10 md:left-16 z-10 flex items-center gap-4 cursor-pointer opacity-0 group"
        onClick={handleScrollDown}
        role="button"
        tabIndex={0}
      >
        <div className="scroll-icon w-px h-12 bg-teal-400/50 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-1/2 bg-teal-400 animate-pulse" />
        </div>
        <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-500 group-hover:text-teal-400 transition-colors">
          Scroll Down
        </span>
      </div>
    </section>
  );
}
