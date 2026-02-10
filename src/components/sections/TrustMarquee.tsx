"use client";

const items = [
  "OGRA Licensed",
  "ISO 9001:2015",
  "Nationwide Logistics",
  "Strategic Reserves",
  "HSE Compliant",
  "Fleet Management",
  "Industrial Supply",
  "Quality Assurance",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden mask-edges">
      <div
        className={`flex shrink-0 items-center gap-12 md:gap-24 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-sm font-mono font-semibold uppercase tracking-[0.15em] whitespace-nowrap text-slate-500 hover:text-teal-400 transition-colors duration-300 cursor-default"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <section
      className="py-12 overflow-hidden border-y border-[#1e2d4d]"
      style={{ background: '#0a192f' }}
    >
      <div className="space-y-8">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
