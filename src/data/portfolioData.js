export const portfolioData = {
  personal: {
    fullName: "Adurthi Jaya Lakshmi Durga",
    shortName: "Jaya Adurthi",
    role: "Software Engineer | Frontend Developer",
    location: "Palakollu, Andhra Pradesh, India",
    email: "jayaadurthi2784@gmail.com",
    phone: "+91 9640844954",
    profileImg: "/profile.jpg",
    resumePdf: "/resume.pdf",
    summary:
      "Final-year Computer Science Engineering student passionate about software development, problem solving, and building practical real-world applications.",
    aboutParagraphs: [
      "I am a final-year Computer Science Engineering student at Swarnandhra College of Engineering and Technology with a strong interest in software engineering and frontend web development.",
      "My core technical foundation includes Python, Web Development (React, JavaScript, HTML, CSS), and AI-powered practical applications. I enjoy tackling complex challenges, writing clean code, and continuously expanding my technical skillset.",
      "Whether developing responsive web platforms like SCET Connect or AI assistants for sustainability and code generation, I focus on creating reliable, practical solutions that deliver immediate value."
    ],
    github: "https://github.com/jaya-adurthi",
    linkedin: "https://www.linkedin.com/in/adurthi-jaya-lakshmi-durga-776281322"
  },

  education: {
    degree: "B.Tech in Computer Science and Engineering",
    college: "Swarnandhra College of Engineering and Technology",
    duration: "2023 – 2027",
    cgpa: "8.26 / 10",
    location: "Seetharampuram, Andhra Pradesh"
  },

  experience: [
    {
      role: "AI for Sustainability Intern",
      company: "1M1B",
      duration: "May 2026 – June 2026",
      type: "Internship",
      description:
        "Worked on an AI-powered waste classification and disposal recommendation system using Python and Streamlit.",
      highlights: [
        "Focused on AI-based waste classification into eco-friendly categories.",
        "Engineered disposal recommendation flows for sustainable waste management.",
        "Built interactive front-end interfaces using Streamlit for instant user recommendations."
      ]
    }
  ],

  skills: [
    {
      category: "Programming & Languages",
      icon: "Code",
      items: ["Python", "Java", "JavaScript"]
    },
    {
      category: "Web Development",
      icon: "Globe",
      items: ["React.js", "HTML", "CSS", "Streamlit"]
    },
    {
      category: "Database & Backend",
      icon: "Database",
      items: ["SQL"]
    },
    {
      category: "Tools & Platforms",
      icon: "Wrench",
      items: ["Git", "GitHub"]
    }
  ],

  projects: [
    {
      id: "scet-connect",
      title: "SCET Connect",
      subtitle: "College Student Portal",
      description:
        "A responsive college student portal for Swarnandhra College of Engineering and Technology with student login, branch and section selection, daily class schedules, college information and student-focused campus services.",
      techStack: ["React.js", "JavaScript", "HTML", "CSS", "Vite", "Vercel"],
      githubUrl: "https://github.com/jaya-adurthi/SCET_CONNECT",
      liveUrl: "https://scetconnect.vercel.app/",
      demoVideoUrl: "/scet-connect-demo.mp4",
      bannerImg: "/scet-connect-banner.jpg",
      liveButtonText: "Live Website",
      featured: true
    },
    {
      id: "code-buddy",
      title: "Code Buddy",
      subtitle: "AI Coding Assistant",
      description:
        "An AI-powered coding assistant that helps students generate code, understand existing code, explain programming concepts, debug errors and improve their solutions.",
      techStack: ["Python", "Streamlit", "AI", "Google Colab"],
      githubUrl: "https://github.com/jaya-adurthi/Code-Buddy",
      liveUrl: null,
      demoVideoUrl: "/code-buddy-demo.mp4",
      bannerImg: "/code-buddy-banner.jpg",
      liveButtonText: "Live Demo",
      featured: false
    },
    {
      id: "ai-food-waste",
      title: "AI Food Waste Reduction Assistant",
      subtitle: "AI-Powered Sustainable Waste Management",
      description:
        "An AI-powered application that helps users classify waste and receive appropriate disposal recommendations while encouraging sustainable waste management.",
      techStack: ["Python", "Streamlit", "AI"],
      githubUrl: "https://github.com/jaya-adurthi/AI-Food-Waste-Reduction-Assistant",
      liveUrl: "https://ai-food-waste-reduction-assistant-vgy2awxue8ckxxwnqqdnaq.streamlit.app/",
      demoVideoUrl: "/food-waste-demo.mp4",
      bannerImg: "/food-waste-banner.jpg",
      liveButtonText: "Live Demo",
      featured: false
    }
  ]
};
