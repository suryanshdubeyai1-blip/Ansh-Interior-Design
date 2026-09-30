export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  imageUrl: string;
  fallbackGradient: string;
}

export interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  location: string;
  duration: string;
  beforeLabel: string;
  afterLabel: string;
  beforeDesc: string;
  afterDesc: string;
  beforeImage: string;
  afterImage: string;
  materials: string[];
}

export interface DesignStyle {
  id: string;
  name: string;
  hindiName: string;
  description: string;
  highlight: string;
  idealFor: string;
  palette: string[];
  keyMaterials: string[];
  sampleImage: string;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  projectType: string;
  reviewText: string;
  date: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const BUSINESS_DETAILS = {
  name: "Anas Interior Designer",
  hindiName: "अनस इंटीरियर डिजाइनर",
  founder: "Mohd. Anas Saifi",
  experienceYears: "10+",
  rating: 4.9,
  reviewsCount: 32,
  address: "Mahaveer College, Sardhana Rd, Kankar Kheda, Meerut, UP 250001",
  landmark: "Near Mahaveer Educational Park / Sardhana Road Bypass",
  phone: "+91 70885 71598",
  cleanPhone: "+917088571598",
  whatsappUrl:
    "https://wa.me/917088571598?text=Hello%20Anas%20Interior%20Designer,%20I%20want%20to%20know%20more%20about%20your%20services",
  quoteHindi:
    "क्या आप अपने घर या ऑफिस के लिए परफेक्ट फर्नीचर खोज रहे हैं? हमारे पास बेहतरीन और मॉडर्न डिज़ाइन्स की विस्तृत रेंज मौजूद है। संपर्क करने के लिए नीचे दिए गए Call Now बटन पर क्लिक करें!",
  quoteEnglish:
    "Looking for the perfect bespoke furniture and interior design for your home or office? Explore our extensive range of modern and classic masterpieces. Click the Call Now button below to connect with us directly!",
  workingHours: "Mon – Sat: 9:30 AM – 8:30 PM | Sun: 10:00 AM – 6:00 PM",
  serviceAreas: ["Kankar Kheda", "Sardhana Road", "Modipuram", "Shastri Nagar", "Delhi Road", "Pallavpuram", "Meerut Cantt", "NCR"],
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: "slide-1",
    title: "Bespoke Modern Living & Architectural Craft",
    subtitle: "Turnkey luxury interiors designed with Italian marble, warm brass accents, and handcrafted acoustic wood paneling.",
    category: "Living Spaces",
    tagline: "Modern & Contemporary",
    imageUrl: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1920&q=80",
    fallbackGradient: "from-stone-900 via-stone-850 to-neutral-900",
  },
  {
    id: "slide-2",
    title: "Precision Modular Kitchens & Fluted Cabinetry",
    subtitle: "Smart ergonomic storage, quartz island counters, and soft-close German hardware tailored to your cooking style.",
    category: "Modular Kitchens",
    tagline: "German Hardware & Quartz",
    imageUrl: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1920&q=80",
    fallbackGradient: "from-amber-950 via-stone-900 to-neutral-950",
  },
  {
    id: "slide-3",
    title: "Timeless Master Suites & Walk-In Wardrobes",
    subtitle: "Custom fluted headboards, warm ambient cove illumination, and tinted glass wardrobes crafted for peaceful indulgence.",
    category: "Bedrooms & Suites",
    tagline: "Classic Elegance",
    imageUrl: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1920&q=80",
    fallbackGradient: "from-neutral-900 via-stone-900 to-stone-950",
  },
];

