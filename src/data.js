import project1 from "./assets/images/podiocrmsystems.png"
import project2 from "./assets/images/salesforcecrmsystems.png"
import project3 from "./assets/images/ppcleads to deal.png"
import project4 from "./assets/images/elite jeans.png"
import project5 from "./assets/images/portfolio.PNG"
import project6 from "./assets/images/images.jpeg"
export const personalData = {
    name: "Azeem Yaqoob",
    role: "Full Stack Developer",
    email: "azeemyaqoob121@gmail.com",
    phone: "+923430429793",
    address: "Lahore, Pakistan",
    about: "I'm a passionate full stack developer with expertise in building web applications using modern technologies. I love solving complex problems and creating efficient, scalable solutions.",
    about1: "As a dedicated full stack developer, I specialize in crafting robust web applications using cutting-edge technologies. I thrive on tackling intricate challenges and delivering high-performance, scalable solutions that drive business success.",
    socialLinks: {
        github: "https://github.com/azeemyaqoob",
        linkedin: "https://www.linkedin.com/in/azeem-yaqoob/",
        // twitter: "https://twitter.com/yourusername",
    },
};

export const education = [
    {
        id: 1,
        degree: "Bachelor's of Sciences in Software Engineering",
        institution: "The University of Lahore",
        year: "2017 - 2021",
        description: "Specialized in Web Technologies and Software Engineering"
    },
    {
        id: 2,
        degree: "Fsc (Pre-Engineering)",
        institution: "Punjab College, Sialkot",
        year: "2015 - 2017",
        description: "Focus on Software Development"
    }
];

export const experience = [
    {
        id: 1,
        role: "Full Stack Developer Expert",
        company: "Upwork (Freelance)",
        year: "Nov 2023 - Present",
        description: [
            "- Designed and implemented high-performance web applications using modern React (Vite) with TypeScript, creating responsive UIs with Tailwind CSS and Material UI that improved client engagement by 30-40%",
            "- Architected and developed full-stack solutions with Node.js backend services, implementing RESTful APIs with Express.js and MongoDB for data persistence, optimizing database queries for 50% faster response times",
            "- Implemented CI/CD pipelines using Bitbucket and Git, reducing deployment times by 60% while maintaining 99.9% uptime for client applications",
            //   "- Collaborated with international clients to translate business requirements into technical specifications, delivering 15+ projects with 100% client satisfaction"
        ]
    },
    {
        id: 2,
        role: "Senior Full Stack Developer",
        company: "360Synergytech Lahore",
        year: "July 2021 - Nov 2023",
        description: [
            "- Spearheaded development of enterprise-grade web applications using React (Vite), Node.js, and TypeScript stack, implementing scalable architectures that handled 10,000+ daily active users",
            "- Managed and mentored a cross-functional team of 5 developers, establishing coding standards and review processes that reduced bugs by 45%",
            "- Optimized deployment workflows for Hostinger and Bluehost environments, implementing automated deployment scripts that cut deployment time by 70%",
            "- Introduced performance monitoring with custom dashboards, identifying and resolving bottlenecks that improved application response times by 60%"
        ]
    },
    {
        id: 3,
        role: "Full Stack Developer",
        company: "Viltco Technologies (Arfa Karim Tower, Lahore)",
        year: "April 2020 - July 2021",
        description: [
            "- Engineered dynamic front-end interfaces with React, Material UI and Bootstrap, implementing responsive designs that improved mobile conversion rates by 25%",
            "- Developed robust back-end services with Laravel and Node.js, creating REST APIs that served 50+ endpoints with 99.5% reliability",
            "- Implemented comprehensive Git workflows across the development team, reducing merge conflicts by 80% and improving code quality",
            "- Designed and optimized SQL database schemas that improved query performance by 40% for data-intensive applications"
        ]
    },
    {
        id: 4,
        role: "Full Stack Development Intern",
        company: "Viltco Technologies (Arfa Karim Tower, Lahore)",
        year: "Feb 2020 - April 2020 (3 months)",
        description: [
            "- Built interactive web applications using React and vanilla JavaScript, implementing features that increased user engagement metrics by 35%",
            "- Developed responsive UIs with Bootstrap and CSS3, achieving perfect Lighthouse scores for mobile performance",
            "- Contributed to team projects using Git version control, mastering collaborative development workflows in an Agile environment",
            "- Gained hands-on experience with full development lifecycle from requirements gathering to production deployment"
        ]
    }
];

