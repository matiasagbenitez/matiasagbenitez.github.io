import { LangType } from "../context/lang";

interface AboutDataInterface {
    title: string;
    content: string[];
}

export const aboutData: Record<LangType, AboutDataInterface> = {
    es: {
        title: "Sobre mí",
        content: [
            "¡Hola! 👋 Soy Matías Benítez, un desarrollador enfocado en la resolución de problemas a través del código. Disfruto diseñar y construir aplicaciones eficientes, combinando análisis, creatividad y buenas prácticas de desarrollo.",
            "Mi foco está en la calidad en el trabajo y la mejora continua tanto personal como interpersonal, buscando siempre aportar valor en equipos de IT y enfrentar nuevos desafíos que impulsen mi crecimiento profesional.",
        ],
    },
    en: {
        title: "About Me",
        content: [
            "Hi! 👋 I'm Matías Benítez, a developer focused on solving problems through code. I enjoy designing and building efficient applications, combining analysis, creativity, and good development practices.",
            "My focus is on quality work and continuous improvement both personally and interpersonally, always seeking to add value in IT teams and face new challenges that drive my professional growth.",
        ],
    },
}

interface EducationDataInterface {
    title: string;
    subtitle?: string;
    content: {
        years: string;
        title: string;
        institution: string;
    }[];
}

export const educationData: Record<LangType, EducationDataInterface> = {
    es: {
        title: "Educación",
        content: [
            {
                years: "mar. 2018  - nov. 2023",
                title: "Licenciatura en Sistemas de Información",
                institution: "Universidad Nacional de Misiones",
            },
            {
                years: "mar. 2018  - mar. 2023",
                title: "Analista en Sistemas de Computación",
                institution: "Universidad Nacional de Misiones",
            },
            {
                years: "mar. 2011  - dic. 2011",
                title: "Técnico en Equipos e Instalaciones Electromecánicas",
                institution: "Instituto Línea Cuchilla",
            },
        ],
    },
    en: {
        title: "Education",
        content: [
            {
                years: "mar. 2018  - nov. 2023",
                title: "BSc in Information Systems",
                institution: "National University of Misiones",
            },
            {
                years: "mar. 2018  - mar. 2023",
                title: "Computer Systems Analyst",
                institution: "National University of Misiones",
            },
            {
                years: "mar. 2011  - dec. 2011",
                title: "Electromechanical Equipment and Installations Technician",
                institution: "Instituto Línea Cuchilla",
            },
        ],
    }
}