export const BEFORE_AFTER_PROJECTS: BeforeAfterProject[] = [
  {
    id: "ba-living-room",
    title: "Kankar Kheda Villa – Living Room & TV Media Wall Overhaul",
    category: "Living Room Remodel",
    location: "Kankar Kheda, Meerut",
    duration: "24 Working Days",
    beforeLabel: "Raw Concrete Shell",
    afterLabel: "Luxury Gold & Wood Sanctuary",
    beforeDesc: "Unfinished cement walls, dangling conduits, and lack of functional lighting in a newly constructed floor.",
    afterDesc: "High-density fluted charcoal panels, Italian Statuario marble TV slab, concealed warm LED strip, and custom curved velvet seating.",
    beforeImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    materials: ["Action TESA HDHMR", "Statuario Quartz", "Warm 3000K Magnetic Track Lights", "PU Matte Finish"],
  },
  {
    id: "ba-modular-kitchen",
    title: "Sardhana Road Residence – Modular Island Kitchen Transformation",
    category: "Modular Kitchen",
    location: "Sardhana Rd, Meerut",
    duration: "18 Working Days",
    beforeLabel: "Outdated Masonry Slab",
    afterLabel: "Sleek Handleless Acrylic Kitchen",
    beforeDesc: "Cramped stone slab kitchen with damp corners, non-modular wooden shelves, and poor ventilation.",
    afterDesc: "L-shaped acrylic high-gloss cabinetry, tandem box soft-close drawers, breakfast bar with pendant brass lights, and built-in chimney cavity.",
    beforeImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
    materials: ["Boiling Water Proof (BWP) Marine Ply", "Anti-Scratch Acrylic 1.5mm", "Hettich Soft-Close Hardware", "Black Galaxy Granite"],
  },
  {
    id: "ba-master-bedroom",
    title: "Modipuram Luxury Apartment – Master Suite & Wardrobe",
    category: "Master Bedroom",
    location: "Modipuram, Meerut",
    duration: "21 Working Days",
    beforeLabel: "Empty Box Room",
    afterLabel: "Hotel-Grade Master Suite",
    beforeDesc: "Plain white rectangular room with no acoustic insulation, standard door wardrobe, and harsh direct tube lighting.",
    afterDesc: "Full-height fluted velvet bed back, tinted bronze mirror floor-to-ceiling sliding wardrobe with profile lighting, and veneer study station.",
    beforeImage: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&w=1200&q=80",
    afterImage: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80",
    materials: ["Teak Wood Beading", "Champagne Bronze Aluminum Profiles", "Belgian Velvet Upholstery", "Philips Cove Lighting"],
  },
];

