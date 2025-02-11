import { useContext, useState } from "react";
import { ProjectCard } from "../ProjectCard";
import { LangContext } from "../../context/lang";
import { projectsList, projectsTitles } from "../../data/projects";

const INITIAL_VISIBLE_PROJECTS = 4; // Número de proyectos a mostrar inicialmente

export const Projects = () => {
  const { lang } = useContext(LangContext);
  const [visibleCount, setVisibleCount] = useState(INITIAL_VISIBLE_PROJECTS);

  const handleShowMore = () => setVisibleCount(projectsList.length);

  return (
    <section id="projects" className="py-6">
      <div className="container">
        <h2 className="headline-2 mb-3 ">{projectsTitles[lang].title}</h2>
        <p className="text-zinc-400 mt-3 mb-5">
          {projectsTitles[lang].subtitle}
        </p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
          {projectsList.slice(0, visibleCount).map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>

        {visibleCount < projectsList.length && (
          <div className="flex justify-center mt-6">
            <button
              onClick={handleShowMore}
              className="btn btn-primary py-2 px-4 rounded-xl"
            >
              Ver más proyectos
            </button>
          </div>
        )}
      </div>
    </section>
  );
};
