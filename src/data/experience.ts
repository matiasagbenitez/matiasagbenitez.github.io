import { LangType } from "../context/lang";

interface ExperienceDataInterface {
    position: string;
    company: string;
    lapse: string;
    items: string[];
    projects_label: string;
    features_label: string;
    tags_label: string;
    no_repo_text: string;
    projects: {
        title: string;
        favorite?: boolean;
        features: string[];
        tags: string[];
    }[];
    links?: {
        title: string;
        url: string;
    }[];

}

export const experienceData: Record<LangType, ExperienceDataInterface> = {
    es: {
        position: "Analista Funcional | Desarrollador Web Full Stack",
        company: "Freelance / Autónomo",
        lapse: "sep. 2023 - Actualidad",
        items: [
            "Análisis, diseño y desarrollo de aplicaciones web personalizadas con React, Node.js, Typescript y MySQL.",
            "Colaboración directa con clientes para definir requerimientos, proporcionando soluciones escalables y personalizadas.",
            "Gestión de bases de datos, almacenamiento en la nube e implementación de mecanismos de autenticación y autorización con JWT.",
            "Realización de pruebas unitarias y de integración, optimización de código y rendimiento de aplicaciones.",
            "Despliegue y configuración de servidores VPS con Ubuntu, entornos de producción seguros y configuración de SSL y Let's Encrypt.",
            "Capacitación de usuarios y soporte post-lanzamiento, resolución de incidentes y mantenimiento continuo de los sistemas."
        ],
        projects_label: "Proyectos destacados",
        features_label: "Características destacadas:",
        tags_label: "Tecnologías utilizadas:",
        no_repo_text: "Los repositorios de estos proyectos son privados y no están disponibles públicamente. Si deseas más información, no dudes en contactarme.",
        projects: [
            {
                title: "Plataforma de Gestión de Recursos Empresariales — Fábrica de Muebles «SJM»",
                favorite: true,
                features: [
                    "Gestión y seguimiento de proyectos, inventario y tareas",
                    "Organización de equipos y asignación de responsabilidades",
                    "Registro y control de garantías y reparaciones",
                    "Almacenamiento seguro de archivos en la nube",
                    "Planificación con Diagrama de Gantt y Tablero Kanban",
                    "Administración de usuarios, roles y permisos personalizados",
                    "Control de presupuestos, compras y proveedores",
                    "Generación de balances y reportes financieros detallados",
                    "Gestión de cuentas corrientes y movimientos en múltiples monedas",
                    "Manejo de materiales, productos y stock",
                    "Calendario de visitas y entregas a clientes",
                    "Análisis estadístico y generación de reportes avanzados",
                    "Integración con notificaciones en Slack vía Webhooks",
                    "Papelera de reciclaje con restauración de archivos",
                    "Configuración flexible y parametrización de la plataforma",
                    "Despliegue en VPS con Ubuntu Server, Nginx y SSL",
                    "Protección avanzada contra DDoS y ataques con Cloudflare"
                ],
                tags: ["typescript", "expressjs", "mysql", "react", "s3", "cloudflare", "nodejs", "bootstrap", "axios", "webhooks", "slack", "nginx", "ubuntu"],
            },
            {
                title: "Registro de Emprendedores y Productores — Municipalidad de San Vicente, Misiones, Argentina",
                features: [
                    "Registro y categorización de emprendimientos y productores locales",
                    "Registro de capacitaciones realizadas por los emprendedores",
                    "Ranking de emprendimientos y productores destacados",
                    "Registro de habilitaciones y permisos de funcionamiento",
                    "Registro de actividades económicas y productos elaborados",
                    "Repositorio de documentos y certificados digitales",
                    "Registro de loteos y parcelas de producción",
                    "Generación de reportes en PDF y exportación de datos a Excel",
                    "Registro de criterios evaluativos para emprendimientos",
                ],
                tags: ["typescript", "expressjs", "mysql", "react", "nodejs", "bootstrap", "axios"],
            },
            {
                title: "Registro Único Deportivo (RID) — Municipalidad de San Vicente, Misiones, Argentina",
                features: [
                    "Registro de deportistas, entrenadores y árbitros locales",
                    "Registro de disciplinas deportivas y categorías",
                    "Registro de entidades deportivas y clubes",
                    "Registro de competencias o eventos deportivos y sus resultados",
                    "Registro de instalaciones y espacios deportivos",
                    "Reportes y estadísticas de competencias y deportistas",
                    "Ranking de deportistas por disciplina, categoría, género y edad",
                    "Reportes PDF y exportación de datos a Excel",
                ],
                tags: ["javascript", "expressjs", "mysql", "react", "nodejs", "bootstrap", "axios"],
            },
        ],
    },
    en: {
        position: "Functional Analyst | Full Stack Web Developer",
        company: "Freelance / Self-employed",
        lapse: "sep. 2023 - Present",
        items: [
            "Analysis, design and development of custom web applications with React, Node.js, Typescript and MySQL.",
            "Direct collaboration with clients to define requirements, providing scalable and customized solutions.",
            "Database management, cloud storage and implementation of authentication and authorization mechanisms with JWT.",
            "Unit and integration testing, code optimization and application performance.",
            "Deployment and configuration of VPS servers with Ubuntu, secure production environments and SSL and Let's Encrypt configuration.",
            "User training and post-launch support, incident resolution and continuous system maintenance."
        ],
        projects_label: "Featured projects",
        features_label: "Key features:",
        tags_label: "Technologies used:",
        no_repo_text: "The repositories of these projects are private and are not publicly available. If you want more information, do not hesitate to contact me.",
        projects: [
            {
                title: "Enterprise Resource Planning Platform — «SJM» Furniture Factory",
                favorite: true,
                features: [
                    "Project, inventory and task management and tracking",
                    "Team organization and responsibilities assignment",
                    "Warranty and repair registration and control",
                    "Secure cloud file storage",
                    "Planning with Gantt Chart and Kanban Board",
                    "User, roles and custom permissions management",
                    "Budget, purchases and suppliers control",
                    "Detailed financial balances and reports generation",
                    "Management of accounts and movements in multiple currencies",
                    "Materials, products and stock management",
                    "Customer visits and deliveries calendar",
                    "Statistical analysis and advanced reports generation",
                    "Integration with Slack notifications via Webhooks",
                    "Recycle bin with file restoration",
                    "Flexible configuration and platform parameterization",
                    "Deployment on VPS with Ubuntu Server, Nginx and SSL",
                    "Advanced protection against DDoS and attacks with Cloudflare"
                ],
                tags: ["typescript", "expressjs", "mysql", "react", "s3", "cloudflare", "nodejs", "bootstrap", "axios", "webhooks", "slack", "nginx", "ubuntu"],
            },
            {
                title: "Entrepreneurs and Producers Registry — San Vicente Municipality, Misiones, Argentina",
                features: [
                    "Registration and categorization of local ventures and producers",
                    "Registration of trainings carried out by entrepreneurs",
                    "Ranking of outstanding ventures and producers",
                    "Registration of permits and operating licenses",
                    "Registration of economic activities and products elaborated",
                    "Repository of documents and digital certificates",
                    "Registration of subdivisions and production plots",
                    "PDF reports generation and data export to Excel",
                    "Registration of evaluative criteria for ventures",
                ],
                tags: ["typescript", "expressjs", "mysql", "react", "nodejs", "bootstrap", "axios"],
            },
            {
                title: "Sports Registry (RID) — San Vicente Municipality, Misiones, Argentina",
                features: [
                    "Registration of local athletes, coaches and referees",
                    "Registration of sports disciplines and categories",
                    "Registration of sports entities and clubs",
                    "Registration of sports competitions or events and their results",
                    "Registration of sports facilities and spaces",
                    "Reports and statistics of competitions and athletes",
                    "Athletes ranking by discipline, category, gender and age",
                    "PDF reports and data export to Excel",
                ],
                tags: ["javascript", "expressjs", "mysql", "react", "nodejs", "bootstrap", "axios"],
            },
        ],
    },
}