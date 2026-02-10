"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const tagRef = useRef<HTMLParagraphElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([tagRef.current, headlineRef.current, subtitleRef.current, ctaRef.current], {
        opacity: 0,
        y: 50,
      });
      gsap.set(scrollRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.5, defaults: { ease: "power4.out" } });
      tl.to(tagRef.current, { opacity: 1, y: 0, duration: 0.8 });
      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2 }, 0.15);
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.35);
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.5);
      tl.to(scrollRef.current, { opacity: 1, duration: 0.6 }, 1.2);

      gsap.to(sectionRef.current, {
        yPercent: 8,
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
    return () => {
      anim.kill();
    };
  }, []);

  const handleScrollDown = useCallback(() => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#13101C" }}
    >
      {/* Background orbs */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[1200px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(200,111,255,0.12) 0%, rgba(172,36,255,0.06) 30%, transparent 55%)",
          filter: "blur(100px)",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[20%] right-[10%] w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(27,77,254,0.08) 0%, transparent 55%)",
          filter: "blur(60px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-main w-full text-center pt-32 pb-24 lg:pt-52 lg:pb-40">
        <div className="max-w-4xl mx-auto">
          <p ref={tagRef} className="overline-tag mb-8">
            Petroleum Trading &amp; Distribution
          </p>

          <h1
            ref={headlineRef}
            className="text-hero font-heading text-white leading-[0.95] mb-8"
          >
            Dependable energy
            <span className="block text-gradient">for a nation in motion.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-body-lg text-white/45 max-w-2xl mx-auto leading-relaxed mb-12"
          >
            PAK Petroleum delivers reliable fuel supply, compliant operations,
            and a growing distribution network across Pakistan&apos;s most
            critical corridors.
          </p>

          <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
            <a href="#services" className="btn-primary group">
              <span>Explore our services</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a href="#contact" className="btn-outline">
              Get in touch
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
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") handleScrollDown();
        }}
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/30">
          Scroll
        </span>
        <div className="scroll-icon">
          <ChevronDown className="w-4 h-4 text-purple-400/60" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, #13101C, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
