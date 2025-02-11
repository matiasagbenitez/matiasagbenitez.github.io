import { LangType } from '../context/lang/LangProvider';
interface Technology {
    imgSrc: string;
    label: string;
    en: { desc: string; }
    es: { desc: string; }
}

interface Skill {
    en: { area: string; }
    es: { area: string; }
    open?: boolean;
    skills: Technology[];
}

interface SkillsTitles {
    title: string;
    subtitle: string;
}

export const skillsTitles: Record<LangType, SkillsTitles> = {
    en: {
        title: "Technical skills",
        subtitle: "These are some of the technologies and tools I have worked with and can use in projects.",
    },
    es: {
        title: "Habilidades técnicas",
        subtitle: "Estas son algunas de las tecnologías y herramientas con las que he trabajado y puedo usar en proyectos.",
    },
};

export const items: Skill[] = [
    {
        en: { area: "Backend Development" },
        es: { area: "Desarrollo Backend" },
        skills: [
            {
                imgSrc: "/images/skills/typescript.svg",
                label: "TypeScript",
                en: {
                    desc: "Programming Language",
                },
                es: {
                    desc: "Lenguaje de Programación",
                },
            },
            {
                imgSrc: "/images/skills/nodejs.svg",
                label: "NodeJS",
                en: {
                    desc: "JavaScript Runtime",
                },
                es: {
                    desc: "Entorno de Ejecución JS",
                },
            },
            {
                imgSrc: "/images/skills/expressjs.svg",
                label: "ExpressJS",
                en: {
                    desc: "Node Framework",
                },
                es: {
                    desc: "Framework de Node",
                },
            },
            {
                imgSrc: "/images/skills/nestjs.svg",
                label: "NestJS",
                en: {
                    desc: "Node Framework",
                },
                es: {
                    desc: "Framework de Node",
                },
            },
            {
                imgSrc: "/images/skills/rest-api.svg",
                label: "REST",
                en: { desc: "API Architecture" },
                es: { desc: "Arquitectura de API" },
            },
            {
                imgSrc: "/images/skills/graphql.svg",
                label: "GraphQL",
                en: { desc: "API Query Language" },
                es: { desc: "Lenguaje de Consulta API" },
            },
            {
                imgSrc: "/images/skills/socket-io.svg",
                label: "Socket.io",
                en: { desc: "Real-Time Communication" },
                es: { desc: "Comun. Tiempo Real" },
            },
            {
                imgSrc: "/images/skills/postman.svg",
                label: "Postman",
                en: { desc: "API Testing" },
                es: { desc: "Pruebas de API" },
            },
            {
                imgSrc: "/images/skills/insomnia.svg",
                label: "Insomnia",
                en: { desc: "API Testing" },
                es: { desc: "Pruebas de API" },
            },
            {
                imgSrc: "/images/skills/swagger.svg",
                label: "Swagger",
                en: { desc: "API Documentation" },
                es: { desc: "Documentación de APIs" },
            },
            {
                imgSrc: "/images/skills/jest.svg",
                label: "Jest",
                en: { desc: "Testing Framework" },
                es: { desc: "Framework de Pruebas" },
            },
        ],
    },
    {
        en: { area: "Frontend Development" },
        es: { area: "Desarrollo Frontend" },
        skills: [
            {
                imgSrc: "/images/skills/react.svg",
                label: "React",
                en: { desc: "JavaScript Library" },
                es: { desc: "Biblioteca de JavaScript" },
            },
            {
                imgSrc: "/images/skills/nextjs.svg",
                label: "NextJS",
                en: { desc: "React Framework" },
                es: { desc: "Framework de React" },
            },
            {
                imgSrc: "/images/skills/react-router.svg",
                label: "React Router",
                en: { desc: "Routing" },
                es: { desc: "Enrutamiento" },
            },
            {
                imgSrc: "/images/skills/zustand.svg",
                label: "Zustand",
                en: { desc: "State Management" },
                es: { desc: "Gestión de Estado" },
            },
            {
                imgSrc: "/images/skills/redux.svg",
                label: "Redux Toolkit",
                en: { desc: "State Management" },
                es: { desc: "Gestión de Estado" },
            },
            {
                imgSrc: "/images/skills/tanstack.svg",
                label: "Tanstack",
                en: { desc: "Utilities" },
                es: { desc: "Utilidades" },
            },
            {
                imgSrc: "/images/skills/tailwindcss.svg",
                label: "Tailwind CSS",
                en: { desc: "Utility CSS" },
                es: { desc: "CSS de Utilidad" },
            },
            {
                imgSrc: "/images/skills/bootstrap.svg",
                label: "Bootstrap",
                en: { desc: "CSS Framework" },
                es: { desc: "Framework de CSS" },
            },
            {
                imgSrc: "/images/skills/shadcn.svg",
                label: "Shadcn",
                en: { desc: "Component Library" },
                es: { desc: "Biblioteca Componentes" },
            },
            {
                imgSrc: "/images/skills/figma.svg",
                label: "Figma",
                en: { desc: "Design Tool" },
                es: { desc: "Herramienta de Diseño" },
            },
            {
                imgSrc: "/images/skills/storybook.svg",
                label: "Storybook",
                en: { desc: "Component Library" },
                es: { desc: "Biblioteca Componentes" },
            },
        ],
    },
    {
        en: { area: "Databases" },
        es: { area: "Bases de Datos" },
        skills: [
            {
                imgSrc: "/images/skills/mysql.svg",
                label: "MySQL",
                en: { desc: "Relational Database" },
                es: { desc: "Base de Datos Relacional" },
            },
            {
                imgSrc: "/images/skills/postgresql.svg",
                label: "PostgreSQL",
                en: { desc: "Relational Database" },
                es: { desc: "Base de Datos Relacional" },
            },
            {
                imgSrc: "/images/skills/mongodb.svg",
                label: "MongoDB",
                en: { desc: "NoSQL Database" },
                es: { desc: "Base de Datos NoSQL" },
            },
            {
                imgSrc: "/images/skills/firestore.svg",
                label: "Firestore",
                en: { desc: "NoSQL Database" },
                es: { desc: "Base de Datos NoSQL" },
            },
        ],
    },
    {
        en: { area: "Cloud & Deployment" },
        es: { area: "Nube y Despliegue" },
        skills: [
            {
                imgSrc: "/images/skills/aws.svg",
                label: "AWS",
                en: { desc: "Cloud Services" },
                es: { desc: "Servicios en la Nube" },
            },
            {
                imgSrc: "/images/skills/docker.svg",
                label: "Docker",
                en: { desc: "Containerization" },
                es: { desc: "Contenerización" },
            },
            {
                imgSrc: "/images/skills/nginx.svg",
                label: "Nginx",
                en: { desc: "Web Server" },
                es: { desc: "Servidor Web" },
            },
            {
                imgSrc: "/images/skills/vercel.svg",
                label: "Vercel",
                en: { desc: "Hosting Platform" },
                es: { desc: "Plataforma de Hospedaje" },
            },
        ],
    },
    {
        en: { area: "Tools & Workflow" },
        es: { area: "Herramientas y Flujo de Trabajo" },
        skills: [
            {
                imgSrc: "/images/skills/git.svg",
                label: "Git",
                en: { desc: "Version Control" },
                es: { desc: "Control de Versiones" },
            },
            {
                imgSrc: "/images/skills/github.svg",
                label: "GitHub",
                en: { desc: "Code Hosting" },
                es: { desc: "Hospedaje de Código" },
            },
            {
                imgSrc: "/images/skills/trello.svg",
                label: "Trello",
                en: { desc: "Project Management" },
                es: { desc: "Gestión de Proyectos" },
            },
            {
                imgSrc: "/images/skills/slack.svg",
                label: "Slack",
                en: { desc: "Communication" },
                es: { desc: "Comunicación" },
            },
        ],
    },
];