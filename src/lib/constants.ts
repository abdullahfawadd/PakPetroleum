export const SITE_CONFIG = {
  name: "PAK Petroleum",
  tagline: "Mission-critical energy continuity",
  description:
    "Premium petroleum trading, distribution, and logistics across Pakistan. Built for dependable supply since 2026.",
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
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Operations", href: "#operations" },
  { name: "Commitment", href: "#commitment" },
  { name: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Fuel Stations" },
  { value: 12, suffix: "M+", label: "Litres Distributed" },
  { value: 25, suffix: "+", label: "Cities Covered" },
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
] as const;

export const OPERATIONS = [
  {
    title: "Procurement & Sourcing",
    description:
      "Strategic partnerships and allocation planning to secure stable, high-quality supply at competitive rates.",
    icon: "procurement",
    gradient: "from-primary-600 to-primary-800",
  },
  {
    title: "Storage & Inventory",
    description:
      "Modern storage facilities with real-time monitoring and safety-first inventory controls.",
    icon: "storage",
    gradient: "from-secondary-500 to-secondary-700",
  },
  {
    title: "Distribution Network",
    description:
      "GPS-tracked delivery operations connecting fuel stations and fleet operators nationwide.",
    icon: "distribution",
    gradient: "from-accent-500 to-accent-700",
  },
  {
    title: "Trading Operations",
    description:
      "Market intelligence and trading discipline that protect supply continuity and margins.",
    icon: "trading",
    gradient: "from-primary-500 to-secondary-500",
  },
] as const;

export const COMMITMENTS = [
  {
    title: "Safety First",
    description: "Rigorous safety protocols and regular audits across all operations.",
    icon: "shield",
  },
  {
    title: "Environmental Care",
    description: "Committed to sustainable practices and reducing carbon footprint.",
    icon: "leaf",
  },
  {
    title: "Full Compliance",
    description: "Complete adherence to OGRA and all regulatory requirements.",
    icon: "document",
  },
  {
    title: "Innovation",
    description: "Leveraging technology for smarter fuel management solutions.",
    icon: "lightbulb",
  },
  {
    title: "Community Focus",
    description: "Investing in local communities and workforce development.",
    icon: "people",
  },
  {
    title: "Excellence",
    description: "Unwavering commitment to quality in every aspect of operations.",
    icon: "star",
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

export const FAQ_ITEMS = [
  {
    question: "What areas does PAK Petroleum serve?",
    answer:
      "We currently operate across 25+ cities in Pakistan, with primary focus on Islamabad-Rawalpindi, Lahore, Karachi, and Peshawar metropolitan areas. Our distribution network is continuously expanding.",
  },
  {
    question: "What types of petroleum products do you offer?",
    answer:
      "We offer a comprehensive range including Premium Motor Gasoline (HOBC), Regular Gasoline (92 RON), High-Speed Diesel (HSD), Light Diesel Oil (LDO), and Kerosene. All products meet OGRA quality standards.",
  },
  {
    question: "How do you ensure fuel quality?",
    answer:
      "Every batch undergoes rigorous quality testing at our state-of-the-art laboratory facilities. We maintain chain-of-custody documentation and implement real-time quality monitoring at all storage points.",
  },
  {
    question: "Can I partner with PAK Petroleum for fuel station operations?",
    answer:
      "We're always looking for strategic partners. Contact our business development team to discuss franchise opportunities, bulk supply agreements, or distribution partnerships.",
  },
  {
    question: "What are your delivery timelines?",
    answer:
      "Standard deliveries within the Islamabad-Rawalpindi region are completed within 24 hours. For other cities, we maintain a 48-72 hour delivery window. Emergency supplies can be arranged on priority basis.",
  },
] as const;
