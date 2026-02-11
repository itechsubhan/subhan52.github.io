import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";
import { configuredProjects, configuredTestimonials } from "../config/portfolio";

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
  {
    id:"education",
    title:"Education"
  }
];

const services = [
  {
    title: "Full Stack Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "ios Apps Developer",
    icon: mobile,
  }
];

const skillsData = [
  'JavaScript',
  'React',
  'Node.js',
  'CSS',
  'HTML',
  'Python',
  'MongoDB',
  'Express.js',
  'TypeScript',
  'Git'
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    "title": "Software Developer",
    "company_name": "DBS TECH (The Development Bank of Singapore)",
    "icon": "dbs_tech",
    "iconBg": "#123456", 
    "date": "09/2023 - 08/2024",
    "points": [
      "Developed and maintained microservices for Institutional Banking.",
      "Collaborated with business analysts and stakeholders to define requirements and implement solutions.",
      "Led the migration of legacy systems to modernized microservices, improving system reliability and efficiency."
    ]
  },
  {
    "title": "Senior Officer",
    "company_name": "DBS TECH",
    "icon": "dbs_tech",
    "iconBg": "#123456",
    "date": "06/2022 - 08/2023",
    "points": [
      "Led the development of the Stop Recall Service and Standing Instructions modules for the payments system.",
      "Integrated various microservices and resolved critical operational issues to enhance system performance."
    ]
  },{
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
//  Education 

const educations = [
    {
      "title": "MS in Computer Science",
      "company_name": "Montclair State University",
      "icon": "montclair_state_university",
      "iconBg": "#E6DEDD",
      "date": "08/2024 - Present",
      "points": [
        "Coursework: Advanced Algorithms, Machine Learning, Cloud Computing, Database Systems, Data Structures, etc."
      ]
    },
    {
      "title": "Bachelor of Engineering in Information Technology",
      "company_name": "Muffakham Jah College of Engineering and Technology, OU",
      "icon": "mjcet",
      "iconBg": "#E6DEDD",
      "date": "2018 - 2022",
      "points": [
        "CGPA: 8.07/10"
      ]
    }
  ];



const testimonials = configuredTestimonials;

const projects = configuredProjects;

export { services, technologies, experiences, testimonials, projects,skillsData,educations };