export const projects = [
    {
        id: 1,
        title: "Podio CRM System",
        description: "I led the front-end development of Podio CRM System using React, creating an intuitive UI for lead tracking and workflows. Integrated Stripe payments and built the affiliate program interface. Ensured seamless integration with Laravel backend and third-party tools.",
        technologies: ["React", "Laravel", "MYSQL", "Stripe Payment"],
        githubLink: "https://github.com/azeemyaqoob/podio-crm-system-using-reactjs-laravel-mysql-stripe-integration?tab=readme-ov-file",
        liveLink: "https://podiocrmsystems.com/",
        image: project1
    },
    {
        id: 2,
        title: "Salesforce CRM System",
        description: "I developed the complete UI with Stripe and API integration. Built the backend using Node.js and MongoDB for lead management, workflows, and payments. Implemented analytics, role-based access, and calendar integration for the React frontend.",
        technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
        githubLink: "https://github.com/azeemyaqoob/salesforce-crm-system-MERN",
        liveLink: "http://salesforcecrmsystems.com/",
        image:project2
    },
    {
        id: 3,
        title: "PPC leads to deal",
        description: "I designed and developed the entire UI of the project, including the homepages, login, registration, forgot password, email reset, and dashboard. I also implemented Stripe integration and handled all API integrations on the frontend.",
        technologies: ["React", "Bootstrap", "Stripe"],
        githubLink: "https://github.com/azeemyaqoob/ppcleadstodeal-reactjs-laravel-mysql-stripe",
        liveLink: "http://ppcleadstodeals.com/",
        image:project3
    },
     {
        id: 4,
        title: "Elite Jeans Work Order",
        description: "I developed Elite Jeans, a MERN stack platform for apparel management. The React/MUI frontend handles login, registration, and dashboard, while the Node/Express backend manages products, orders, and vendors. I integrated Stripe, email notifications, and frontend APIs, enabling spec uploads, tech packs, and role-based workflows for seamless operations.",
        technologies: ["React", "Material UI", "Node JS", "MongoDB"],
        githubLink: "https://github.com/azeemyaqoob/elite-jeans-mern-stack",
        liveLink: "http://204.236.209.105/",
        image:project4
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "I designed and developed a responsive portfolio website with animations to showcase projects and skills. Implemented smooth transitions and interactive elements using Framer Motion and styled components for an engaging user experience.",
        technologies: ["React", "Framer Motion", "Styled Components"],
        githubLink: "https://github.com/azeemyaqoob/portfolio-azeem-yaqoob",
        liveLink: "#",
        image: project5
    },
        {
        id: 6,
        title: "Ecommerce Jewelry Website",
        description: "I designed and developed the full UI of this jewelry e-commerce site, including homepages, login, registration, password reset, and dashboard. Built with React.js, Laravel, and MySQL, I integrated secure payments and managed all frontend API connections for seamless product browsing, cart management, and order processing",
        technologies: ["React JS", "Bootstrap", "Laravel", "MySQL"],
        githubLink: "https://github.com/azeemyaqoob/ecommerce-jewelry-website-reactjs-mysql-laravel",
        liveLink: "",
        image: project6
    }
];

export const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "SQL", level: 75 },
    { name: "HTML/CSS", level: 95 },
    { name: "TypeScript", level: 75 },
    { name: "Git", level: 85 },
    { name: "TailwindCSS", level: 75 },
    { name: "Material UI", level: 80 },
    { name: "Bitbucket", level: 85 },
    { name: "Stripe Payment", level: 85 },
    { name: "Bluehost", level: 80 },
    { name: "Hostinger", level: 85 },
    { name: "Custom CSS", level: 80 },
    { name: "Bootstrap", level: 80 },
];