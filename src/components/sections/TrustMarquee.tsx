"use client";

const items = [
  "OGRA Licensed",
  "ISO 9001 Process",
  "Nationwide Network",
  "24/7 Operations",
  "HSE Aligned",
  "Fleet-Scale Supply",
  "Premium Grade Fuel",
  "Real-Time Tracking",
];

function Row({ reverse = false }: { reverse?: boolean }) {
  const doubled = [...items, ...items];
  return (
    <div className="flex overflow-hidden mask-edges">
      <div
        className={`flex shrink-0 items-center gap-10 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="text-xs font-semibold uppercase tracking-[0.22em] whitespace-nowrap"
            style={{ color: 'rgba(200, 111, 255, 0.25)' }}
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
      className="py-8 overflow-hidden"
      style={{ background: '#1A1726', borderTop: '1px solid rgba(200, 111, 255, 0.06)', borderBottom: '1px solid rgba(200, 111, 255, 0.06)' }}
    >
      <div className="space-y-5">
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
