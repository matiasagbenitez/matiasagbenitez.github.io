import { LangType } from '../context/lang/LangProvider';

interface ContactInterface {
    title: string;
    subtitle: string;
    form: {
        name: {
            label: string;
            placeholder: string;
        }
        email: {
            label: string;
            placeholder: string;
        }
        message: {
            label: string;
            placeholder: string;
        }
        button: string;
    };
}

export const contactDictionary: Record<LangType, ContactInterface> = {
    en: {
        title: "Contact me for collaboration",
        subtitle: "Reach out today to discuss your project needs and start collaborating on something amazing!",
        form: {
            name: {
                label: "Name",
                placeholder: "John Doe",
            },
            email: {
                label: "Email",
                placeholder: "johndoe@example.com",
            },
            message: {
                label: "Message",
                placeholder: "Hi! I have a proposal for you...",
            },
            button: "Send message",
        },
    },
    es: {
        title: "Contáctame para colaborar",
        subtitle: "Contáctame hoy para discutir tus necesidades de proyecto y comenzar a colaborar en algo increíble!",
        form: {
            name: {
                label: "Nombre",
                placeholder: "Juan Pérez",
            },
            email: {
                label: "Email",
                placeholder: "juanperez@example.com",
            },
            message: {
                label: "Mensaje",
                placeholder: "Hola! Te tengo una propuesta...",
            },
            button: "Enviar mensaje",
        },
    },
};
