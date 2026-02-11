import {
  mobile,
  backend,
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
  threejs,
  meta,
  shopify,
  starbucks,
  tesla,
} from "../assets";
import portfolioSettings, { configuredProjects, configuredTestimonials } from "../config/portfolio";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "education", title: "Education" },
  { id: "contact", title: "Contact" },
];

const services = [
  { title: "Software Engineering", icon: mobile },
  { title: "Backend Engineering", icon: backend },
  { title: "Cloud & DevOps Delivery", icon: web },
];

const skillsData = [
  "Swift",
  "SwiftUI",
  "UIKit",
  "Java",
  "Spring Boot",
  "Node.js",
  "PostgreSQL",
  "Docker",
  "Jenkins",
  "React",
];

const technologies = [
  { name: "React JS", icon: reactjs },
  { name: "JavaScript", icon: javascript },
  { name: "TypeScript", icon: typescript },
  { name: "Node JS", icon: nodejs },
  { name: "MongoDB", icon: mongodb },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Redux Toolkit", icon: redux },
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "Git", icon: git },
  { name: "Docker", icon: docker },
  { name: "Three JS", icon: threejs },
  { name: "Figma", icon: figma },
];

const experiences = [
  {
    title: "Graduate Assistant",
    company_name: "Montclair State University School of Computing",
    icon: meta,
    iconBg: "#383E56",
    date: "Aug 2025 - Present",
    points: [
      "Deliver detailed code reviews on Java, Python, and SQL assignments with focus on OOP and design quality.",
      "Evaluate code quality and logic for 150+ students weekly and provide actionable feedback.",
      "Support students during office hours across in-person and remote setups to resolve technical blockers.",
    ],
  },
  {
    title: "Analyst, Mobile-Backend Systems",
    company_name: "Development Bank of Singapore (DBS) Tech",
    icon: starbucks,
    iconBg: "#1d1836",
    date: "Jan 2023 - Aug 2024",
    points: [
      "Promoted from Senior Officer for strong performance in payment systems engineering.",
      "Designed Java microservices for high-traffic mobile banking features handling 10k+ daily requests.",
      "Reduced mobile API latency by 35% via SQL indexing and payload optimization.",
      "Built Grafana monitoring to support 99.99% uptime for critical payment endpoints.",
    ],
  },
  {
    title: "Senior Officer, Full-Stack",
    company_name: "Development Bank of Singapore (DBS) Tech",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Jan 2023",
    points: [
      "Improved deployment speed by 25% by integrating Jenkins and Docker-based CI/CD pipelines.",
      "Contributed to migration from monolithic banking modules to microservices architecture.",
      "Executed large-scale SQL scripts for SG-region data cleanup during RHEL upgrades.",
    ],
  },
  {
    title: "Data Analyst Intern",
    company_name: "KPMG",
    icon: shopify,
    iconBg: "#383E56",
    date: "Nov 2021 - Dec 2021",
    points: [
      "Automated manual Excel-heavy reporting flows with SQL-based data retrieval pipelines.",
      "Performed EDA using Python (NumPy, Pandas) to clean and analyze complex datasets.",
      "Applied statistical analysis to extract patterns for business reporting and decision support.",
    ],
  },
];

const educations = [
  {
    title: "MS in Computer Science",
    company_name: "Montclair State University",
    icon: 'https://edvoy.com/institutions/montclair-state-university/',
    iconBg: "#383E56",
    date: "Expected May 2026",
    points: ["GPA: 3.7 / 4.0"],
  },
  {
    title: "Bachelor of Engineering in Information Technology",
    company_name: "Osmania University (MJCET)",
    icon: shopify,
    iconBg: "#E6DEDD",
    date: "2018 - 2022",
    points: ["GPA: 3.8 / 4.0"],
  },
];

const testimonials = configuredTestimonials;
const projects = configuredProjects;

export const profile = portfolioSettings.profile;
export { services, technologies, experiences, testimonials, projects, skillsData, educations };
