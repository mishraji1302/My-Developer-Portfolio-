export const PORTFOLIO_DATA = {
  personal: {
    name: "Arnav Mishra",
    role: "AI & ML Engineer",
    tagline: "Final-year Computer Science student specializing in Artificial Intelligence and Machine Learning. Passionate about building state-of-the-art predictive models, deep learning architectures, and deploying end-to-end intelligent systems. Actively seeking onsite internship opportunities.",
  },
  education: {
    university: "Bharati Vidyapeeth College of Engineering, Pune",
    degree: "B.Tech in Computer Science Engineering",
    year: "2023 – 2027 (Expected)",
    gpa: "8.4/10 CGPA",
  },
  projects: [
    {
      id: "nova-pay",
      title: "Nova Pay – Enterprise ERP & Business Process Automation",
      description: "A comprehensive, full-stack Enterprise Resource Planning (ERP) platform built with React and Spring Boot. It consolidates finance, HR, procurement, and inventory modules, featuring a Python FastAPI microservice for intelligent, AI-driven process automation.",
      extendedDescription: "Engineered a full-stack ERP platform in React, backed by Java Spring Boot with JWT auth, RBAC, and ACID-compliant ledger operations. Architected a Python FastAPI microservice for intelligent process automation, achieving 0.89 conformance precision on 1,200 event log traces and 93% intent classification accuracy via spaCy NER across 6 enterprise categories.",
      features: [
        "Optimised RESTful API communication delivering 38 ms median response under 250 concurrent users.",
        "Containerised with Docker Compose, reducing peak latency by 51% via horizontal scaling.",
        "Intelligent process automation with 93% intent classification accuracy.",
        "Secure ledger operations with JWT auth and RBAC."
      ],
      tech: ["React", "Spring Boot", "FastAPI", "PostgreSQL", "Docker"],
      github: "https://github.com/mishraji1302/NovaPay-",
      live: "https://nova-pay-alpha.vercel.app",
    },
    {
      id: "ai-water-quality",
      title: "AI-Powered Water Quality Detector",
      description: "An end-to-end Machine Learning pipeline that processes real-time pH, turbidity, and TDS sensor data to classify water safety. Features automated model evaluation and a live monitoring dashboard deployed via a Flask REST API.",
      extendedDescription: "Developed an end-to-end Machine Learning pipeline designed to classify water safety in real-time using pH, turbidity, and Total Dissolved Solids (TDS) sensor data. This project addressed the critical need for early contamination detection by building a robust data processing architecture—covering raw sensor data cleaning, missing value imputation, and feature engineering. I automated the evaluation of multiple classifiers (Logistic Regression, Decision Trees, and Random Forests), specifically optimizing for the F1 score to minimize dangerous false negatives in safety predictions. The finalized high-accuracy model was deployed via a scalable Flask REST API and integrated into a responsive monitoring dashboard. This system allows users to seamlessly visualize historical water quality trends, track sensor anomalies, and make immediate, data-driven public health decisions.",
      features: [
        "Automated classifier evaluation across multiple models.",
        "Deployed via Flask REST API with a real-time monitoring dashboard.",
        "Backend database storage for historical trend logging.",
        "Data-driven water safety decisions and pattern analysis over time."
      ],
      tech: ["Python", "Scikit-learn", "Flask", "REST API"],
      github: "#",
      live: "",
    },

  ],
  certifications: [
    {
      title: "Google AI Essentials Certificate",
      issuer: "Google / Coursera",
      date: "2024",
      url: "#",
    },
    {
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2024",
      url: "https://www.linkedin.com/feed/update/urn:li:activity:7346243190917607425/",
    },
    {
      title: "Java Programming Course – Core & Advanced Java",
      issuer: "Independent",
      date: "2024",
      url: "#",
    }
  ],
  skills: {
    languages: ["Java", "Python", "JavaScript", "C"],
    web: ["React.js", "Node.js", "Angular.js", "HTML", "CSS", "REST API"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    tools: ["Git", "Docker", "FastAPI", "Flask", "VS Code"],
    coreConcepts: ["OOP", "DBMS", "Microservices", "Operating Systems", "Computer Networks", "Agile"],
    learning: ["DSA", "ML"],
    softSkills: ["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Time Management"],
  },
  contact: {
    email: "mailto:arnav852mishra@gmail.com",
    github: "https://github.com/mishraji1302",
    linkedin: "https://www.linkedin.com/in/arnav-mishra-2a197a267",
    resume: "/resume.pdf",
  }
};
