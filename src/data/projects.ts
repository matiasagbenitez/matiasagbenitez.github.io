import { LangType } from "../context/lang";

interface ProjectTitles {
    title: string;
    subtitle: string;
}

export const projectsTitles: Record<LangType, ProjectTitles> = {
    en: {
        title: "Projects",
        subtitle: "These are some of the projects I have worked on and that I can show you.",
    },
    es: {
        title: "Proyectos",
        subtitle: "Estos son algunos de los proyectos en los que he trabajado y que puedo mostrarte.",
    },
};

export interface Project {
    imgSrc: string;
    title: string;
    subtitle?: {
        en: string;
        es: string;
    };
    description?: {
        en: string[];
        es: string[];
    };
    tags?: string[];
    projectLink?: string;
    githubLink?: string;
}

export const projectsList: Project[] = [
    {
        imgSrc: "/images/projects/scrotify.png",
        title: "Scrotify",
        subtitle: {
            en: "A simple Spotify clone with basics real-time playback controls",
            es: "Un clon de Spotify con controles de reproducción en tiempo real básicos",
        },
        tags: ["Astro", "React", "Svelte", "Zustand", "Tailwind CSS", "Vite"],
        description: {
            en: [
                "Scrotify is a simple Spotify clone built with Astro. React and Svelte components have been implemented to enhance the user experience. The application state is managed with Zustand, a minimal and reactive library, and the design has been made with Tailwind CSS.",
                "The goal of the project was to learn how to use Astro and explore its capabilities to build modern web applications, as well as improve front-end design and development skills using various technologies and libraries."
            ],
            es: [
                "Scrotify es un clon simple de Spotify construido con Astro. Se han implementado componentes de React y Svelte para mejorar la experiencia del usuario. El estado de la aplicación se gestiona con Zustand, una biblioteca mínima y reactiva, y el diseño se ha realizado con Tailwind CSS.",
                "El objetivo del proyecto fue aprender a utilizar Astro y explorar sus capacidades para construir aplicaciones web modernas, además de mejorar las habilidades de diseño y desarrollo front-end utilizando diversas tecnologías y bibliotecas.",
            ],
        },
        projectLink: "https://scrotify.netlify.app/",
        githubLink: "https://github.com/matiasagbenitez/spotify-astro",
    },

];