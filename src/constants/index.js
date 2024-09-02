import {
    Android1,
    payroll,
    todo,
    safar,
    Snake,
    mobile,
    backend,
    web,
    javascript,
    tsx,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    threejs,
    Raw,
    Payroll,
    todoi,
    Ananta,
    Android,
    Mad,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },  
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "App Developer",
      icon: Mad,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
  
    {
      name: "React JS",
      icon: reactjs,
    },
    
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {name:"Android",
    icon: Android1,},
    
  ];
  
  const experiences = [
    {
      title: "Snake game using python",
      company_name: "Starbucks",
      icon: Snake,
      iconBg: "#383E56",
      date: "Dec 2022 - Jan 2023",
      points: [
        "Built a game using python’s Turtle library on a beginners level",
        "Made the game by following various tutorials and imbibing our knowledge to enhance the game",
        "Used various functions and loops to make the game more interactive and user friendly",
        "The project showcases my programming skills, game development abilities, and creativity in Python.",
      ],
    },
    {
      title: "Safar Website",
      company_name: "Tesla",
      icon: Raw,
      iconBg: "#ffffff",
      date: "Aug 2021 - Sep 2021",
      points: [
        "Built a static single page website for our in-house internship at GSFC University, teams were mapped together to build a working website from scratch using HTML, CSS and JavaScript.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Designed and graphed out the full website on figma first to get enhanced results whilst coding for the website.",
        
      ],
    },
    {
      title: "Payroll Management System",
      company_name: "Shopify",
      icon: Payroll,
      iconBg: "#ffffff",
      date: "May 2023 - Jun 2023",
      points: [
        "Created the user interface using HTML and  CSS to ensure a clean and intuitive design.",
        "Developed backend functionality using PHP to handle data processing and calculations.",
        "Integrated MySQL database to store employee records, salary details, and Attendance",
        "Gained hands-on experience with web development technologies including HTML, CSS, PHP, and JavaScript.",
      ],
    },
    {
      title: "TO-DO List",
      company_name: "Meta",
      icon: todoi,
      iconBg: "#E6DEDD",
      date: "Feb 2023 - March 2023",
      points: [
        "Developed with a user-centric approach, ensuring a seamless and intuitive task management experience.",
        "Powered by React, JavaScript, CSS which makes the app look and feel modern.",
        "It can also Insert, Update and delete task accordingly.",
      ],
    },
    {
      title: "University Fest Treasurer",
      company_name: "Ananta-24",
      icon: Ananta,
      iconBg: "#000000",
      date: "Jan 2024 - March 2024",
      points: [
        "Treasurer at ANANTA-24 university fest, overseeing all financial transactions and budget management.",
        "Successfully organized over 40+ events, coordinating with vendors, sponsors, and participants.",
        "Managed a crowd of 1200+ attendees, ensuring smooth registration and crowd control.",
        "Handled cash flow, Financial reporting, ensuring transparency and accountability throughtout the event.",
       
      ],
    },
    {
      title: "Android App Development",
      company_name: "HealthPlex",
      icon: Android,
      iconBg: "#ffffff",
      date: "April 2024 - May 2024",
      points: [
        "Developed an Android application named HealthPlex for GSFC University, utilizing Java and Firebase technologies to provide a comprehensive health management solution.",
        "Integrated a GPS-based attendance system within the app, enabling effortless tracking of attendance for fitness classes and events.",
        "Implemented a machine learning model as a future enhancement, capable of accurately detecting the angle of the elbow during workout sessions.",
        "Leveraged the ML model to segment images of the elbow if the angle falls below a predefined threshold, addressing the challenge of absence of gym trainers at the location.",
        "The project showcases my Android app development skills, Firebase integration, and machine learning expertise."
        

        
      ],
    },
    {
      title: "Wory-Freelancer ",
      company_name: "Mamo-Technolabs LLP",
      icon: tsx,
      iconBg: "#ffffff",
      date: "Jun 2024 - Jul 2024",
      points: [
        "Developed Wory a full-stack freelancing platform with a robust backend using Node.js, Express, and MongoDB, enabling efficient user management, project handling, and role-based access control.",
        "Built a responsive and intuitive frontend using React and TypeScript, featuring a user dashboard, project browsing, and advanced filtering options to enhance user experience.",
        "Utilized Context API and Redux for state management to handle data flow efficiently across the application, ensuring a smooth and responsive user interface.",
        "Designed and developed features for CRUD operations on projects, allowing clients to add, update, and manage projects seamlessly.",
      ],
    }
  ];
  
 
  const projects = [
    {
      name: "SAFAR",
      description:
        "Welcome to Safar, an immersive website tailored to capture the exhilarating journey engineering life Safar, which means journey in several languages, it was made by me and my team of friends",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "js",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "node",
          color: "blue-text-gradient",
        },
      ],
      image: safar,
      source_code_link: "https://9sgf6r.csb.app/",
    },
    {
      name: "To-Do List",
      description:
"Explore my React-based To-Do App and witness how it can simplify your daily task management. Whether you're a developer or a user in need of a reliable task organizer, this app has you covered",
          tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://7ettjw.csb.app/",
    },
    {
      name: "Payroll ",
      description:
"Efficiently manage payroll with our SQL-backed web platform. Seamlessly handle employee data, also manage attendance, salary, and other payroll-related tasks with ease.",  
        tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "php",
          color: "green-text-gradient",
        },
        {
          name: "sql",
          color: "pink-text-gradient",
        },
      ],
      image: payroll,
      source_code_link: "",
    },
  ];
  
  export { services, technologies, experiences, projects };