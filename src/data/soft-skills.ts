import { LangType } from '../context/lang/LangProvider';



interface SoftSkillsInterface {
    title: string;
    subtitle: string;
    skills: string[];
}

export const softSkills: Record<LangType, SoftSkillsInterface> = {
    en: {
        title: "Soft skills",
        subtitle: "These are some of the soft skills I possess and that can be useful in a team.",
        skills: ["Critical thinking", "Active listening and empathy", "Priority management", "Goal-setting", "Commitment to quality", "Adaptability", "Attention to detail", "Self-awareness", "Openness to learning"],

    },
    es: {
        title: "Habilidades blandas",
        subtitle: "Estas son algunas de las habilidades blandas que poseo y que pueden ser útiles en un equipo.",
        skills: ["Pensamiento crítico", "Escucha activa y empatía", "Gestión de prioridades", "Establecimiento de metas", "Compromiso con la calidad", "Adaptabilidad", "Atención al detalle", "Autoconocimiento", "Apertura al aprendizaje"],
    },
};
