export const SITE_CONFIG = {
  name: "PAK Petroleum",
  tagline: "Powering Pakistan's Future",
  description:
    "Premium petroleum trading, distribution, and logistics across Pakistan. Dependable supply at scale.",
  email: "info@pakpetroleum.com",
  phone: "+92 51 234 5678",
  address: "Blue Area, Islamabad, Pakistan",
  socials: {
    linkedin: "#",
    twitter: "#",
    facebook: "#",
  },
} as const;

export const NAV_ITEMS = [
  { name: "What We Do", href: "/services" },
  { name: "Our Approach", href: "/approach" },
  { name: "About Us", href: "/about" },
  { name: "Insights", href: "/insights" },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Fuel Stations" },
  { value: 12, suffix: "M+", label: "Litres Distributed" },
  { value: 25, suffix: "+", label: "Cities Covered" },
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
] as const;

export const OPERATIONS = [
  {
    title: "Procurement",
    description:
      "Strategic supplier partnerships and allocation planning for stable, high-quality supply at competitive rates.",
    icon: "procurement",
  },
  {
    title: "Storage",
    description:
      "Modern facilities with real-time monitoring, batch testing, and safety-first inventory controls.",
    icon: "storage",
  },
  {
    title: "Distribution",
    description:
      "GPS-tracked delivery operations connecting fuel stations and fleet operators across 25+ cities.",
    icon: "distribution",
  },
  {
    title: "Trading",
    description:
      "Market intelligence and trading discipline that protect supply continuity and margins.",
    icon: "trading",
  },
] as const;

export const COMMITMENTS = [
  {
    title: "Safety & Compliance",
    description:
      "Rigorous safety protocols, regular audits, and full adherence to OGRA regulatory requirements across all operations.",
    icon: "shield",
  },
  {
    title: "Sustainable Operations",
    description:
      "Committed to reducing our environmental footprint through cleaner logistics, responsible sourcing, and community investment.",
    icon: "leaf",
  },
  {
    title: "Operational Excellence",
    description:
      "Leveraging technology for smarter fuel management—real-time tracking, predictive analytics, and continuous improvement.",
    icon: "lightbulb",
  },
] as const;

export const FAQ_ITEMS = [
  {
    question: "What areas does PAK Petroleum serve?",
    answer:
      "We operate across 25+ cities in Pakistan, with primary hubs in Islamabad-Rawalpindi, Lahore, Karachi, and Peshawar. Our distribution network is continuously expanding to reach new corridors.",
  },
  {
    question: "What petroleum products do you offer?",
    answer:
      "We supply Premium Motor Gasoline (HOBC), Regular Gasoline (92 RON), High-Speed Diesel (HSD), Light Diesel Oil (LDO), and Kerosene. All products meet OGRA quality standards with full chain-of-custody documentation.",
  },
  {
    question: "How do you ensure fuel quality?",
    answer:
      "Every batch undergoes rigorous testing at our laboratory facilities. We maintain chain-of-custody documentation and implement real-time quality monitoring at all storage and handoff points.",
  },
  {
    question: "Can I partner with PAK Petroleum?",
    answer:
      "We welcome strategic partners. Contact our business development team to discuss franchise opportunities, bulk supply agreements, or distribution partnerships tailored to your needs.",
  },
  {
    question: "What are your delivery timelines?",
    answer:
      "Standard deliveries within Islamabad-Rawalpindi complete within 24 hours. Other cities maintain a 48-72 hour window. Emergency priority supply can be arranged through our 24/7 operations desk.",
  },
] as const;

export const TESTIMONIALS = [
  {
    name: "Ahmed Rashid",
    role: "Fleet Manager, TransPak Logistics",
    content:
      "PAK Petroleum keeps our fleet on schedule. Their communication and delivery reliability are exceptional.",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    role: "Operations Director, CityFuel Stations",
    content:
      "The distribution team is precise and consistent. We have full visibility on delivery windows.",
    rating: 5,
  },
  {
    name: "Usman Malik",
    role: "CEO, Karachi Transport Co.",
    content:
      "They simplified our supply planning and helped us reduce fuel spend while improving quality.",
    rating: 5,
  },
] as const;
