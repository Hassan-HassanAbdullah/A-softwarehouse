/**
 * A++ Software House - Website Configuration & Content Object
 * Centralized data store for all website copy, POS/ERP portfolio projects,
 * company leadership, and office location in Mandi Bahauddin.
 */

const websiteData = {
  company: {
    name: "A++ Software House",
    shortName: "A++",
    ceo: "Waqar Azeem Ranjha",
    ceoTitle: "CEO & Founder",
    tagline: "Software built for the long game",
    subTagline: "High-Performance POS & ERP Systems in Mandi Bahauddin",
    location: "Phalia Road, Punjab Center, Mandi Bahauddin",
    address: "Phalia Road, Punjab Center, Near Punjab Computer College, Mandi Bahauddin, Punjab, Pakistan",
    email: "info@aplussoftware.pk",
    phone: "+92 300 1234567",
    whatsapp: "+92 300 1234567",
    workingHours: "Mon - Sat: 9:00 AM - 7:00 PM",
    socials: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/923001234567"
    },
    assets: {
      logoNoBg: "assets/A++ logo no bg.png",
      logoWithBg: "assets/A++ logo with bg.jpeg",
      logoSvg: "assets/A++ logo.svg",
      logoIco: "assets/A++ logo.ico",
      heroBg: "assets/BG.png"
    }
  },

  navigation: [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Process", href: "#process" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQs", href: "#faqs" },
    { label: "Contact", href: "#contact" }
  ],

  hero: {
    title: "Software built for the long game",
    description: "Led by CEO Waqar Azeem Ranjha, A++ Software House delivers high-performance Point of Sale (POS) software, customized ERP suites, web systems, and mobile applications engineered for seamless daily operations.",
    locationNote: "Phalia Road, Punjab Center, Near Punjab Computer College, Mandi Bahauddin",
    ctaPrimary: {
      text: "Explore Services",
      href: "#services"
    },
    ctaSecondary: {
      text: "View POS & ERP Systems",
      href: "#portfolio"
    }
  },

  marquee: [
    "Point of Sale (POS) Systems",
    "Enterprise ERP Solutions",
    "Supermarket & Retail Billing",
    "Pharmacy & Medical ERP",
    "College & Library Management",
    "Custom Web Development",
    "Mobile Apps (iOS & Android)",
    "Social Media Marketing",
    "Mandi Bahauddin Innovation Hub"
  ],

  about: {
    sectionNumber: "01",
    tag: "OUR CORE PHILOSOPHY",
    heading: "We build software that lasts longer than the meeting",
    paragraph1: "Founded and led by Waqar Azeem Ranjha, A++ Software House brings rock-solid engineering discipline to retail, wholesale, and institutional management. We specialize in robust Point of Sale (POS) software and Enterprise Resource Planning (ERP) systems that handle high-volume billing, real-time inventory, and multi-branch data synchronization without crashing.",
    paragraph2: "Headquartered at Punjab Center on Phalia Road near Punjab Computer College in Mandi Bahauddin, we provide hands-on local hardware setup, staff cashier training, and 24/7 dedicated support to keep your business running smoothly.",
    stats: [
      {
        value: "99.9%",
        label: "System Uptime",
        description: "Zero-lag POS billing with resilient offline-to-cloud sync architecture."
      },
      {
        value: "150+",
        label: "POS & ERP Deployments",
        description: "Retail supermarkets, pharmacies, colleges & distribution centers."
      },
      {
        value: "4.9 / 5",
        label: "Client Satisfaction",
        description: "Trusted by business owners and enterprise partners across the region."
      },
      {
        value: "24/7",
        label: "On-Site & Cloud Support",
        description: "Rapid on-ground technical assistance in Mandi Bahauddin and cloud remote support."
      }
    ]
  },

  services: {
    sectionNumber: "02",
    tag: "CORE CAPABILITIES",
    heading: "Precision engineering for every stage",
    subheading: "Complete enterprise POS software, customized ERP architectures, modern web platforms, and results-driven digital marketing.",
    items: [
      {
        id: "pos",
        tag: "01 / RETAIL & WHOLESALE",
        title: "Point of Sale (POS) Systems",
        shortDesc: "High-speed barcode billing POS software designed for retail marts, supermarkets, apparel stores, and wholesale businesses.",
        features: [
          "Instant barcode scanning & thermal receipt printing",
          "Real-time inventory deduction & low-stock alerts",
          "Multi-counter cash drawer & shift reconciliation",
          "Customer credit/ledger & daily profit/loss accounting",
          "Offline-first architecture (works without internet)"
        ],
        badge: "Flagship POS",
        icon: "receipt"
      },
      {
        id: "erp",
        tag: "02 / ENTERPRISE ERP",
        title: "Customized ERP Solutions",
        shortDesc: "Tailor-made ERP systems for colleges, libraries, pharmacies, warehouses, and multi-branch commercial networks.",
        features: [
          "Centralized database uniting sales, inventory & accounts",
          "Institutional records, student/staff profiles & fee tracking",
          "Batch-wise medicine tracking & automated expiry warnings",
          "Automated daily backups with bank-grade encryption",
          "Granular user roles & complete audit activity logs"
        ],
        badge: "Enterprise Grade",
        icon: "server"
      },
      {
        id: "web",
        tag: "03 / FULL-STACK WEB",
        title: "Custom Web Development",
        shortDesc: "Modern, ultra-fast web applications, client portals, SaaS systems, and responsive e-commerce platforms.",
        features: [
          "Modern React, Next.js & Node.js architecture",
          "Mobile-responsive, modern user experience",
          "Secure user authentication & role-based access",
          "High-speed database design & RESTful APIs",
          "Lightning-fast load speed & SEO optimization"
        ],
        badge: "Modern Stacks",
        icon: "globe"
      },
      {
        id: "mobile",
        tag: "04 / CROSS-PLATFORM",
        title: "Mobile App Development",
        shortDesc: "Native and cross-platform mobile apps for iOS and Android built with Flutter and React Native.",
        features: [
          "Fluid animations & intuitive UI/UX navigation",
          "Real-time data synchronization & push alerts",
          "Secure in-app payments & biometric authentication",
          "Offline data caching & background sync",
          "Google Play Store & Apple App Store deployment"
        ],
        badge: "iOS & Android",
        icon: "smartphone"
      },
      {
        id: "marketing",
        tag: "05 / REVENUE GROWTH",
        title: "Social Media Marketing & Ads",
        shortDesc: "Data-driven Meta (Facebook/Instagram) and TikTok campaigns that generate qualified customer leads and maximum ROAS.",
        features: [
          "Targeted paid ad funnels & precision pixel tracking",
          "High-converting visual design & promotional creatives",
          "Regional brand scaling in Mandi Bahauddin & nationwide",
          "Transparent weekly ROI & conversion analytics"
        ],
        badge: "High ROAS",
        icon: "trending-up",
        isWide: true
      }
    ]
  },

  portfolio: {
    sectionNumber: "03",
    tag: "FEATURED WORK",
    heading: "Selected POS & ERP Deployments",
    subheading: "Click on any system image to view high-resolution full screen with blurred backdrop. All systems are live in production.",
    projects: [
      {
        id: "project-1",
        number: "01",
        title: "OmniPOS Retail & Supermarket System",
        category: "Retail POS Software",
        client: "Supermarkets & Retail Stores",
        image: "assets/portfolioImages/soft1.jpg",
        description: "An enterprise Point of Sale software engineered for high-traffic retail counters. Includes instant barcode scanning, thermal receipt printing, cash drawer trigger, daily sales reconciliation, and real-time stock deduction.",
        techStack: ["Barcode Engine", "Thermal Receipt", "Cash Drawer Trigger", "Offline-First Mode", "Daily Ledger"],
        metrics: "0.08s Checkout Speed"
      },
      {
        id: "project-2",
        number: "02",
        title: "EduTrack College & Library Management ERP",
        category: "Institutional ERP",
        client: "Colleges & Educational Institutes",
        image: "assets/portfolioImages/soft2.jpg",
        description: "Complete institutional management ERP with student and teacher profiles, book issue/return tracking, library catalog search, fee voucher generation, and administrative records dashboard.",
        techStack: ["Book Cataloging", "Student Profiles", "Issue & Return Tracker", "Fee Management", "Role-Based Access"],
        metrics: "100% Record Automation"
      },
      {
        id: "project-3",
        number: "03",
        title: "PharmaCare Medical & Pharmacy POS ERP",
        category: "Pharmacy POS & ERP",
        client: "Pharmacies & Medical Clinics",
        image: "assets/portfolioImages/soft3.jfif",
        description: "Specialized pharmaceutical Point of Sale software featuring batch-wise medicine expiry tracking, automated re-order warnings, supplier purchase orders, and customer credit ledger accounting.",
        techStack: ["Batch Expiry Tracker", "Medicine Formula Search", "Supplier Ledger", "Barcode Scanning", "Thermal Billing"],
        metrics: "Zero Expiry Losses"
      },
      {
        id: "project-4",
        number: "04",
        title: "Apex Wholesale & Distribution ERP",
        category: "Wholesale & Supply ERP",
        client: "Wholesale Distributors & Warehouses",
        image: "assets/portfolioImages/soft4.png",
        description: "Comprehensive wholesale and distribution ERP handling bulk goods trading, party-wise credit ledgers, multi-warehouse stock transfers, and automated sales tax invoice generation.",
        techStack: ["Multi-Warehouse", "Party Credit Ledger", "Sales Tax Invoicing", "Delivery Challans", "Cloud Reporting"],
        metrics: "Multi-Branch Sync"
      },
      {
        id: "project-5",
        number: "05",
        title: "MultiStore Cloud POS & Central Head-Office ERP",
        category: "Enterprise POS Suite",
        client: "Multi-Branch Retail Chains",
        image: "assets/portfolioImages/soft5.png",
        description: "Multi-branch retail management ERP uniting multiple store branches under one central cloud reporting hub. Features live sales monitoring, inter-branch stock requests, and cashier shift audits.",
        techStack: ["Central Cloud Hub", "Multi-Branch Auditing", "Shift Reconciliation", "Offline-Resilient", "Real-Time BI"],
        metrics: "99.99% Uptime"
      }
    ]
  },

  process: {
    sectionNumber: "04",
    tag: "METHODOLOGY",
    heading: "How we ship certainty",
    subheading: "A battle-tested 4-step framework turning complex business requirements into high-performance software without delays.",
    steps: [
      {
        step: "01",
        title: "Requirement Analysis & Scoping",
        desc: "We analyze your cash counter bottlenecks, inventory volume, and operational workflows to establish an exact system spec."
      },
      {
        step: "02",
        title: "System Architecture & UI/UX",
        desc: "We design clean cashier screens, intuitive keyboard shortcuts, and robust database schemas for maximum transaction speed."
      },
      {
        step: "03",
        title: "Agile Engineering & Sprints",
        desc: "Our engineers build with clean, modular code and iterative milestones, stress-testing barcode engines under high loads."
      },
      {
        step: "04",
        title: "Hardware Setup & Staff Training",
        desc: "We provide on-site hardware setup in Mandi Bahauddin (printers, barcode scanners) and train your sales cashiers and management."
      }
    ]
  },

  toolsWeTrust: {
    tag: "TECH STACK",
    heading: "Tools we trust",
    subheading: "We build on modern, rock-solid technologies engineered for uptime, speed, and long-term scalability.",
    tools: [
      { name: "POS Architecture", category: "Core POS" },
      { name: "PostgreSQL", category: "Relational DB" },
      { name: "MySQL", category: "Relational DB" },
      { name: "React", category: "Frontend" },
      { name: "Next.js", category: "Full-Stack Web" },
      { name: "Flutter", category: "Mobile App" },
      { name: "Node.js", category: "Backend Engine" },
      { name: "Python", category: "Data & Automation" },
      { name: "Docker", category: "DevOps" },
      { name: "Meta Ads", category: "Marketing" },
      { name: "Thermal Billing API", category: "Hardware" },
      { name: "Linux Server", category: "Infrastructure" }
    ]
  },

  testimonials: {
    sectionNumber: "05",
    tag: "CLIENT TESTIMONIALS",
    heading: "Client testimonials",
    subheading: "Real feedback from business owners and founders running their daily operations on our POS & ERP software.",
    items: [
      {
        rating: 5,
        quote: "A++ Software House completely transformed our retail counters in Mandi Bahauddin. Their POS software is lightning fast, handles thousands of barcode scans daily without freezing, and the profit reports are 100% accurate.",
        author: "Chaudhry Kamran",
        role: "Managing Director",
        company: "Al-Madina Superstore & Mart"
      },
      {
        rating: 5,
        quote: "Waqar Azeem Ranjha and his team built our institute's library and records ERP. The system is extremely user-friendly for our staff, and their on-site support in Mandi Bahauddin has been exceptional.",
        author: "Prof. Tariq Mahmood",
        role: "Principal Administrator",
        company: "Punjab Educational Group"
      },
      {
        rating: 5,
        quote: "Their pharmacy POS software eliminated our medicine expiry losses completely with automated batch alerts. Highly recommend A++ Software House for retail and wholesale businesses.",
        author: "Dr. Farooq Gondal",
        role: "Head Pharmacist",
        company: "Gondal Pharmacy & Surgical"
      }
    ]
  },

  faqs: {
    sectionNumber: "06",
    tag: "FAQS",
    heading: "Frequently Asked Questions",
    subheading: "Everything you need to know about our POS systems, ERP software, on-site setup, and support.",
    items: [
      {
        question: "Can your POS software be customized for our specific retail or wholesale business?",
        answer: "Yes! Whether you operate a supermarket, pharmacy, apparel boutique, wholesale distribution agency, or institution, we customize barcode scanning, invoice formats, ledger accounting, and inventory rules specifically to your workflow."
      },
      {
        question: "Do you provide on-site hardware setup and cashier training in Mandi Bahauddin?",
        answer: "Yes! Our office is located at Punjab Center on Phalia Road near Punjab Computer College in Mandi Bahauddin. Our technical team handles on-site setup of thermal receipt printers, barcode guns, touch monitors, and cash drawers, followed by comprehensive cashier staff training."
      },
      {
        question: "Does the POS software continue to bill if internet goes down?",
        answer: "Yes! Our POS software is built with an offline-first architecture. You can continue scanning items, receiving payments, and printing customer receipts offline without interruption. When the internet reconnects, all transactions sync automatically to the cloud."
      },
      {
        question: "What hardware is required to run your POS and ERP software?",
        answer: "Our software is lightweight and runs on standard Windows PC / laptop (Core i3 or above with 4GB/8GB RAM). It works seamlessly with all standard USB/LAN thermal receipt printers (80mm / 58mm), laser/2D barcode scanners, and electronic cash drawers."
      },
      {
        question: "Do we get full ownership of our software database and records?",
        answer: "Yes. You have 100% complete ownership of your customer ledgers, sales records, and inventory database. We ensure daily automated backups with zero vendor lock-in."
      }
    ]
  },

  ctaBanner: {
    title: "Let's build something that lasts.",
    subtitle: "Ready to scale your business with an enterprise POS system, customized ERP, website, or mobile application? Visit our Mandi Bahauddin office or contact CEO Waqar Azeem Ranjha and team.",
    whatsappHref: "https://wa.me/923001234567?text=Hello%20A++%20Software%20House,%20I%20would%20like%20to%20discuss%20a%20POS%20/%20ERP%20system"
  },

  footer: {
    col1: {
      title: "Pages",
      links: [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Portfolio", href: "#portfolio" },
        { label: "Process", href: "#process" },
        { label: "Contact", href: "#contact" }
      ]
    },
    col2: {
      title: "Core Systems",
      links: [
        { label: "Retail POS Software", href: "#services" },
        { label: "Institutional & College ERP", href: "#services" },
        { label: "Pharmacy & Medical POS", href: "#services" },
        { label: "Wholesale & Supply Chain ERP", href: "#services" },
        { label: "Custom Web & Mobile Apps", href: "#services" }
      ]
    },
    watermark: "A++ SOFTWARE HOUSE",
    copyright: "© 2026 A++ Software House. Led by Waqar Azeem Ranjha (CEO). All rights reserved."
  }
};

// Make accessible globally
if (typeof window !== "undefined") {
  window.websiteData = websiteData;
}
