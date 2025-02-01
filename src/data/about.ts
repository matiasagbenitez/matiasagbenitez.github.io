import { LangType } from "../context/lang";

interface AboutDataInterface {
    text1: string;
    text2: string;
    items: { number: number; label: string }[];
}

export const aboutData: Record<LangType, AboutDataInterface> = {
    es: {
        text1: "¡Hola! Soy Matías Agustín Benítez, Analista en Sistemas de Computación y Licenciado en Sistemas de Información, graduado de la Universidad Nacional de Misiones 🇦🇷. Cuento con experiencia en el desarrollo de aplicaciones web completas utilizando distintas tecnologías modernas.",
        text2: "Me considero un profesional comprometido con la calidad y la excelencia, buscando contribuir en equipos de IT donde pueda seguir creciendo y aportar mis habilidades. Siempre busco definir metas claras y asegurar calidad en mi trabajo.",
        items: [{ number: 15, label: "Proyectos completados" }, { number: 2, label: "Años de experiencia" }, { number: 10, label: "Certificaciones" }],
    },
    en: {
        text1: "Hi! I'm Matías Agustín Benítez, Computer Systems Analyst and Information Systems Graduate, graduated from the National University of Misiones 🇦🇷. I have experience in the development of complete web applications using different modern technologies.",
        text2: "I consider myself a professional committed to quality and excellence, looking to contribute in IT teams where I can continue to grow and contribute my skills. I always seek to define clear goals and ensure quality in my work.",
        items: [{ number: 15, label: "Completed projects" }, { number: 2, label: "Years of experience" }, { number: 10, label: "Certifications" }],
    },
}