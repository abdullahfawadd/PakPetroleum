"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], { opacity: 0, y: 60 });
      gsap.set(imageRef.current, { opacity: 0, scale: 0.95 });
      gsap.set(scrollRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.5, defaults: { ease: "power4.out" } });
      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1.2 });
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.25);
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.9 }, 0.4);
      tl.to(imageRef.current, { opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }, 0.3);
      tl.to(scrollRef.current, { opacity: 1, duration: 0.6 }, 1);

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
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{ background: '#13101C' }}
    >
      {/* Large purple orb - EternaCloud style */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(200,111,255,0.2) 0%, rgba(172,36,255,0.1) 30%, transparent 60%)',
          filter: 'blur(80px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute top-[15%] right-[5%] w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(27,77,254,0.12) 0%, transparent 55%)',
          filter: 'blur(50px)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(254,136,27,0.08) 0%, transparent 55%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 container-main w-full pt-36 pb-24 lg:pt-44">
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            <div ref={headlineRef}>
              <p className="overline-tag mb-6">Mission-Critical Energy Continuity</p>
              <h1 className="text-hero font-heading text-white leading-[0.95]">
                Precision petroleum
                <span className="block text-gradient">for a nation in motion.</span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-body-lg text-white/55 max-w-xl mt-8 leading-relaxed"
            >
              PAK Petroleum is a 2026 launch focused on dependable supply, compliant
              operations, and a fast-growing distribution footprint across Pakistan&apos;s
              most critical routes.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-10">
              <a href="#operations" className="btn-primary group">
                <span>Explore operations</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a href="#contact" className="btn-outline">
                Request a supply plan
              </a>
            </div>
          </div>

          {/* Right column - Image card */}
          <div ref={imageRef}>
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{
                border: '1px solid rgba(200, 111, 255, 0.15)',
                minHeight: '420px',
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `url(${HERO_IMAGE_URL})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(150deg, rgba(19,16,28,0.9) 0%, rgba(19,16,28,0.4) 50%, rgba(19,16,28,0.15) 100%)",
                }}
              />
              <div className="relative z-10 p-8 flex flex-col justify-end h-full" style={{ minHeight: '420px' }}>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-400">
                  Field Snapshot
                </p>
                <h3 className="mt-4 text-2xl font-heading text-white">
                  High-throughput petroleum delivery
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed max-w-sm">
                  From terminals to stations, we orchestrate every handoff for
                  predictable flow and compliance-ready documentation.
                </p>
                <div className="mt-6 flex gap-4">
                  <div className="px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(200, 111, 255, 0.15)', color: '#C86FFF', border: '1px solid rgba(200, 111, 255, 0.2)' }}>
                    Launched 2026
                  </div>
                  <div className="px-4 py-2 rounded-full text-xs font-semibold" style={{ background: 'rgba(27, 77, 254, 0.15)', color: '#5B7FFF', border: '1px solid rgba(27, 77, 254, 0.2)' }}>
                    25+ Cities
                  </div>
                </div>
              </div>
            </div>
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
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
          Scroll
        </span>
        <div className="scroll-icon">
          <ChevronDown className="w-4 h-4 text-purple-400/70" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, #13101C, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