export const DESIGN_STYLES: DesignStyle[] = [
  {
    id: "classic",
    name: "Classic",
    hindiName: "क्लासिक",
    description: "Time-honored architectural balance, carved wood moldings, regal symmetry, and plush textiles for homes that radiate prestige.",
    highlight: "Teak Wood Detailing & Cornices",
    idealFor: "Spacious Villas, Kothis & Traditional Family Homes",
    palette: ["#C5A059", "#2D241E", "#F5F2EB", "#4A3B32"],
    keyMaterials: ["Solid Teak Wood", "Brass Hardware", "Velvet Fabric", "Polished Marble"],
    sampleImage: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "modern",
    name: "Modern",
    hindiName: "मॉडर्न",
    description: "Clean straight lines, seamless handleless cabinetry, magnetic profile lighting, and neutral palettes energized with warm metallic accents.",
    highlight: "Minimalist Geometry & Floating Elements",
    idealFor: "Contemporary Apartments & Modern Kankar Kheda Residences",
    palette: ["#1A1A1A", "#FAFAFA", "#C5A059", "#78716C"],
    keyMaterials: ["HDHMR Boards", "PU Paint", "Fluted Wall Charcoal Louvers", "Quartz Stone"],
    sampleImage: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rustic",
    name: "Rustic",
    hindiName: "रस्टिक",
    description: "Embraces natural imperfections, rough-hewn distressed wood, warm terracotta tones, and tactile warmth that feels cozy and organic.",
    highlight: "Exposed Wood Grains & Earthy Textures",
    idealFor: "Farmhouses, Weekend Retreats & Warm Dining Spaces",
    palette: ["#8C5835", "#D4A373", "#FEFAE0", "#3E2723"],
    keyMaterials: ["Reclaimed Sheesham", "Raw Brick Inlays", "Linen Drapery", "Wrought Iron"],
    sampleImage: "https://images.unsplash.com/photo-1540518614846-7ede433c4ef7?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "industrial",
    name: "Industrial",
    hindiName: "इंडस्ट्रियल",
    description: "Urban loft charm combining matte black metal grids, exposed conduits, concrete screed textures, and distressed wood furniture.",
    highlight: "Black Metal Grids & Raw Concrete Finish",
    idealFor: "Creative Offices, Cafes, Boutiques & Bachelor Pads",
    palette: ["#2B2D42", "#8D99AE", "#EDF2F4", "#D90429"],
    keyMaterials: ["Powder-Coated Steel", "Cementitious Plaster", "Edison Bulbs", "Raw Pine"],
    sampleImage: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "traditional",
    name: "Traditional",
    hindiName: "पारंपरिक",
    description: "Rich Indian heritage aesthetics with intricate CNC jali partitions, brass bells, warm teak polish, and devotional prayer nooks.",
    highlight: "Artisan Jali Work & Heritage Brass Inlays",
    idealFor: "Ancestral Homes, Puja Rooms & Cultural Living Spaces",
    palette: ["#800020", "#C5A059", "#FFF8E7", "#4A0E17"],
    keyMaterials: ["Carved Rosewood", "Pure Brass Inlays", "Sandstone Panels", "Silk Brocade"],
    sampleImage: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "elegant",
    name: "Elegant",
    hindiName: "एलिगेंट",
    description: "Sophisticated luxury with subtle champagne gold trims, curved bouclé sofas, soft layered lighting, and pristine European finishes.",
    highlight: "Curved Silhouettes & Champagne Metal Trims",
    idealFor: "Luxury Master Suites, Formal Drawing Rooms & Salons",
    palette: ["#C5A059", "#F7F5F0", "#333333", "#C5B39A"],
    keyMaterials: ["Curved Plywood", "Bouclé Fabric", "Champagne Stainless Steel", "Alabaster Lighting"],
    sampleImage: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "review-1",
    author: "Nazimalvi",
    role: "Homeowner",
    location: "Kankar Kheda, Meerut",
    rating: 5.0,
    projectType: "Full 3BHK Turnkey Interior",
    reviewText:
      "Exceptional woodwork and modern finish! Anas and his team transformed our Kankar Kheda residence into a modern palace. The TV unit and false ceiling work are flawless. Delivered exactly within the promised 35 days!",
    date: "2 months ago",
  },
  {
    id: "review-2",
    author: "Zishan Saifi",
    role: "Commercial Director",
    location: "Sardhana Road, Meerut",
    rating: 5.0,
    projectType: "Corporate Office & Workstations",
    reviewText:
      "Best interior designer in Meerut. They delivered our complete office furniture, conference table, and modular workstations with high precision. 100% recommended for anyone wanting honest pricing and premium craftsmanship.",
    date: "1 month ago",
  },
  {
    id: "review-3",
    author: "Atik Saifi",
    role: "Property Owner",
    location: "Shastri Nagar, Meerut",
    rating: 5.0,
    projectType: "Modular Kitchen & Master Wardrobes",
    reviewText:
      "The attention to detail in their custom wardrobe and modular kitchen craft is unmatched. Genuine Marine ply, Hettich channels, and very transparent billing. Mohd Anas is extremely professional and polite.",
    date: "3 weeks ago",
  },
  {
    id: "review-4",
    author: "Dr. R. K. Sharma",
    role: "Clinic & Residence Owner",
    location: "Modipuram, Meerut",
    rating: 5.0,
    projectType: "Consulting Chamber & Living Room",
    reviewText:
      "We consulted multiple decorators in Delhi and Meerut before choosing Anas Interior. Their 3D visualization was true to reality and the acoustic fluted paneling in my clinic lobby is praised by every patient.",
    date: "4 months ago",
  },
  {
    id: "review-5",
    author: "Priya Verma",
    role: "Architectural Enthusiast",
    location: "Delhi Road, Meerut",
    rating: 5.0,
    projectType: "Living Room False Ceiling & Lighting",
    reviewText:
      "I was skeptical about finding high-end gold accent finish in Meerut, but Anas completely exceeded expectations. The warm cove lighting and bespoke bar counter feel like a 5-star hotel suite.",
    date: "6 weeks ago",
  },
];

