// Navbar navigation links
export const links = [
  { path: "/", name: "home" },
  { path: "/projects", name: "my projects" },
  { path: "/contact", name: "contact" },
];

// Hero section data
// Socials data
import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiInstagramFill,
} from "react-icons/ri";

export const icons = [
  {
    path: "https://www.youtube.com/@MATASSIMOHAMED",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://www.linkedin.com/in/matassi-mohamed",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://github.com/M07am3dM",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.facebook.com/mohamed.matassi.73?mibextid=ZbWKwL",
    name: <RiFacebookFill />,
  },
  {
    path: "https://instagram.com/matassimohamed?igshid=OGQ5ZDc2ODk2ZA==",
    name: <RiInstagramFill />,
  },
];

// About section data
import {
  Calendar,
  GraduationCap,
  HomeIcon,
  MailIcon,
  PhoneCall,
  User2,
} from "lucide-react";

export const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Mohamed Matassi",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "+213 696 078 210",
  },
  {
    icon: <MailIcon size={20} />,
    text: "matassi.mohamed89@gamil.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "Born on 21 September, 1989",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Certificated Front-end Web Developer",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "271 Muwatsa City, Blida, Algeria",
  },
];

export const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "Re-Code & Flatiron School",
        qualification: "Front-end Web Developer",
        years: "2023",
      },
      {
        university: "National Institute of Specialized Vocational Training",
        qualification: " Higher Technician in Industrial Maintenance",
        years: "2009 - 2011",
      },
      {
        university: "Saad Dahleb University Blida",
        qualification: "Faculty of Sciences and Technology",
        years: "2009",
      },
    ],
  },
  {
    title: "experience",
    data: [
      {
        company: "Mediterranean Float Glass (MFG) SPA ",
        role: "POWER PLANT TECHNICIAN",
        years: "2016 - 2023",
      },
      {
        company: "Sarl INDUS MACHINES",
        role: "Maintenance Technician",
        years: "2015 - 2016",
      },
      {
        company: "Sarl GMNI Equipements",
        role: "Maintenance Technician",
        years: "2012 - 2014",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      {
        name: "HTML, CSS",
      },
      {
        name: "JavaScript, React, NextJS",
      },
      {
        name: "Firebase, Sanity, Jest",
      },
      {
        name: "Front-end Development",
      },
    ],
  },
  {
    title: "tools",
    data: [
      {
        imgPath: "/assets/about/vscode.svg",
      },
      {
        imgPath: "/assets/about/figma.svg",
      },
      {
        imgPath: "/assets/about/notion.svg",
      },
      {
        imgPath: "/assets/about/wordpress.svg",
      },
    ],
  },
];

// Services section data
import { GanttChartSquare, Blocks, Gem } from "lucide-react";

export const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: "Web Design",
    description:
      "The internet itself is a pain to be followed by the developer. Here it is as if the flight of the desert is free.",
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: "Web Development",
    description:
      "The internet itself is a pain to be followed by the developer. Here it is as if the flight of the desert is free.",
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: "App Development",
    description:
      "The internet itself is a pain to be followed by the developer. Here it is as if the flight of the desert is free.",
  },
];

// Project page and section data
export const projectData = [
  {
    image: "/assets/work/3.png",
    category: "next js",
    name: "InnerSpace",
    description:
      "An online therapist website allow users to schedule an appointment with a therapist and take therapy sessions online through chat, video, and voice calls. Users can search for information on the website, and also there will be tests or therapist activities for users.",
    link: "https://innerspace.vercel.app/",
    github: "https://github.com/202306-NEA-DZ-FEW/online-Therapist",
  },
  {
    image: "/assets/work/2.png",
    category: "next js",
    name: "Magni Market",
    description:
      "The MagniMarket E-Commerce Web App is a lightweight and user-friendly online shopping platform designed to provide a simple and intuitive e-commerce experience. Users can browse a curated selection of products, filter products by name, price, or category, create an account, and add items to their shopping cart or wish list. This project serves as an ideal starting point for small-scale online businesses and a valuable learning resource for web development enthusiasts.",
    link: "https://magnimarket.netlify.app/",
    github:
      "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-magnimarket",
  },
  {
    image: "/assets/work/4.png",
    category: "react js",
    name: "Popcorn Palace",
    description: "A movie and TV show web app ",
    link: "https://movie-project-popcornpalace.vercel.app/",
    github: "https://github.com/202306-NEA-DZ-FEW/movie-project-popcornpalace",
  },
  {
    image: "/assets/work/1.png",
    category: "JavaScript, Js DOM",
    name: "404 Brain Not Found",
    description:
      "The Mad Libs App is a phrasal template word game. It consists of one player prompting others for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime.",
    link: "/",
    github: "https://github.com/202306-NEA-DZ-FEW/madlibs-404-brain-not-found",
  },
];
