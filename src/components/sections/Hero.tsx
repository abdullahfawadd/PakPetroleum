"use client";

import { useEffect, useRef, useCallback } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const SIGNAL_CARDS = [
  {
    title: "Supply Assurance",
    detail: "Multi-source procurement with strategic reserves and guaranteed allocations.",
    meta: "Launched 2026",
  },
  {
    title: "Network Coverage",
    detail: "25+ cities, expanding quarterly across logistics corridors and trade routes.",
    meta: "Next: South Punjab",
  },
  {
    title: "Compliance + HSE",
    detail: "OGRA-aligned standards, audited safety programs, zero-incident culture.",
    meta: "Always on",
  },
];

const HERO_IMAGE_URL =
  "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80";

/* ============================================
   HERO SECTION
   ============================================ */
export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.set([headlineRef.current, subtitleRef.current, ctaRef.current], { opacity: 0, y: 50 });
      gsap.set(cardsRef.current.filter(Boolean), { opacity: 0, y: 40 });
      gsap.set(scrollRef.current, { opacity: 0 });

      const tl = gsap.timeline({ delay: 0.4, defaults: { ease: "power4.out" } });
      tl.to(headlineRef.current, { opacity: 1, y: 0, duration: 1 });
      tl.to(subtitleRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.2);
      tl.to(ctaRef.current, { opacity: 1, y: 0, duration: 0.8 }, 0.35);
      tl.to(cardsRef.current.filter(Boolean), { opacity: 1, y: 0, duration: 0.8, stagger: 0.12 }, 0.4);
      tl.to(scrollRef.current, { opacity: 1, duration: 0.6 }, 0.9);

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
    return () => anim.kill();
  }, []);

  const handleScrollDown = useCallback(() => {
    const target = document.querySelector("#about");
    if (target) target.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-primary-900"
    >
      {/* Background texture + image wash */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${HERO_IMAGE_URL})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 20% 10%, rgba(122,76,255,0.18), transparent 45%), radial-gradient(circle at 80% 20%, rgba(255,168,76,0.18), transparent 45%), linear-gradient(160deg, rgba(11,10,18,0.96) 10%, rgba(11,10,18,0.86) 60%, rgba(11,10,18,0.7) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container-main w-full pt-36 pb-24 lg:pt-44">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
          {/* Left column */}
          <div>
            <div ref={headlineRef}>
              <p className="overline-tag mb-6 text-white/70">Mission-Critical Energy Continuity</p>
              <h1 className="text-hero font-heading text-white">
                Precision petroleum
                <span className="block gradient-text">for a nation in motion.</span>
              </h1>
            </div>

            <p
              ref={subtitleRef}
              className="text-body-lg text-white/70 max-w-xl mt-8 leading-relaxed"
            >
              PAK Petroleum is a 2026 launch focused on dependable supply, compliant
              operations, and a fast-growing distribution footprint across Pakistan&apos;s
              most critical routes.
            </p>

            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-10">
              <a
                href="#operations"
                className="group inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-semibold text-primary-900 bg-white transition-all duration-500 hover:shadow-glow-blue hover:scale-[1.02]"
              >
                <span>Explore operations</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-3 px-7 py-4 rounded-full text-sm font-semibold text-white border border-white/30 transition-all duration-500 hover:border-white/60 hover:bg-white/10"
              >
                Request a supply plan
              </a>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-4">
            <div
              className="relative rounded-3xl border border-white/10 overflow-hidden shadow-soft"
              style={{ minHeight: "320px" }}
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
                  background:
                    "linear-gradient(150deg, rgba(11,10,18,0.85) 0%, rgba(11,10,18,0.45) 55%, rgba(11,10,18,0.2) 100%)",
                }}
              />
              <div className="relative z-10 p-6 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-white/70">
                  Field Snapshot
                </p>
                <h3 className="mt-4 text-2xl font-heading">
                  High-throughput petroleum delivery
                </h3>
                <p className="mt-3 text-sm text-white/80 leading-relaxed">
                  From terminals to stations, we orchestrate every handoff for
                  predictable flow and compliance-ready documentation.
                </p>
              </div>
            </div>

            {SIGNAL_CARDS.map((card, index) => (
              <div
                key={card.title}
                ref={(el) => {
                  cardsRef.current[index] = el;
                }}
                className="card-premium border border-white/10 bg-white/5 backdrop-blur"
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-white">
                    {card.title}
                  </h3>
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
                    {card.meta}
                  </span>
                </div>
                <p className="mt-4 text-sm text-white/70 leading-relaxed">
                  {card.detail}
                </p>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />
              </div>
            ))}
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
        <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/60">
          Scroll
        </span>
        <div className="scroll-icon">
          <ChevronDown className="w-4 h-4 text-white/70" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 z-[1] pointer-events-none"
        style={{ background: "linear-gradient(to top, #0B0A08, transparent)" }}
        aria-hidden="true"
      />
    </section>
  );
}