export const FAQS: FAQItem[] = [
  {
    category: "Consultation & Process",
    question: "Do you provide free on-site measurements and consultations in Meerut?",
    answer:
      "Yes! We offer 100% free site visits across Meerut (Kankar Kheda, Sardhana Rd, Modipuram, Pallavpuram, Shastri Nagar, Delhi Road) and surrounding NCR areas. Our team brings material samples, laser measurement tools, and listens to your design vision on the spot.",
  },
  {
    category: "Design & Customization",
    question: "Can you customize furniture to fit irregular wall angles or compact rooms?",
    answer:
      "Absolutely. Unlike factory-made modular boxes that leave awkward gaps, all our furniture is precision custom-crafted to your millimeter dimensions. Whether you have slanted walls, structural pillars, or compact nooks, we design bespoke wardrobes, TV consoles, and modular kitchens that fit like a glove.",
  },
  {
    category: "Pricing & Transparency",
    question: "How is pricing calculated, and are there any hidden charges?",
    answer:
      "We provide itemized, transparent quotations based on actual square footage and material grade chosen (e.g. Action TESA HDHMR, Century Ply, Merino Laminates, PU Matte finish). You approve the exact cost breakdown before execution begins—no surprise mid-project charges.",
  },
  {
    category: "Visualization",
    question: "Will I get to see 3D designs before carpenters begin work?",
    answer:
      "Yes. Every client receives high-definition 3D photorealistic renderings and 2D working drawings of their space. You can review finishes, laminate textures, lighting placement, and colors, making revisions until you are completely satisfied.",
  },
  {
    category: "Timelines & Execution",
    question: "How long does a typical interior and furniture project take?",
    answer:
      "A modular kitchen or single room transformation typically takes 14 to 21 working days. A complete 2BHK/3BHK turnkey interior takes 35 to 45 working days. We adhere strictly to our written milestone schedule.",
  },
  {
    category: "Warranties & Materials",
    question: "What warranties do you provide on hardware and woodwork?",
    answer:
      "We exclusively use branded Boiling Water Proof (BWP) and Termite-Resistant boards with up to 10-15 years manufacturer warranty, and certified hardware from Hettich, Hafele, or Ebco with 5-10 years hinge/channel replacement guarantee.",
  },
];

export const SERVICES_LIST = [
  {
    title: "Modular Kitchens",
    desc: "Ergonomic L-shape, U-shape, and parallel layouts with anti-scratch acrylic, tandem boxes, and quartz counters.",
    icon: "ChefHat",
  },
  {
    title: "Luxury False Ceilings",
    desc: "Gypsum designer ceilings with concealed 3000K warm cove strips, magnetic track lights, and wooden rafter accents.",
    icon: "Sun",
  },
  {
    title: "Custom Wardrobes & Walk-Ins",
    desc: "Floor-to-ceiling sliding, openable, and tinted profile glass wardrobes with motion sensor warm illumination.",
    icon: "DoorClosed",
  },
  {
    title: "TV Units & Acoustic Wall Paneling",
    desc: "Marble and charcoal fluted louvers, floating stone consoles, and hidden cable management systems.",
    icon: "Tv",
  },
  {
    title: "Turnkey Residential & Office",
    desc: "End-to-end execution including civil work, electricals, premium paint, bespoke sofas, and false ceilings.",
    icon: "Building",
  },
  {
    title: "Commercial & Retail Studios",
    desc: "Showroom display racks, reception desks, conference setups, and salon/boutique luxury interiors.",
    icon: "Briefcase",
  },
];
