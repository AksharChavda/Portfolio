import {
    payroll,
    todo,
    safar,
    Snake,
    mobile,
    backend,
    web,
    javascript,
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
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Graphic Designer",
      icon: figma,
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
      name: "JavaScript",
      icon: javascript,
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
      iconBg: "#383E56",
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
      iconBg: "#383E56",
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
      date: "Feb 2023 - march 2023",
      points: [
        "Developed with a user-centric approach, ensuring a seamless and intuitive task management experience.",
        "Powered by React, JavaScript, CSS which makes the app look and feel modern.",
        "It can also Insert, Update and delete task accordingly.",
      ],
    },
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