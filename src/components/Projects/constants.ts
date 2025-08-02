import type { ProjectType } from "./types";

export const PROJECTS_NAMES: Record<string, string> = {
  next: "next",
  movies: "movies",
  mesto: "mesto",
  todolist: "todolist",
  drummachine: "drummachine",
  express: "express",
  // react: "react",
  game: "game",
  javascript: "javascript",
  warTimer: "warTimer",
  gridFlex: "gridFlex",
  adaptive: "adaptive",
  storyBook: "storyBook",
} as const;

export const PROJECTS: ProjectType[] = [
  {
    name: PROJECTS_NAMES.next,
    image: "/images/project-portfolio.jpg",
    webLink: "https://ststas.dev",
    githubLink: "https://github.com/ststas/portfolio",
  },
  {
    name: PROJECTS_NAMES.storyBook,
    image: "/images/project-storybook.jpg",
    webLink: "https://ststas.dev/storybook/",
    githubLink: "https://github.com/ststas/storybook",
  },
  {
    name: PROJECTS_NAMES.movies,
    image: "/images/project-movies-explorer.jpg",
    webLink: "https://ststas.dev/movies/",
    githubLink: "https://github.com/ststas/movies-explorer",
  },
  {
    name: PROJECTS_NAMES.todolist,
    image: "/images/todolist-typescript.jpg",
    webLink: "https://ststas.dev/todolist/",
    githubLink: "https://github.com/ststas/todolist",
  },
  {
    name: PROJECTS_NAMES.drummachine,
    image: "/images/project-drummachine.jpg",
    webLink: "https://ststas.github.io/projects/drummachine",
  },
  {
    name: PROJECTS_NAMES.mesto,
    image: "/images/project-front-backend.jpg",
    webLink: "https://ststas.dev/mesto/",
    githubLink: "https://github.com/ststas/mesto-docker",
  },
  {
    name: PROJECTS_NAMES.game,
    image: "/images/project-kill-the-expert.jpg",
    webLink: "https://ststas.github.io/projects/game",
    githubLink: "https://github.com/ststas/killtheexpert",
  },
  {
    name: PROJECTS_NAMES.warTimer,
    image: "/images/project-war-timer.jpg",
    webLink: "https://ststas.github.io/projects/wartimer",
    githubLink: "https://github.com/sweezi19/wartime/tree/new-version",
  },
  {
    name: PROJECTS_NAMES.express,
    image: "/images/project-express.jpg",
    githubLink: "https://github.com/ststas/express-mesto-gha",
  },
  // {
  //   name: PROJECTS_NAMES.react,
  //   image: "/images/project-mesto-react.jpg",
  //   webLink: "https://ststas.github.io/projects/mestoreact",
  //   githubLink: "https://github.com/ststas/react-mesto-auth",
  // },
  {
    name: PROJECTS_NAMES.javascript,
    image: "/images/project-mesto-java.jpg",
    webLink: "https://ststas.github.io/projects/mestojava/",
    githubLink: "https://github.com/ststas/mesto",
  },
  {
    name: PROJECTS_NAMES.gridFlex,
    image: "/images/project-littlefatboy.jpg",
    webLink: "https://ststas.github.io/projects/littlefatboy",
    githubLink: "https://github.com/ststas/littlefatboy",
  },
  {
    name: PROJECTS_NAMES.adaptive,
    image: "/images/project-travel.jpg",
    webLink: "https://ststas.github.io/projects/russian-travel",
    githubLink: "https://github.com/ststas/russian-travel",
  },
] as const;

export const BUTTON_STYLES =
  "inline-block w-full rounded-lg border border-black px-2 py-2 text-center text-sm font-medium text-black transition-colors hover:bg-gray-200 sm:px-2 sm:py-3 truncate disabled:opacity-50 disabled:cursor-auto disabled:hover:bg-transparent" as const;

export const BUTTON = {
  web: "web",
  git: "git",
} as const;

export const BUTTONS = [
  {
    type: BUTTON.web,
    className: BUTTON_STYLES,
  },
  {
    type: BUTTON.git,
    className: BUTTON_STYLES,
  },
];
