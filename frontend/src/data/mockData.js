

export const mockProjects = [
  {
    id: 1,
    title: "HikingTrip iOS App",
    description: "Aplicativo IOS, desenvolvido como projeto final do curso Swift Foundation 2025.2. Uma ideia nascida a partir de uma necessidade pessoal como um apaixonado por trilhas e viagens.",
    technologies: ["Swift", "SwiftUI", "Core Location", "MapKit"],
    image: "https://unsplash.com/pt-br/fotografias/xHkn3igWPXA",
    githubUrl: "https://github.com/ney332/HikingTrip2.git",
    liveUrl: null,
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Web Platform",
    description: "Full-stack e-commerce solution with React frontend and Node.js backend, integrated with PostgreSQL database and Stripe payments.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    githubUrl: "",
    featured: true
  },
  {
    id: 3,
    title: "Restaurant Management System",
    description: "PHP-based restaurant management system with inventory tracking, order processing, and staff scheduling capabilities.",
    technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/lorranney/restaurant-system",
    liveUrl: null,
    featured: false
  },
  {
    id: 4,
    title: "Cross-Platform Analytics Dashboard",
    description: "React Native application that works seamlessly across iOS and Android, providing real-time analytics and data visualization.",
    technologies: ["React Native", "JavaScript", "Chart.js", "Firebase"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/lorranney/analytics-dashboard",
    liveUrl: null,
    featured: true
  }
];

export const mockExperience = [
  {
    id: 1,
    company: "Exército brasileiro",
    position: "Aux TI",
    duration: "2022 - Present",
    location: "Rio de ja",
    description: "Resolução de problemas relacionados a segurança organização e requisição de documentos.",
    technologies: ["Pacote Ofice", "OWASP"]
  },
  {
    id: 2,
    company: "Desenvolvedor Web",
    position: "Autônomo",
    duration: "2023 - 2024",
    location: "Remoto",
    description: "Atuação em diversos projetos freelancers em web projetos.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"]
  },
  {
    id: 3,
    company: "Marketing Digital",
    position: "Autônomo",
    duration: "2019 - 2022",
    location: "Remoto",
    description: "Criação de criativos, organização de catálogo virtual, suporte e contato P2P ao cliente.",
    technologies: ["Goosle ADS", "Facebook ADS", "Figma", "WordPress"]
  }
];

export const mockCourses = [
  {
    id: 1,
    title: "Swift Foundation Course",
    institution: "Apple Developer Academy - PUC-RJ",
    year: "2025",
    type: "Certificate",
    description: "Basic iOS development course covering SwiftUI, Core Data, and App Store optimization."
  },
  {
    id: 2,
    title: "Full-Stack JavaScript Development",
    institution: "Tech Institute",
    year: "2022",
    type: "Certificate",
    description: "Comprehensive course on modern JavaScript, React, Node.js, and database design."
  },
  {
    id: 3,
    title: "Information System",
    institution: "Universidade Veiga de Almeida",
    year: "2028.2",
    type: "Degree",
    description: "Bachelor's degree."
  },
  {
    id: 4,
    title: "PostgreSQL Database Administration",
    institution: "Database Institute",
    year: "2021",
    type: "Certificate",
    description: "Advanced database management, performance tuning, and scalability strategies."
  },
  {
    id: 5,
    title: "UX/UI Design with Figma",
    institution: "Udemy",
    year: "2022",
    type: "Certificate",
    description: "User experience design principles and advanced Figma prototyping techniques."
  }
];

export const mockSkills = [
  { name: "Swift", icon: "Code", proficiency: 60, category: "Mobile" },
  { name: "JavaScript", icon: "Code2", proficiency: 45, category: "Web" },
  { name: "PHP", icon: "Code", proficiency: 40, category: "Backend" },
  { name: "SQL", icon: "Database", proficiency: 40, category: "Database" },
  { name: "Figma", icon: "Figma", proficiency: 75, category: "Design" },
  { name: "Microsoft Office", icon: "FileText", proficiency: 90, category: "Productivity" },
  { name: "React", icon: "Code2", proficiency: 92, category: "Web" },
  { name: "Node.js", icon: "Server", proficiency: 87, category: "Backend" }
];