export const portfolioData = {
  personal: {
    fullName: "Adurthi Jaya Lakshmi Durga",
    shortName: "Jaya Adurthi",
    role: "Software Engineer | Frontend Developer",
    location: "Palakollu, Andhra Pradesh, India",
    email: "jayaadurthi2784@gmail.com",
    phone: "+91 9640844954",
    github: "https://github.com/jaya-adurthi",
    linkedin: "https://www.linkedin.com/in/adurthi-jaya-lakshmi-durga-776281322",
    resumePdf: "/resume.pdf",
    profileImg: "/profile.jpg",
    summary: "Computer Science Engineer specializing in modern frontend development, intuitive web platforms, and practical AI applications. Focused on building responsive, high-performance web experiences with React, JavaScript, and Python.",
    aboutParagraphs: [
      "I am a final-year Computer Science and Engineering student at Swarnandhra College of Engineering and Technology, driven by a passion for frontend engineering, software design, and modern web architectures.",
      "With hands-on experience in React.js, Python, JavaScript, and AI tool integration, I build scalable web applications that bridge clean user interfaces with practical problem solving.",
      "I thrive on transforming complex ideas into intuitive web platforms, constantly refining my skills in software architecture, algorithm design, and modern frontend frameworks."
    ]
  },

  skills: [
    {
      category: "Languages",
      items: ["Python", "JavaScript (ES6+)", "C", "SQL"]
    },
    {
      category: "Frontend Development",
      items: ["React.js", "HTML5", "CSS3", "Vite"]
    },
    {
      category: "Frameworks & AI",
      items: ["Streamlit", "AI Integrations", "Python Scripting"]
    },
    {
      category: "Developer Tools",
      items: ["Git", "GitHub", "VS Code"]
    }
  ],

  projects: [
    {
      id: "scet-connect",
      title: "SCET Connect",
      subtitle: "College Student Portal",
      description: "A comprehensive college portal engineered for SCET students to access daily branch schedules, academic notices, and essential campus services through a streamlined React user interface.",
      bannerImg: "/scet-connect-banner.jpg",
      techStack: ["React.js", "JavaScript", "HTML5", "CSS3", "Vite", "Vercel"],
      liveUrl: "https://scetconnect.vercel.app/",
      githubUrl: "https://github.com/jaya-adurthi/SCET_CONNECT",
      demoVideoUrl: "/scet-connect-demo.mp4",
      liveButtonText: "LIVE WEBSITE",
      featured: true
    },
    {
      id: "code-buddy",
      title: "Code Buddy",
      subtitle: "AI Coding Assistant",
      description: "An intelligent AI-powered development companion built with Python and Streamlit that assists programmers with real-time code generation, syntax debugging, logic explanation, and language conversion.",
      bannerImg: "/code-buddy-banner.jpg",
      techStack: ["Python", "Streamlit", "AI Models", "Google Colab"],
      liveUrl: null,
      githubUrl: "https://github.com/jaya-adurthi/Code-Buddy",
      demoVideoUrl: "/code-buddy-demo.mp4",
      liveButtonText: "LIVE DEMO",
      featured: true
    },
    {
      id: "ai-food-waste",
      title: "AI Food Waste Reduction Assistant",
      subtitle: "AI Sustainability Web App",
      description: "An AI-driven sustainability platform designed to analyze food waste, classify organic items, and generate actionable eco-friendly disposal and composting recommendations.",
      bannerImg: "/food-waste-banner.jpg",
      techStack: ["Python", "Streamlit", "AI / Machine Learning", "GitHub"],
      liveUrl: "https://ai-food-waste-reduction-assistant-vgy2awxue8ckxxwnqqdnaq.streamlit.app/",
      githubUrl: "https://github.com/jaya-adurthi/AI-Food-Waste-Reduction-Assistant",
      demoVideoUrl: "/food-waste-demo.mp4",
      liveButtonText: "LIVE DEMO",
      featured: true
    }
  ],

  education: {
    degree: "B.Tech in Computer Science & Engineering",
    college: "Swarnandhra College of Engineering and Technology",
    location: "Seetharampuram, Narsapuram, AP",
    duration: "2023 – 2027",
    cgpa: "8.26 / 10"
  },

  experience: [
    {
      role: "AI for Sustainability Intern",
      company: "1M1B (One Million for One Billion)",
      duration: "May 2026 – June 2026",
      type: "Internship",
      description: "Engaged in building AI-enabled sustainability applications focused on environmental impact, waste management, and intelligent data-driven solutions.",
      highlights: [
        "Engineered AI-focused web tools and sustainability solutions during a hands-on technical internship.",
        "Built responsive user interfaces and integrated Python machine learning models for real-world environmental applications.",
        "Collaborated on project architecture, code optimization, and user experience design principles."
      ]
    }
  ]
};
