import { useContext } from "react";
import { ProjectCard } from "../ProjectCard";
import { LangContext } from "../../context/lang";
import { projectsList, projectsTitles } from "../../data/projects";

export const Projects = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id="projects" className="py-6">
      <div className="container">
        <h2 className="headline-2 mb-3 reveal-up">{projectsTitles[lang].title}</h2>

        <p className="text-zinc-400 mt-3 mb-5">{projectsTitles[lang].subtitle}</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {projectsList.map((project, key) => (
            <ProjectCard key={key} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
