export const PORTFOLIO_DATA = {
  personal: {
    name: "Arnav Mishra",
    role: "Computer Science Student",
    tagline: "Building scalable software solutions and exploring the intersections of Web Development, Artificial Intelligence, and Machine Learning.",
  },
  education: {
    university: "Bharati Vidyapeeth College of Engineering, Pune",
    degree: "B.Tech in Computer Science",
    year: "3rd Year",
    gpa: "8.5 CGPA",
  },
  projects: [
    {
      id: "subtitle-video-app",
      title: "Subtitle Video App",
      description: "A comprehensive video application featuring robust subtitle customization and seamless playback.",
      extendedDescription: "This video application provides an immersive media experience, allowing users to upload, sync, and customize subtitles in real-time. Built with a focus on performance and seamless playback across devices, the architecture leverages Spring Boot for efficient video processing and streaming, coupled with a highly responsive React frontend.",
      features: [
        "Real-time subtitle synchronization and styling.",
        "Adaptive bitrate streaming for smooth playback.",
        "Robust user authentication and session management.",
        "RESTful API design for seamless frontend-backend integration."
      ],
      tech: ["Java", "Spring Boot", "React", "Tailwind CSS"],
      github: "#",
      live: "#",
    },
    {
      id: "chat-application",
      title: "Chat Application",
      description: "Real-time messaging platform leveraging WebSockets for instant, reliable communication.",
      extendedDescription: "A highly scalable, real-time messaging application designed to support high-throughput concurrent connections. By utilizing WebSockets rather than HTTP polling, the system achieves sub-millisecond message delivery times. The backend is optimized for persistent connections and features message queuing to ensure zero data loss during network interruptions.",
      features: [
        "Instant messaging via bidirectional WebSocket connections.",
        "Persistent message history stored securely in MySQL.",
        "Online/offline presence indicators.",
        "Secure JWT-based authentication protocol."
      ],
      tech: ["Java", "WebSockets", "MySQL", "React"],
      github: "#",
      live: "#",
    },
    {
      id: "nuclear-powerplant-project",
      title: "Nuclear Powerplant Project",
      description: "A high-reliability monitoring system for tracking core metrics and ensuring operational safety.",
      extendedDescription: "A mission-critical monitoring dashboard designed to aggregate and visualize telemetry data from sensor networks. Safety and reliability are the core tenets of this architecture, which features redundant data pipelines and immediate anomaly detection alerting. The system presents complex metrics in an intuitive interface for operators.",
      features: [
        "Real-time telemetry ingestion and processing.",
        "Automated anomaly detection and threshold alerting.",
        "Interactive data visualization dashboards.",
        "High-availability architecture with failover support."
      ],
      tech: ["Java", "Spring Boot", "React", "WebSockets"],
      github: "#",
      live: "#",
    },
    {
      id: "nova-pay",
      title: "Nova Pay",
      description: "A next-generation core banking application designed for secure, high-throughput financial transactions.",
      extendedDescription: "A robust fintech platform built to handle secure ledger operations and high-throughput financial transactions. The architecture enforces ACID properties strictly at the database layer while providing a blazingly fast, modern web experience for the end-user. Security features include end-to-end encryption and comprehensive audit logging.",
      features: [
        "Secure ledger and transaction processing engine.",
        "Comprehensive user identity and access management (IAM).",
        "Automated compliance and audit logging.",
        "Intuitive financial dashboard for end-users."
      ],
      tech: ["Java", "Spring Boot", "PostgreSQL", "React"],
      github: "https://github.com/mishraji1302/NovaPay-",
      live: "#",
    },
  ],
  certifications: [
    {
      title: "Generative AI Certification",
      issuer: "Google",
      date: "2024",
      url: "#",
    },
    {
      title: "Technology Virtual Experience Program",
      issuer: "Deloitte",
      date: "2023",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7346243190917607425/",
    },
    {
      title: "Data Visualisation Virtual Experience",
      issuer: "Tata Group",
      date: "2023",
      url: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/MyXvBcppsW2FkNYCX_ifobHAoMjQs9s6bKS_tPMtZoHY5L8bTcJFC_1774540881214_completion_certificate.pdf",
    }
  ],
  skills: {
    languages: ["Java", "Python", "PHP", "JavaScript", "SQL", "HTML/CSS"],
    backend: ["Spring Boot", "Django", "Flask", "REST APIs", "WebSockets", "Servlets"],
    machineLearning: ["Machine Learning", "TensorFlow", "PyTorch", "Scikit-Learn", "Pandas"],
    frontend: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    database: ["MySQL", "PostgreSQL", "MongoDB"],
    tools: ["Git", "Postman", "Docker", "Linux"],
  },
  contact: {
    email: "mailto:arnav852mishra@gmail.com",
    github: "https://github.com/",
    linkedin: "https://linkedin.com/in/",
    resume: "/resume.pdf",
  }
};
