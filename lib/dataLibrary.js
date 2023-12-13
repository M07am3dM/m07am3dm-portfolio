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
    image: "/assets/work/innerSpace.png",
    category: "next js",
    name: "InnerSpace",
    description:
      "An online therapist website allow users to schedule an appointment with a therapist and take therapy sessions online through chat, video, and voice calls. Users can search for information on the website, and also there will be tests or therapist activities for users.",
    link: "https://innerspace.vercel.app/",
    github: "https://github.com/202306-NEA-DZ-FEW/online-Therapist",
  },
  {
    image: "/assets/work/magnimarket.png",
    category: "next js",
    name: "Magni Market",
    description:
      "The MagniMarket E-Commerce Web App is a lightweight and user-friendly online shopping platform designed to provide a simple and intuitive e-commerce experience. Users can browse a curated selection of products, filter products by name, price, or category, create an account, and add items to their shopping cart or wish list. This project serves as an ideal starting point for small-scale online businesses and a valuable learning resource for web development enthusiasts.",
    link: "https://magnimarket.netlify.app/",
    github:
      "https://github.com/202306-NEA-DZ-FEW/e-commerce-project-magnimarket",
  },
  {
    image: "/assets/work/popcornpalace.png",
    category: "react js",
    name: "Popcorn Palace",
    description: "A movie and TV show web app ",
    link: "https://movie-project-popcornpalace.vercel.app/",
    github: "https://github.com/202306-NEA-DZ-FEW/movie-project-popcornpalace",
  },
  {
    image: "/assets/work/madlibs.png",
    category: "JavaScript, Js DOM",
    name: "404 Brain Not Found",
    description:
      "The Mad Libs App is a phrasal template word game. It consists of one player prompting others for a list of words to substitute for blanks in a story before reading aloud. The game is frequently played as a party game or as a pastime.",
    link: "/",
    github: "https://github.com/202306-NEA-DZ-FEW/madlibs-404-brain-not-found",
  },
];

// Testimonial section data
export const reviewsData = [
  {
    avatar: "/assets/reviews/avatar-1.png",
    name: "Walid Lamraoui",
    job: "Front-end Web Developer",
    review:
      "Working with Mohammed on the Innerspace project was exceptional. His frontend expertise and leadership played a crucial role in crafting visually striking interfaces and ensuring project success. Mohammed is an invaluable both as team member and as a leader, and I look forward to future collaborations with him.",
  },
  {
    avatar: "/assets/reviews/avatar-3.png",
    name: "Oussama Barka",
    job: "Front-end Web Developer",
    review:
      "I had the pleasure of working with Mohamed during a frontend web developer project in the re:coded bootcamp. I was consistently surprised by his dedication, hard work, and active engagement in the project. His commitment to excellence and collaborative spirit greatly contributed to the success of our e-commerce project. It was a pleasure working alongside someone so focused and driven. I highly recommend Mohamed for any future endeavors in web development.",
  },
  {
    avatar: "/assets/reviews/avatar-2.png",
    name: "Menar Selamet",
    job: "Front-end Web Developer",
    review:
      "Mohamed is a standout student known for his hard work and resilience. His genuine enthusiasm for learning not only brightened our classroom but also motivated his peers. Teaching him was a joy, and I'm confident that his dedication will propel him toward great achievements.",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "Oussama Kherroub",
    job: "Aplication Manager",
    review:
      "Despite transitioning from a different field, Mr. Mohamed Matassi has displayed remarkable dedication and effort in becoming a front-end Web Developer. His recent accomplishments reflect his commitment to mastering new skills, and his enthusiasm for the role is truly commendable. A valuable asset to any project, he seamlessly combines his diverse background with a growing proficiency in front-end development.",
  },
  {
    avatar: "/assets/reviews/avatar-5.png",
    name: "Sid Ali Habchi",
    job: "Front-end Web Developer",
    review: "Anyone whom the times of pleasure are said to be chosen.",
  },
  {
    avatar: "/assets/reviews/avatar-6.png",
    name: "Mouloud Mecheter",
    job: "Front-end Web Developer",
    review: "Anyone whom the times of pleasure are said to be chosen.",
  },
];
