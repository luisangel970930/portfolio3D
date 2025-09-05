import {
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
  terrazas,
  tesla,
  nabem,
  bookings,
  nabemimage,
  censu,
  datamining,
  threejs,
  next,
  java,
  vue,
  PostgreSQL,
  aws,
  python,
  datamart,
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
    title: "Backend Developer",
    icon: backend,
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
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next",
    icon: next,
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
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "PostgreSQL",
    icon: PostgreSQL,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Complejo Turístico Las Terrazas",
    icon: terrazas,
    iconBg: "#E6DEDD",
    date: "Dec 2020 - Jan 2023",
    points: [
      "Developing and maintaining web applications using Vue.js and other related technologies.",
      "Development of various API REST using Node.js and Express.",
      "Maintenance and backup of real databases with Microsoft SQL Server",
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Nabem Company",
    icon: nabem,
    iconBg: "#383E56",
    date: "Feb 2023 - Jul 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Back-end development using Spring Boot and other related technologies.",
    ],
  },
  {
    title: "Front-End Developer",
    company_name: "Datamart",
    icon: datamart,
    iconBg: "#ffffffff",
    date: "Jul 2023 - Present",
    points: [
      "Implemented state machines using XState to manage complex workflows.",
      "Integrated multiple AWS services, including Step Functions, CloudWatch for monitoring, CodeCommit, among others.",
      "Developed SPA web applications using React as the primary framework, applying design patterns and best practices.",
      "Built and maintained reusable UI/UX component systems to optimize user experience.",
      "Contributed to code automation projects, reducing development time and improving team efficiency.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Web DataMining",
    description:
      "Web application that allows you to apply data mining algorithms to the registration of educational course events in the Moodle platform to obtain learning patterns.",
    tags: [
      {
        name: "Java",
        color: "blue-text-gradient",
      },
      {
        name: "JSF",
        color: "green-text-gradient",
      },
    ],
    image: datamining,
    source_code_link: "https://github.com/",
  },
  {
    name: "Censo",
    description:
      "Web application for the administration of personal and statistical data in the population of the terraces.",
    tags: [
      {
        name: "Vue 2.0",
        color: "blue-text-gradient",
      },
      {
        name: "Vuetify",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: censu,
    source_code_link: "https://github.com/",
  },
  {
    name: "Reservas",
    description:
      "Web system for the management of booking excursions of the Las Terrazas complex.",
    tags: [
      {
        name: "Vue 3.0",
        color: "blue-text-gradient",
      },
      {
        name: "Vuetify",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: bookings,
    source_code_link: "https://github.com/",
  },
  {
    name: "Nabem Company",
    description: "Online store for the sale of products in Cuba",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Next",
        color: "green-text-gradient",
      },
      {
        name: "Tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: nabemimage,
    source_code_link: "https://github.com/",
    html_link: "https://nabem.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
