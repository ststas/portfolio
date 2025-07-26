import type { TechItemType } from "./types";

export const TECH_ITEMS_NAMES: Record<string, string> = {
  CSS: "CSS",
  Git: "Git",
  HTML: "HTML",
  JavaScript: "JavaScript",
  NextJS: "NextJS",
  Express: "ExpressJS",
  React: "React",
  TypeScript: "TypeScript",
  Docker: "Docker",
  ApolloGraphQL: "Apollo GraphQL",
  StoryBook: "StoryBook",
  MongoDB: "MongoDB",
} as const;

export const TECH_ITEMS: TechItemType[] = [
  {
    name: TECH_ITEMS_NAMES.React,
    icon: "/images/icon-react.svg",
    description: "Hooks, components, state management",
    href: "https://react.dev/",
  },
  {
    name: TECH_ITEMS_NAMES.TypeScript,
    icon: "/images/icon-ts.svg",
    description: "Type safety, interfaces, generics",
    href: "https://www.typescriptlang.org/docs/",
  },
  {
    name: TECH_ITEMS_NAMES.NextJS,
    icon: "/images/icon-nextjs.svg",
    description: "Server components, routing, API routes",
    href: "https://nextjs.org/docs",
  },
  {
    name: TECH_ITEMS_NAMES.JavaScript,
    icon: "/images/icon-js.svg",
    description: "ES6+, DOM manipulation, async programming",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    name: TECH_ITEMS_NAMES.ApolloGraphQL,
    icon: "/images/icon-apollo.svg",
    description: "GraphQL, Apollo Client, Apollo Server",
    href: "https://www.apollographql.com/",
  },
  {
    name: TECH_ITEMS_NAMES.StoryBook,
    icon: "/images/icon-storybook.svg",
    description: "StoryBook",
    href: "https://storybook.js.org/",
  },
  {
    name: TECH_ITEMS_NAMES.Docker,
    icon: "/images/icon-docker.svg",
    description: "Containerization, orchestration, CI/CD",
    href: "https://www.docker.com/",
  },
  {
    name: TECH_ITEMS_NAMES.MongoDB,
    icon: "/images/icon-mongodb.svg",
    description: "MongoDB, Mongoose",
    href: "https://www.mongodb.com/",
  },
  {
    name: TECH_ITEMS_NAMES.HTML,
    icon: "/images/icon-html.svg",
    description: "Semantic markup, accessibility, responsive design",
    href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    name: TECH_ITEMS_NAMES.CSS,
    icon: "/images/icon-css.svg",
    description: "Flexbox, Grid, animations, responsive design",
    href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    name: TECH_ITEMS_NAMES.Express,
    icon: "/images/icon-express.svg",
    description: "Express, REST APIs, authentication",
    href: "https://expressjs.com/",
  },
  {
    name: TECH_ITEMS_NAMES.Git,
    icon: "/images/icon-github.svg",
    description: "Version control, branching, collaboration",
    href: "https://git-scm.com/doc",
  },
] as const;
