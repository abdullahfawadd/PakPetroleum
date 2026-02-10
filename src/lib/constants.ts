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
  {
    name: "Operations",
    href: "/operations",
    items: [
      { name: "Trading & Supply", href: "/operations/trading", description: "Global procurement and hedging strategies." },
      { name: "Distribution Network", href: "/operations/distribution", description: "Nationwide fleet and logistics." },
      { name: "Storage Infrastructure", href: "/operations/storage", description: "Strategic terminals and safety reserves." },
      { name: "Retail & Commercial", href: "/operations/retail", description: "Fuel stations and B2B supply." },
    ],
  },
  {
    name: "Company",
    href: "/company",
    items: [
      { name: "Our Story", href: "/company/story", description: "Building Pakistan's energy backbone since 2026." },
      { name: "Leadership", href: "/company/leadership", description: "Governance and executive direction." },
      { name: "Careers", href: "/careers", description: "Join the future of energy." },
      { name: "Locations", href: "/company/locations", description: "Our national footprint." },
    ],
  },
  {
    name: "Sustainability",
    href: "/sustainability",
    items: [
      { name: "HSE Standards", href: "/sustainability/hse", description: "Health, Safety, and Environment protocols." },
      { name: "Community Impact", href: "/sustainability/community", description: "Investing in the communities we serve." },
      { name: "Compliance", href: "/sustainability/compliance", description: "OGRA and ISO certifications." },
    ],
  },
  {
    name: "Insights",
    href: "/insights",
    items: [
      { name: "Market Analysis", href: "/insights/market", description: "Trends in global energy markets." },
      { name: "Company News", href: "/insights/news", description: "Latest updates from PAK Petroleum." },
      { name: "Reports", href: "/insights/reports", description: "Quarterly and annual performance." },
    ],
  },
] as const;

export const STATS = [
  { value: 150, suffix: "+", label: "Fuel Stations" },
  { value: 12, suffix: "M+", label: "Litres Distributed" },
  { value: 25, suffix: "+", label: "Cities Covered" },
  { value: 99.9, suffix: "%", label: "Uptime Reliability" },
] as const;

export const CORE_OPERATIONS = [
  {
    title: "Trading & Supply",
    description: "Securing Pakistan's energy future through strategic global procurement and advanced hedging mechanisms.",
    icon: "trading",
  },
  {
    title: "Storage Infrastructure",
    description: "State-of-the-art terminals ensuring national reserve security with real-time automated monitoring.",
    icon: "storage",
  },
  {
    title: "Distribution Logistics",
    description: "A precision-managed fleet delivering critical fuel supplies to every corner of the nation, 24/7.",
    icon: "distribution",
  },
] as const;

export const SAFETY_METRICS = [
  { value: "5M+", label: "Safe Man-Hours" },
  { value: "0", label: "Lost Time Injuries (LTI)" },
  { value: "100%", label: "OGRA Compliance" },
  { value: "24/7", label: "Real-time Monitoring" },
] as const;

export const FOOTPRINT_LOCATIONS = [
  { city: "Islamabad", type: "Headquarters & Hub" },
  { city: "Karachi", type: "Port Terminal" },
  { city: "Lahore", type: "Distribution Center" },
  { city: "Peshawar", type: "Regional Office" },
  { city: "Multan", type: "Storage Depot" },
  { city: "Quetta", type: "Strategic Reserve" },
] as const;

export const LEADERSHIP_TEAM = [
  {
    name: "Sarah Ahmed",
    role: "Chief Executive Officer",
    image: "/assets/leadership/ceo.jpg",
    bio: "20+ years in global energy markets. Former VP at PetroGlobal.",
  },
  {
    name: "Kamran Khan",
    role: "Director of Operations",
    image: "/assets/leadership/coo.jpg",
    bio: "Expert in supply chain logistics and infrastructure development.",
  },
  {
    name: "Bilal Rossi",
    role: "Chief Financial Officer",
    image: "/assets/leadership/cfo.jpg",
    bio: "Strategic finance leader with a focus on sustainable growth.",
  },
] as const;

export const CERTIFICATIONS = [
  "ISO 9001:2015",
  "ISO 14001:2015",
  "OGRA Licensed",
  "HSE Certified",
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
