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
    youtubeLink?: string;
    resourceLink?: string;
}

export const projectsList: Project[] = [
    // SJM
    {
        imgSrc: "/images/projects/sjm.png",
        title: "Bespoke Web ERP",
        subtitle: {
            en: "A fully customized ERP for managing bespoke furniture production.",
            es: "Un ERP web personalizado para gestionar la producción de muebles a medida.",
        },
        tags: ["typescript", "expressjs", "mysql", "react", "s3", "cloudflare", "nodejs", "bootstrap", "axios", "webhooks", "slack", "nginx", "ubuntu"],
        description: {
            en: [
                "This project was developed with the goal of learning how to use the OpenAI API. It is a web application that allows interaction with different OpenAI language models and visualizes the generated responses. React.js was used for the frontend and NestJS for the backend.",
                "Among its features, it includes a spell checker that helps improve the writing of entered texts. It also has a topic comparator, which analyzes the pros and cons of one or more topics, with the option to visualize the results in real-time via streaming. Additionally, it offers a text translator, facilitating text conversion between different languages.",
                "The application enables content generation in various formats, including a text-to-audio generator and an audio-to-text generator, efficiently converting information between different mediums. It also incorporates an image generator, an image variation function to create alternative versions from an original, and an image editing tool through an interactive editor.",
                "As an additional feature, it integrates a virtual assistant that answers general questions and provides information on various topics. The assistant can maintain a fluent conversation and respond to queries accurately, thanks to OpenAI's text generation capabilities."
            ],
            es: [
                "Este proyecto fue desarrollado con el objetivo de aprender a utilizar la API de OpenAI. Se trata de una aplicación web que permite interactuar con distintos modelos de lenguaje de OpenAI y visualizar las respuestas generadas. Para su desarrollo, se utilizaron React.js en el frontend y NestJS en el backend.",
                "Entre sus funcionalidades, cuenta con un corrector ortográfico que permite mejorar la escritura de los textos ingresados. También incluye un comparador de temas, que analiza los pros y contras de uno o más temas, con la opción de visualizar los resultados en tiempo real mediante streaming. Además, ofrece un traductor de texto, facilitando la conversión de textos entre distintos idiomas.",
                "La aplicación permite la generación de contenido en distintos formatos, incluyendo un generador de audio a partir de texto y un generador de texto a partir de audio, que convierten información de un medio a otro de manera eficiente. También incorpora un generador de imágenes, una función de variación de imágenes para crear versiones alternativas a partir de una original, y una herramienta de edición de imágenes a través de un editor interactivo.",
                "Como característica adicional, integra un asistente virtual que responde a preguntas generales y proporciona información sobre distintos temas. El asistente es capaz de mantener una conversación fluida y responder a consultas de manera precisa, gracias a la capacidad de generación de texto de OpenAI.",
            ],
        },
        githubLink: "https://github.com/matiasagbenitez/openai-assistant",
    },
    // OpenAI Assistant
    {
        imgSrc: "/images/projects/openai.png",
        title: "OpenAI Assistant",
        subtitle: {
            en: "Application that integrates the OpenAI API to generate different types of output.",
            es: "Aplicación que integra la API de OpenAI para generar distintos tipos de salida.",
        },
        tags: ["typescript", "nestjs", "react", "tailwindcss", "axios"],
        description: {
            en: [
                "This project was developed with the goal of learning how to use the OpenAI API. It is a web application that allows interaction with different OpenAI language models and visualizes the generated responses. React.js was used for the frontend and NestJS for the backend.",
                "Among its features, it includes a spell checker that helps improve the writing of entered texts. It also has a topic comparator, which analyzes the pros and cons of one or more topics, with the option to visualize the results in real-time via streaming. Additionally, it offers a text translator, facilitating text conversion between different languages.",
                "The application enables content generation in various formats, including a text-to-audio generator and an audio-to-text generator, efficiently converting information between different mediums. It also incorporates an image generator, an image variation function to create alternative versions from an original, and an image editing tool through an interactive editor.",
                "As an additional feature, it integrates a virtual assistant that answers general questions and provides information on various topics. The assistant can maintain a fluent conversation and respond to queries accurately, thanks to OpenAI's text generation capabilities."
            ],
            es: [
                "Este proyecto fue desarrollado con el objetivo de aprender a utilizar la API de OpenAI. Se trata de una aplicación web que permite interactuar con distintos modelos de lenguaje de OpenAI y visualizar las respuestas generadas. Para su desarrollo, se utilizaron React.js en el frontend y NestJS en el backend.",
                "Entre sus funcionalidades, cuenta con un corrector ortográfico que permite mejorar la escritura de los textos ingresados. También incluye un comparador de temas, que analiza los pros y contras de uno o más temas, con la opción de visualizar los resultados en tiempo real mediante streaming. Además, ofrece un traductor de texto, facilitando la conversión de textos entre distintos idiomas.",
                "La aplicación permite la generación de contenido en distintos formatos, incluyendo un generador de audio a partir de texto y un generador de texto a partir de audio, que convierten información de un medio a otro de manera eficiente. También incorpora un generador de imágenes, una función de variación de imágenes para crear versiones alternativas a partir de una original, y una herramienta de edición de imágenes a través de un editor interactivo.",
                "Como característica adicional, integra un asistente virtual que responde a preguntas generales y proporciona información sobre distintos temas. El asistente es capaz de mantener una conversación fluida y responder a consultas de manera precisa, gracias a la capacidad de generación de texto de OpenAI.",
            ],
        },
        githubLink: "https://github.com/matiasagbenitez/openai-assistant",
    },
    // React Query Store
    {
        imgSrc: "/images/projects/react-query-store.png",
        title: "TanstackQuery Store",
        subtitle: {
            en: "TanstackQuery project to manage queries, cache, mutations and subscriptions.",
            es: "TanstackQuery para gestionar consultas, caché, mutaciones y suscripciones.",
        },
        tags: ["typescript", "react", "tanstack", "tailwindcss", "axios"],
        description: {
            en: [
                "This project is designed to explore the functionality of the TanstackQuery library. It features a simple application that fetches data from a JSON server and displays it in a list. Users can click on items to view additional details. The application leverages TanstackQuery to efficiently handle data fetching and caching.",
                "It showcases key features such as actions (queries, mutations, and subscriptions), keys, variables, functions, query invalidation, refetching, retries, and pagination.",
                "Additionally, it integrates TanstackQuery Devtools for inspecting the cache and queries and utilizes the useQueryClient hook to manually invalidate and refetch queries. The application also demonstrates the useMutation hook for performing mutations and employs optimistic updates to update the cache before a mutation is resolved, including handling optimistic success and error states."
            ],
            es: [
                "Este proyecto está diseñado para explorar la funcionalidad de la biblioteca TanstackQuery. Consiste en una aplicación sencilla que obtiene datos de un servidor JSON y los muestra en una lista. Los usuarios pueden hacer clic en los elementos para ver más detalles. La aplicación aprovecha TanstackQuery para gestionar de manera eficiente la obtención y el almacenamiento en caché de los datos.",
                "Muestra características clave como acciones (consultas, mutaciones y suscripciones), claves, variables, funciones, invalidación de consultas, actualización de datos, reintentos y paginación.",
                "Además, integra las Devtools de TanstackQuery para inspeccionar la caché y las consultas, y utiliza el hook useQueryClient para invalidar manualmente y volver a obtener los datos. La aplicación también demuestra el uso del hook useMutation para realizar mutaciones y emplea actualizaciones optimistas para modificar la caché antes de que se resuelva una mutación, manejando tanto el éxito como el error de forma optimista."
            ]

        },
        projectLink: "",
        githubLink: "https://github.com/matiasagbenitez/react-query-store",
    },
    // TanstackQuery Issues
    {
        imgSrc: "/images/projects/react-query-issues.png",
        title: "TanstackQuery Issues",
        subtitle: {
            en: "TanstackQuery for managing GitHub issues with caching, pagination, and filtering.",
            es: "TanstackQuery para gestionar issues de GitHub con caché, paginación y filtros.",
        },
        tags: ["typescript", "react", "tanstack", "tailwindcss", "axios"],
        description: {
            en: [
                "This repository is created to explore the core features of TanstackQuery. It fetches GitHub issues from the Facebook repository and displays them in a list with filterable navigation and detailed views. By using prefetchQuery and setQueryData to manage cache updates, it efficiently handles complex object states while supporting pagination and infinite scrolling for an enhanced user experience. This project is perfect for learning how to leverage Tanstack Query’s advanced data management capabilities.",
                "The project also includes a helper function called sleep(), which simulates an API delay. This is useful for testing the loading state of the application. By default, the delay is set to 2 seconds. The goal of this feature is to mimic real-world scenarios where API responses take time, showcasing how the app utilizes caching to display 'fresh' data while new data is being fetched if the cache is stale."
            ],
            es: [
                "Este repositorio está diseñado para explorar las características principales de TanstackQuery. Obtiene los issues de GitHub desde el repositorio de Facebook y los muestra en una lista con navegación filtrable y vistas detalladas. Usando prefetchQuery y setQueryData para gestionar las actualizaciones de la caché, maneja de manera eficiente estados complejos de objetos, además de soportar paginación y desplazamiento infinito para mejorar la experiencia de usuario. Este proyecto es ideal para aprender a aprovechar las capacidades avanzadas de gestión de datos de TanstackQuery.",
                "El proyecto también incluye una función auxiliar llamada sleep(), que simula un retraso en la respuesta de la API. Esto es útil para probar el estado de carga de la aplicación. Por defecto, el retraso está configurado en 2 segundos. El objetivo de esta característica es replicar escenarios reales en los que las respuestas de la API tardan un tiempo, demostrando cómo la aplicación utiliza la caché para mostrar datos 'frescos' mientras obtiene nuevos datos si la caché está desactualizada."
            ]
        },
        projectLink: "",
        githubLink: "https://github.com/matiasagbenitez/react-query-issues",
    },
    // Github Webhooks
    {
        imgSrc: "/images/projects/github-webhooks.png",
        title: "GitHub Webhooks",
        subtitle: {
            en: "GitHub webhook server sends repository event details to Discord server.",
            es: "Servidor de webhook de GitHub envía eventos del repositorio a Discord.",
        },
        tags: ["nodejs", "expressjs", "webhooks", "discord", "github"],
        description: {
            en: [
                "Developed using Node.js with Express.js, this project focuses on creating a server that listens to and handles 'star' and 'issues' events in a GitHub repository. The server captures relevant information and relays it to a Discord server, providing detailed insights into the nature of the events.",
                "This project provides a practical use case for integrating GitHub's webhooks with Discord, allowing real-time notifications of important repository activity. By leveraging the power of webhooks, it automates the process of monitoring repository changes, helping users stay informed without manually checking updates."
            ],
            es: [
                "Desarrollado con Node.js y Express.js, este proyecto se centra en crear un servidor que escucha y maneja los eventos 'star' y 'issues' en un repositorio de GitHub. El servidor captura información relevante y la transmite a un servidor de Discord, proporcionando detalles sobre la naturaleza de los eventos.",
                "Este proyecto ofrece un caso práctico para integrar los webhooks de GitHub con Discord, permitiendo notificaciones en tiempo real sobre actividades importantes del repositorio. Aprovechando el poder de los webhooks, automatiza el proceso de monitorear cambios en el repositorio, ayudando a los usuarios a mantenerse informados sin tener que revisar manualmente las actualizaciones."
            ]
        },
        projectLink: "",
        githubLink: "https://github.com/matiasagbenitez/github-webhooks",
    },
    // Scrotify
    {
        imgSrc: "/images/projects/scrotify.png",
        title: "Scrotify",
        subtitle: {
            en: "A simple Spotify clone with basics real-time playback controls.",
            es: "Un clon de Spotify con controles de reproducción en tiempo real básicos.",
        },
        tags: ["astro", "react", "svelte", "zustand", "tailwindcss"],
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
    // Mapify
    {
        imgSrc: "/images/projects/mapify.png",
        title: "Mapify",
        subtitle: {
            en: "App that integrates Mapbox to review Context API fundamentals.",
            es: "Aplicación que integra Mapbox para repasar fundamentos de Context API.",
        },
        tags: ["typescript", "react", "mapbox", "axios"],
        description: {
            en: [
                "Mapify is a web application that was developed quickly and easily to review fundamental concepts of React's Context API along with hooks like useReducer and useRef, using the mapbox API for map visualization. It allows location searches and marking points on the map, as well as the ability to create a route between two points.",
                "In upcoming versions, the plan is to add the functionality to save created routes and display them in a list. Additionally, custom markers will be created, and the possibility to create a route with multiple intermediate points will be added."
            ],
            es: [
                "Mapify es una aplicación web que fue desarrollada de manera rápida y sencilla para repasar conceptos fundamentales del Context API de React en conjunto con hooks como useReducer y useRef, a través de la API de mapbox para la visualización de mapas. Permite búsquedas de ubicaciones y marcado de puntos en el mapa, además de la posibilidad de crear una ruta entre dos puntos.",
                "En próximas versiones se planea agregar la funcionalidad de guardar las rutas creadas y visualizarlas en un listado. También crear marcadores personalizados y la posibilidad de crear una ruta con varios puntos intermedios.",
            ],
        },
        projectLink: "https://mapify-context.netlify.app/",
        githubLink: "https://github.com/matiasagbenitez/mapify-context"
    },
    // Gastos
    {
        imgSrc: "/images/projects/gastos.png",
        title: "Expense Manager",
        subtitle: {
            en: "Personal expense manager with categories, filters, and statistics.",
            es: "Gestor de gastos personal con categorías, filtros y estadísticas.",
        },
        tags: ["react", "vite"],
        description: {
            en: [
                "This React project is a personal expense manager created as a review exercise for the framework. It utilizes pure CSS with Normalize, localStorage, and basic React hooks such as useState and useEffect. Built with Vite, it provides a consistent and responsive user interface for managing personal finances.",
                "The project allows users to easily track their expenses, categorize them, and view their spending history. With the help of localStorage, the data persists even after page refreshes, offering a seamless experience. This project is a great way to practice React fundamentals while building a functional application."
            ],
            es: [
                "Este proyecto de React es un gestor de gastos personales creado como un ejercicio de repaso para el framework. Utiliza CSS puro con Normalize, localStorage y hooks básicos de React como useState y useEffect. Construido con Vite, ofrece una interfaz de usuario consistente y adaptable para gestionar las finanzas personales.",
                "El proyecto permite a los usuarios seguir fácilmente sus gastos, categorizarlos y ver su historial de gastos. Con la ayuda de localStorage, los datos persisten incluso después de actualizar la página, ofreciendo una experiencia continua. Este proyecto es una excelente manera de practicar los fundamentos de React mientras se construye una aplicación funcional."
            ]
        },
        projectLink: "https://controlgastospersonales-react.netlify.app/",
        githubLink: "https://github.com/matiasagbenitez/control-gastos"
    },
    // Elliotis
    {
        imgSrc: "/images/projects/elliotis.png",
        title: "Elliotis",
        subtitle: {
            en: "ELLIOTIS: software for managing pine plank production in sawmills.",
            es: "ELLIOTIS: software para gestionar la producción de machimbres.",
        },
        tags: ["php", "laravel", "mysql", "docker", "tailwindcss"],
        description: {
            en: [
                "ELLIOTIS is a software specifically developed for managing the production of pine planks in small and medium sawmills in the Misiones province. The system covers all stages of the production process, from the entry of raw materials (logs) to the final sale of finished packages. It manages both the purchase of raw materials from suppliers and the sale of finished products to end customers.",
                "The system includes three automated processes: 1) Log ordering; 2) Weather forecasting; 3) Task planning. Additionally, the system is highly customizable and allows the generation of reports, statistics, audits, and other features."
            ],
            es: [
                "ELLIOTIS es un software desarrollado específicamente para la gestión de producción de machimbres de pino en pequeños y medianos aserraderos de la provincia de Misiones. El sistema abarca todas las etapas del proceso productivo, desde el ingreso de la materia prima (rollos) hasta la venta final de los paquetes terminados. Gestiona tanto la compra de materia prima a los proveedores como la venta de productos terminados a los clientes finales.",
                "El sistema cuenta con tres procesos automatizados: 1) Encargue de rollos; 2) Previsión meteorológica; 3) Planificación de tareas. Además, el sistema es altamente parametrizable y permite generar reportes, estadísticas, auditorías y otras funcionalidades."
            ]
        },
        githubLink: "https://github.com/matiasagbenitez/elliotis-app",
        resourceLink: "https://drive.google.com/file/d/1eFhCm36fn_IVr9s7wUTpQd6AUvHK9TDH/view?usp=drive_link",
    },
];