import { LangType } from "../context/lang";

interface HeroDataInterface {
    welcome: string;
    title: string;
    name: string;
    subtitle: string;
    content: {
        text: string;
        bold?: boolean;
        block?: boolean;
    }[];
    download: string;
    availableForWork: string;
}


export const heroData: Record<LangType, HeroDataInterface> = {
    es: {
        welcome: "Bienvenido a mi sitio web!",
        title: "Hola! Soy",
        name: "Matías.",
        subtitle: "Lic. Sistemas de Información | Desarrollador Web Full Stack | 🇦🇷",
        content: [
            { text: "Aporto una sólida capacidad de " },
            { text: "análisis y diseño ", bold: true },
            { text: "para crear aplicaciones bien estructuradas, optimizadas y alineadas con buenas prácticas de desarrollo.", block: true },
            { text: "Me motiva buscar soluciones para " },
            { text: "problemas del mundo real ", bold: true },
            { text: "a través de la programación, combinando lógica, creatividad y eficiencia. Siempre en busca de " },
            { text: "nuevos desafíos ", bold: true },
            { text: "y oportunidades de aprendizaje." },
        ],
        download: "Descargar CV",
        availableForWork: "Disponible para trabajar",
    },
    en: {
        welcome: "Welcome to my website!",
        title: "Hi! I'm",
        name: "Matías.",
        subtitle: "BSc in Information Systems | Full Stack Web Developer | 🇦🇷",
        content: [
            { text: "I bring a solid capacity for " },
            { text: "analysis and design ", bold: true },
            { text: "to create well-structured, optimized applications aligned with good development practices.", block: true },
            { text: "I'm motivated to find solutions for " },
            { text: "real-world problems ", bold: true },
            { text: "through programming, combining logic, creativity, and efficiency. Always looking for " },
            { text: "new challenges ", bold: true },
            { text: "and learning opportunities." },
        ],
        download: "Download CV",
        availableForWork: "Available for work",
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
        label: "WhatsApp",
        href: "https://wa.me/5493743489088",
        blank: true,
        icon: "fa-brands fa-whatsapp",
    },
];
