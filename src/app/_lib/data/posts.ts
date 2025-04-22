import { IPosts } from "../interfaces/post";

export const posts: IPosts = {
  highlighted: {
    list: [
      {
        title: "About me",
        author: "João Morais",
        highlighted: true,
        paragraphs: [
          "With 4+ years of experience in website development, I have worked on medium and large-scale products, focusing on performance optimization, usability, and accessibility. Additionally, I have been actively involved in creating and implementing new features, always adhering to industry standards and seeking innovation efficiently, basing decisions on test results and metric analysis.",
          "I have solid expertise in JavaScript technologies, with proficiency in frameworks and libraries such as ReactJS, NextJS, and VueJS. I have applied these tools to develop various products, including catalogs, real-time chats, ERP and CRM systems, landing pages, and institutional websites. On the backend, I have experience building APIs and other services using PHP and Node.js, with libraries like ExpressJS and NestJS.",
        ],
        date: new Date("November 8, 2024"),
        readingMinutes: 1,
        icon: "Me",
      },
    ],
  },
  bestSkills: {
    title: "Best skills",
    list: [
      {
        title: "ReactJS",
        author: "João Morais",
        paragraphs: [
          "I have been studying ReactJS since version 16 and working with it since the release of version 16.8, which introduced hooks and the concept of functional programming.",
          "Throughout my experience, I have worked with features like React Hooks, React Router, Tanstack Query (formerly React Query), Redux and Redux Toolkit, React Hook Form, Styled Components, among others.",
        ],
        date: new Date("August 11, 2020"),
        readingMinutes: 3,
        icon: "CleanCode",
      },
      {
        title: "NextJS",
        author: "João Morais",
        paragraphs: [
          "I have been studying and following Next.js since version 12, where I had my first professional experience with this framework.",
          "Today, I am using version 15 to create this humble portfolio.",
        ],
        date: new Date("September 1, 2022"),
        readingMinutes: 4,
        icon: "CleanCode",
      },
      {
        title: "VueJS",
        author: "João Morais",
        paragraphs: [
          "I have used Vue.js professionally in version 2.0 during one of my past experiences.",
          "I have also worked with and studied version 3.0, where we saw improvements in JSX and TypeScript support.",
        ],
        date: new Date("Sep 1, 2020"),
        readingMinutes: 2,
        icon: "CodeOptimization",
      },
      {
        title: "Typescript",
        author: "João Morais",
        paragraphs: [
          "I started using TypeScript in 2020.",
          "Javascript offers unparalleled coding freedom, but Typescript is essential for the health of the project, and consequently, for the developer’s well-being.",
        ],
        date: new Date("October 4, 2020"),
        readingMinutes: 3,
        icon: "CodeRand",
      },
    ],
  },
  experiences: {
    title: "Experiences",
    list: [
      {
        title: "Code49",
        subtitle: "Frontend Software Engineer",
        author: "João Morais",
        paragraphs: [
          "Responsible for maintaining the product, implementing new ''features and also for refactoring and migrating part of the project to use new technologies and frameworks.",
          "Techs and resources: PHP, JavaScript, VueJS, HTML, CSS, Bootstrap, Laravel, NodeJS, MariaDB, Docker, Git/GitLab e Discord. Methodologies: Scrum and Kanban.",
        ],
        date: new Date("September 1, 2020"),
        readingMinutes: 4,
        icon: "Screen",
      },
      {
        title: "SOFTABLE",
        subtitle: "Frontend Software Engineer",
        author: "João Morais",
        paragraphs: [
          "I participated in the migration and refactoring of an ERP product at its beginning, being also responsible for implementing new screens and functionalities.",
          "Techs and resources: ReactJS, React Hooks, React Hook Form, React Router, React Query, Styled Components, NextJS, Typescript, HTML, JavaScript, CSS.",
        ],
        date: new Date("September 1, 2022"),
        readingMinutes: 3,
        icon: "FolderScreen",
      },
      {
        title: "UOL",
        subtitle: "Frontend Software Engineer",
        author: "João Morais",
        paragraphs: [
          "Responsible for maintaining and adding new features to the product, this being a realtime chat.",
          "Technologies and resources used: ReactJS, React Hooks, React Router, React Query, React Redux, React Testing Library, Styled Components, SASS, NextJS, Typescript, Adobe XD, Figma, Atlassian resources and Teams.",
        ],
        date: new Date("May 6, 2022"),
        readingMinutes: 5,
        icon: "Chat",
      },
    ],
  },
};
