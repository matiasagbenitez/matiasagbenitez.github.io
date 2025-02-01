import { LangType } from "../context/lang";

interface HeroDataInterface {
    welcome: string;
    title: string;
    name: string;
    subtitle: string;
    subtitle2: string;
    subtitle3: string;
    download: string;
}

export const heroData: Record<LangType, HeroDataInterface> = {
    es: {
        welcome: "Bienvido a mi portafolio!",
        title: "Hola! Mi nombre es",
        name: "Matías.",
        subtitle: "Licenciado en Sistemas de Información.",
        subtitle2: "Desarrollador web full stack en la nube",
        subtitle3: "con experiencia en el desarrollo de soluciones completas: planificación, análisis, diseño, desarrollo, pruebas e implementación.",
        download: "Descargar CV",
    },
    en: {
        welcome: "Welcome to my portfolio!",
        title: "Hi! My name is",
        name: "Matías.",
        subtitle: "Information Systems Graduate.",
        subtitle2: "Cloud full stack web developer",
        subtitle3: "with experience in the development of complete solutions: planning, analysis, design, development, testing and implementation.",
        download: "Download CV",
    },
}

interface HrefButtonInterface {
    label: string;
    href: string;
    icon: string;
    blank?: boolean;
    showLabel?: boolean;
}

export const heroHrefs: HrefButtonInterface[] = [
    {
        label: "Email",
        href: "mailto:matiasagbenitez@gmail.com",
        blank: false,
        icon: "fa-regular fa-envelope",
    },
    {
        label: "GitHub",
        href: "https://github.com/matiasagbenitez",
        blank: true,
        icon: "fa-brands fa-github",
    },
    {
        label: "LinkedIn",
        href: "https://www.linkedin.com/in/matiasagbenitez/",
        blank: true,
        icon: "fa-brands fa-linkedin",
    },
    {
        label: "Scroll down",
        href: "#about",
        blank: false,
        icon: "fa-solid fa-arrow-down",
    },
];
