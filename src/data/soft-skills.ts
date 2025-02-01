import { LangType } from '../context/lang/LangProvider';



interface SoftSkillsInterface {
    title: string;
    subtitle: string;
    skills: string[];
}

export const softSkills: Record<LangType, SoftSkillsInterface> = {
    en: {
        title: "Soft skills",
        subtitle: "Beyond technical skills, these are some of the soft skills I possess and that can be useful in your team.",
        skills: ["Discipline", "Critical thinking", "Active listening", "Empathy", "Priority management", "Goal-setting", "Commitment to quality", "Adaptability", "Attention to detail", "Self-awareness", "Openness to learning"],

    },
    es: {
        title: "Habilidades blandas",
        subtitle: "Más allá de las habilidades técnicas, estas son algunas de las habilidades blandas que poseo y que pueden ser útiles en tu equipo.",
        skills: ["Disciplina", "Pensamiento crítico", "Escucha activa", "Empatía", "Gestión de prioridades", "Establecimiento de metas", "Compromiso con la calidad", "Adaptabilidad", "Atención al detalle", "Autoconocimiento", "Apertura al aprendizaje"],
    },
};
