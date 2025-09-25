export const mockProjects = [
  {
    id: 1,
    title: "TaskMaster iOS App",
    description: "A comprehensive task management application built with Swift and SwiftUI, featuring real-time synchronization and intuitive gesture-based interactions.",
    technologies: ["Swift", "SwiftUI", "Core Data", "CloudKit"],
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/lorranney/taskmaster",
    liveUrl: "https://apps.apple.com/app/taskmaster",
    featured: true
  },
  {
    id: 2,
    title: "E-Commerce Web Platform",
    description: "Full-stack e-commerce solution with React frontend and Node.js backend, integrated with PostgreSQL database and Stripe payments.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    githubUrl: "https://github.com/lorranney/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.lorranney.dev",
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
    company: "TechCorp Solutions",
    position: "Senior Mobile Developer",
    duration: "2022 - Present",
    location: "Remote",
    description: "Lead mobile application development using Swift and React Native. Architected scalable solutions serving 100K+ users and mentored junior developers.",
    technologies: ["Swift", "React Native", "JavaScript", "Firebase", "AWS"]
  },
  {
    id: 2,
    company: "StartupHub Inc",
    position: "Full-Stack Developer",
    duration: "2020 - 2022",
    location: "São Paulo, Brazil",
    description: "Developed end-to-end web applications using modern JavaScript frameworks. Built RESTful APIs and managed PostgreSQL databases for multiple client projects.",
    technologies: ["JavaScript", "React", "Node.js", "PostgreSQL", "Docker"]
  },
  {
    id: 3,
    company: "Digital Agency Pro",
    position: "Web Developer",
    duration: "2019 - 2020",
    location: "Rio de Janeiro, Brazil",
    description: "Created responsive websites and web applications using PHP and JavaScript. Collaborated with design teams to implement pixel-perfect user interfaces.",
    technologies: ["PHP", "JavaScript", "MySQL", "WordPress", "CSS3"]
  }
];

export const mockCourses = [
  {
    id: 1,
    title: "iOS Development with Swift",
    institution: "Apple Developer Academy",
    year: "2023",
    type: "Certificate",
    description: "Advanced iOS development course covering SwiftUI, Core Data, and App Store optimization."
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
    title: "Computer Science Degree",
    institution: "University of São Paulo",
    year: "2019",
    type: "Degree",
    description: "Bachelor's degree focusing on software engineering, algorithms, and database systems."
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
    institution: "Design Academy",
    year: "2022",
    type: "Certificate",
    description: "User experience design principles and advanced Figma prototyping techniques."
  }
];

export const mockSkills = [
  { name: "Swift", icon: "Code", proficiency: 90, category: "Mobile" },
  { name: "JavaScript", icon: "Code2", proficiency: 95, category: "Web" },
  { name: "PostgreSQL", icon: "Database", proficiency: 85, category: "Database" },
  { name: "PHP", icon: "Code", proficiency: 80, category: "Backend" },
  { name: "SQL", icon: "Database", proficiency: 88, category: "Database" },
  { name: "Figma", icon: "Figma", proficiency: 75, category: "Design" },
  { name: "Microsoft Office", icon: "FileText", proficiency: 90, category: "Productivity" },
  { name: "React", icon: "Code2", proficiency: 92, category: "Web" },
  { name: "Node.js", icon: "Server", proficiency: 87, category: "Backend" }
];