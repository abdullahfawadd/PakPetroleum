"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { value: "150+", label: "Fuel Stations", color: "border-accent-blue" },
  { value: "25+", label: "Cities Covered", color: "border-accent-green" },
  { value: "99.9%", label: "Uptime Rate", color: "border-accent-gold" },
];

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from(headRef.current, {
        opacity: 0, y: 60, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", toggleActions: "play none none none" },
      });
      gsap.from(leftRef.current, {
        opacity: 0, x: -40, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: leftRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
      gsap.from(rightRef.current, {
        opacity: 0, x: 40, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: rightRef.current, start: "top 85%", toggleActions: "play none none none" },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="section-spacing bg-bg">
      <div className="container-main">
        {/* Header */}
        <div ref={headRef} className="mb-20">
          <p className="overline-tag mb-6">About Us</p>
          <h2 className="text-display text-text-primary max-w-4xl">
            We don&apos;t just distribute fuel.
            <br />
            <span className="gradient-text">We power progress.</span>
          </h2>
        </div>

        {/* Two columns */}
        <div className="grid lg:grid-cols-5 gap-16 lg:gap-24">
          {/* Left - text */}
          <div ref={leftRef} className="lg:col-span-3">
            <p className="text-body-lg text-text-secondary mb-6 leading-relaxed">
              PAK Petroleum is a forward-thinking petroleum trading and
              distribution company headquartered in Islamabad-Rawalpindi,
              launched in 2026. We are dedicated to powering Pakistan&apos;s
              economic growth through reliable fuel supply and innovative
              energy solutions.
            </p>
            <p className="text-body-lg text-text-secondary leading-relaxed">
              Our vision is to become Pakistan&apos;s most trusted energy
              partner by building a nationwide network of modern fuel
              stations, leveraging cutting-edge technology for supply chain
              efficiency, and maintaining the highest standards of safety
              and environmental responsibility.
            </p>
          </div>

          {/* Right - stats */}
          <div ref={rightRef} className="lg:col-span-2 space-y-8">
            {stats.map((stat, i) => (
              <div key={i} className={`border-l-2 ${stat.color} pl-6`}>
                <p className="text-display font-extrabold text-text-primary leading-none">
                  {stat.value}
                </p>
                <p className="text-caption text-text-muted uppercase tracking-widest mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
