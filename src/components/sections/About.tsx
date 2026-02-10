"use client";

import { useRef } from "react";
import CountUp from "react-countup";
import { gsap } from "gsap";
import { STATS } from "@/lib/constants";
import { useGSAP } from "@/hooks/useGSAP";

export default function About() {
  const headRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const sectionRef = useGSAP<HTMLElement>(() => {
    // Animate Header
    if (headRef.current) {
      gsap.from(headRef.current.children, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });
    }

    // Animate Content
    if (contentRef.current) {
      gsap.from(contentRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    }

    // Animate Stats
    if (statsRef.current) {
      gsap.from(statsRef.current.children, {
        opacity: 0,
        y: 30,
        duration: 0.7,
        ease: "power3.out",
        stagger: 0.12,
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="section-spacing relative overflow-hidden bg-[#13101C]"
    >
      {/* Background orb */}
      <div
        aria-hidden="true"
        className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full pointer-events-none blur-[60px]"
        style={{
          background:
            "radial-gradient(circle, rgba(200,111,255,0.05) 0%, transparent 60%)",
        }}
      />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div ref={headRef} className="text-center max-w-3xl mx-auto mb-20 lg:mb-28">
          <p className="overline-tag mb-6">About Us</p>
          <h2 className="text-display font-heading text-white">
            Petroleum, engineered for
            <span className="block text-gradient">reliability at scale.</span>
          </h2>
        </div>

        {/* Content */}
        <div ref={contentRef} className="max-w-3xl mx-auto text-center mb-24 lg:mb-32">
          <p className="text-xl lg:text-2xl text-white/50 leading-relaxed mb-6">
            PAK Petroleum is built for mission-critical fuel continuity. We align
            procurement, storage, and distribution so operators, fleets, and
            partners move with confidence.
          </p>
          <p className="text-lg text-white/35 leading-relaxed">
            From Islamabad-Rawalpindi to the nation&apos;s highest-demand
            corridors, we deliver dependable supply with rigorous compliance and
            a modern logistics backbone designed for growth.
          </p>
        </div>

        {/* Stats */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden bg-white/[0.06] border border-white/[0.06]"
        >
          {STATS.map((stat, index) => {
            const decimals = stat.value % 1 !== 0 ? 1 : 0;
            return (
              <div
                key={stat.label}
                className="flex flex-col items-center text-center px-6 py-10 lg:py-14 bg-white/[0.02]"
              >
                <div className="flex items-baseline gap-1">
                  <CountUp
                    end={stat.value}
                    decimals={decimals}
                    duration={2.5}
                    enableScrollSpy
                    scrollSpyOnce
                    scrollSpyDelay={index * 150}
                  >
                    {({ countUpRef }) => (
                      <span
                        ref={countUpRef}
                        className="text-4xl lg:text-5xl font-bold text-gradient"
                      />
                    )}
                  </CountUp>
                  <span className="text-2xl lg:text-3xl font-bold text-gradient">
                    {stat.suffix}
                  </span>
                </div>
                <p className="mt-3 text-sm font-medium text-white/40 uppercase tracking-widest">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
