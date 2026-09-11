import abraHero from '../assets/images/abraventure-hero.png';
import abraProvincial from '../assets/images/abraventure-provincial.png';
import abraMunicipal from '../assets/images/abraventure-municipal.png';

export const projectsData = [
  {
    id: "abraventure",
    title: "ABRAVENTURE",
    subtitle: "Web-Based Integrated Tourism Information & Homestay Management System",
    category: "Full-Stack Application",
    featured: true,
    tagline: "A centralized digital ecosystem for the Province of Abra linking tourists, local homestays, and municipal tourism officers.",
    image: abraHero,
    gallery: [abraHero, abraProvincial, abraMunicipal],
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Neon DB", "Tailwind CSS", "Leaflet Maps", "Vercel"],
    githubUrl: "https://github.com/pengdev-works",
    liveUrl: "https://abraventure2-0.vercel.app/",
    shortDescription: "Integrated tourism discovery and homestay booking portal featuring interactive municipality maps and administrative management dashboards for the Province of Abra.",
    overview: "ABRAVENTURE is a province-wide digital tourism infrastructure engineered to digitize tourism information, streamline homestay reservations, and empower municipal tourism administrators with real-time analytics across 27 municipalities of Abra (CAR), Philippines.",
    problem: "The Province of Abra lacked a unified online tourism registry. Local homestay operators relied on manual booking logs, while prospective tourists struggled to find verified lodging, eco-tourism spots, municipal guidelines, and reliable transport directions.",
    solution: "Developed a responsive full-stack platform featuring interactive GIS-enabled Leaflet maps for tourist spots, an automated homestay availability & booking engine, accreditation verification, and multi-tier administrative dashboards for provincial and municipal tourism officers.",
    keyFeatures: [
      "Multi-Tier DOT Administration (Provincial & Municipal officer access levels).",
      "Interactive Leaflet maps highlighting 27 municipalities and 100+ tourist spots.",
      "Homestay directory with real-time room availability, pricing, and reservation inquiry engine.",
      "Accreditation submission & approval workflow for homestays and local tour guides.",
      "Automated visitor statistics reporting and analytics export.",
      "Verified user reviews and eco-tourism activity discovery module."
    ],
    role: "Lead Full-Stack Developer",
    roleDetails: "Designed the PostgreSQL database schema on Neon, authored RESTful API endpoints in Node.js/Express, implemented JWT multi-role authentication, and built the entire React + Leaflet frontend interface.",
    challenges: [
      "Handling complex relational queries between municipalities, homestays, amenities, and booking time windows in PostgreSQL.",
      "Ensuring map responsiveness and smooth tile rendering on slow mobile data connections in remote provincial areas.",
      "Implementing role-based access control (RBAC) across three distinct user tiers (Tourist, Municipal Officer, Provincial Admin)."
    ],
    outcome: "Successfully deployed at https://abraventure2-0.vercel.app/ and presented to Department of Tourism stakeholders."
  },
  {
    id: "classroom-schedule",
    title: "Classroom Schedule Management System",
    subtitle: "Automated Academic Scheduling & Conflict Detection Platform",
    category: "Management System",
    featured: false,
    tagline: "An intelligent scheduling system engineered to eliminate room overlaps, teacher double-booking, and section timetable conflicts.",
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Tailwind CSS", "Lucide Icons"],
    githubUrl: "https://github.com/pengdev-works/Classroom-Schedule",
    liveUrl: "https://classroom-schedule-ten.vercel.app/",
    shortDescription: "Academic resource planning tool with automated time slot conflict detection, instructor workload monitoring, and printable timetables.",
    overview: "A comprehensive institutional scheduling software designed for academic departments to manage classrooms, instructors, course subjects, and class sections without scheduling overlaps.",
    problem: "Manual schedule generation using spreadsheets frequently resulted in room assignment clashes, instructor over-allocation, and time slot conflicts during semester enrollment preparation.",
    solution: "Engineered a matrix scheduling engine in Node.js that validates new section assignments against existing room schedules and instructor availability in real time before persisting to PostgreSQL.",
    keyFeatures: [
      "Real-time schedule conflict engine (detects room, instructor, and section overlaps).",
      "Interactive weekly timetable visual grid with drag-and-drop course placement.",
      "Instructor load distribution analytics and maximum daily hours enforcement.",
      "Classroom capacity and facility filter matching.",
      "Exportable high-resolution PDF schedules for students and faculty.",
      "Departmental CRUD management for teachers, subjects, sections, and room assets."
    ],
    role: "Full-Stack Developer",
    roleDetails: "Architected the schedule validation algorithm, constructed the relational database model, and designed the timetable user interface in React.",
    challenges: [
      "Optimizing overlap detection performance when checking multi-day recurring time blocks.",
      "Creating an intuitive grid layout capable of displaying dense 12-hour schedule matrices."
    ],
    outcome: "Eliminated human double-booking errors and drastically reduced semester schedule drafting time."
  },
  {
    id: "barangayconnect",
    title: "BarangayConnect",
    subtitle: "Smart Barangay Management System",
    category: "Management System",
    featured: false,
    tagline: "A cloud-based platform streamlining resident records, certificate requests, complaints, and official announcements.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Node.js", "Express.js", "PostgreSQL", "Neon DB", "Tailwind CSS", "Vercel", "Render"],
    githubUrl: "https://github.com/pengdev-works/Barangay",
    liveUrl: "https://barangay-two.vercel.app/",
    shortDescription: "Full-stack barangay governance system enabling residents to request certificates online, file complaints, and receive official announcements — managed through an admin dashboard.",
    overview: "BarangayConnect digitizes core barangay operations: resident registry, document certification workflows, community complaints tracking, and official announcements — deployed on Neon (PostgreSQL), Render (Express API), and Vercel (React frontend).",
    problem: "Barangay residents faced long queues and manual paperwork for basic government documents like barangay clearances, indigency certificates, and business permits. Officers had no unified digital system to track requests and resident records.",
    solution: "Built a full-stack web platform where residents can submit document requests and track status online. Barangay officials get an admin dashboard with certificate queues, complaint resolution workflows, and announcement broadcasting.",
    keyFeatures: [
      "Online document request system for Barangay Clearance, Indigency, and Business Permits.",
      "Resident registry with profile management and household tracking.",
      "Complaint filing and resolution tracking module.",
      "Official announcements broadcast system for barangay news.",
      "Admin dashboard with monthly request analytics and status management.",
      "Role-based access for residents and barangay administrators."
    ],
    role: "Full-Stack Developer",
    roleDetails: "Designed the relational database schema in Neon PostgreSQL, built the Express.js REST API on Render, and created the React frontend deployed on Vercel.",
    challenges: [
      "Designing a multi-role system where residents and barangay officials have distinct dashboards and permissions.",
      "Structuring certificate request workflow with status transitions (Pending → Processing → Ready → Released)."
    ],
    outcome: "Deployed at https://barangay-two.vercel.app/ as a functional barangay digitization proof-of-concept."
  },
  {
    id: "karinderyako",
    title: "KarinderyaKo",
    subtitle: "Local Food Ordering Marketplace for Home-Based Karinderyas",
    category: "Full-Stack Application",
    featured: false,
    tagline: "A Foodpanda-style multi-vendor food platform for home-based karinderya stalls in Poblacion, Laang, Abra.",
    image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop",
    technologies: ["React", "Vite", "Node.js", "Express.js", "PostgreSQL", "Neon DB", "Vercel", "Render"],
    githubUrl: "https://github.com/pengdev-works/Karinderyako",
    liveUrl: "https://karinderyako.vercel.app/",
    shortDescription: "A localized multi-vendor food ordering marketplace connecting customers with home-based karinderya stalls — featuring vendor dashboards, rider management, and geofenced order tracking.",
    overview: "KarinderyaKo is a community-focused, Foodpanda-inspired multi-vendor food ordering platform designed for informal home-based food businesses (karinderyas) in a local barangay — digitizing ordering, vendor management, and food delivery coordination.",
    problem: "Home-based karinderyas operate informally with no digital presence. Customers had to walk to stalls or call owners personally, and vendors had no way to manage orders or expand reach beyond their immediate neighborhood.",
    solution: "Built a complete multi-vendor marketplace with portals for customers (browse & order), karinderya owners (manage menu, orders & earnings), riders (accept deliveries), and admins (platform oversight). Deployed with React + Vite on Vercel and Node/Express on Render.",
    keyFeatures: [
      "Multi-vendor marketplace where multiple karinderyas list menus and receive orders.",
      "Customer-facing stall browser with food listings, prices in PHP, and order cart.",
      "Vendor dashboard for menu management, order queue, and sales tracking.",
      "Rider portal for accepting and managing delivery assignments.",
      "Geofence middleware to restrict ordering to the local service area.",
      "Admin panel for platform-wide user and vendor oversight."
    ],
    role: "Full-Stack Developer",
    roleDetails: "Architected the full-stack monorepo, designed the Neon PostgreSQL schema, built the Express REST API with geofencing middleware, and developed the React + Vite multi-role frontend.",
    challenges: [
      "Coordinating state across 4 distinct user roles (Customer, Owner, Rider, Admin) with role-based route protection.",
      "Implementing geofence middleware to restrict ordering to the local delivery coverage area.",
      "Designing a real-time order status flow across vendor, rider, and customer views."
    ],
    outcome: "Live at https://karinderyako.vercel.app/ — a functional food marketplace prototype for local karinderya digitization."
  }
];
