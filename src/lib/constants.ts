export const SITE_CONFIG = {
  name: "PAK Petroleum",
  tagline: "Powering Pakistan's Future",
  description:
    "Premium petroleum trading, distribution, and logistics across Pakistan. Trusted energy partner for a growing nation.",
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
      "Strategic partnerships with international suppliers ensuring consistent, high-quality petroleum products at competitive rates.",
    icon: "procurement",
    gradient: "from-primary-500 to-primary-700",
  },
  {
    title: "Storage & Inventory",
    description:
      "State-of-the-art storage facilities with IoT-powered inventory management systems ensuring zero downtime.",
    icon: "storage",
    gradient: "from-secondary-500 to-secondary-700",
  },
  {
    title: "Distribution Network",
    description:
      "Efficient logistics and GPS-tracked delivery operations connecting fuel stations across Pakistan.",
    icon: "distribution",
    gradient: "from-accent-500 to-accent-700",
  },
  {
    title: "Trading Operations",
    description:
      "Dynamic market analysis and trading strategies optimizing supply chain efficiency and margins.",
    icon: "trading",
    gradient: "from-primary-400 to-secondary-500",
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
      "PAK Petroleum has been our fuel partner for 3 years. Their reliability and consistent quality have been instrumental to our fleet operations.",
    rating: 5,
  },
  {
    name: "Fatima Zahra",
    role: "Operations Director, CityFuel Stations",
    content:
      "The distribution network is exceptional. On-time deliveries and professional service make them stand out in the industry.",
    rating: 5,
  },
  {
    name: "Usman Malik",
    role: "CEO, Karachi Transport Co.",
    content:
      "Switching to PAK Petroleum reduced our fuel costs by 12% while improving quality. Their team truly understands our business needs.",
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
