import { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { Project } from "../data/projects";
import { LangContext } from "../context/lang";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  const { lang } = useContext(LangContext);
  const [showModal, setShowModal] = useState(false);
  const {
    imgSrc,
    title,
    subtitle,
    tags,
    description,
    projectLink,
    githubLink,
    resourceLink,
  } = project;

  return (
    <>
      <div className="relative p-4 rounded-2xl bg-zinc-800 hover:bg-zinc-700/50 active:bg-zinc-700/60 ring-1 ring-inset ring-zinc-50/5 transition-colors duration-300">
        <figure
          className="img-box aspect-square rounded-lg mb-4 relative hover:cursor-pointer"
          onClick={() => setShowModal(true)} // El clic sigue aquí
        >
          <img src={imgSrc} alt={title} loading="lazy" className="img-cover" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            <span className="material-symbols-rounded text-4xl text-white">
              visibility
            </span>
          </div>
        </figure>

        <div className="flex items-center justify-between gap-4">
          <div>
            <h3 className="title-1">{title}</h3>

            {subtitle && <p className="text-zinc-400 mb-2">{subtitle[lang]}</p>}

            {tags && (
              <div className="flex flex-wrap gap-2 mt-2">
                {tags.slice(0, 5).map((tag, index) => (
                  <figure
                    className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-2 group-hover:bg-zinc-900 transition-colors"
                    key={index}
                    title={tag}
                  >
                    <img
                      src={`/images/skills/${tag}.svg`}
                      width={24}
                      height={24}
                      alt={tag}
                    />
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal con animación */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowModal(false)}
          >
            <motion.div
              className="bg-zinc-800 p-6 rounded-lg shadow-lg w-[90%] max-w-[700px] relative overflow-y-auto"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e: any) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-gray-600"
                onClick={() => setShowModal(false)}
              >
                ✖
              </button>

              <h1 className="text-3xl font-bold mb-3">{title}</h1>

              {tags && (
                <div className="flex flex-wrap gap-2 my-3">
                  {tags.map((tag, index) => (
                    <figure
                      className="bg-zinc-700/50 rounded-lg overflow-hidden w-9 h-9 p-2 group-hover:bg-zinc-900 transition-colors"
                      key={index}
                      title={tag}
                    >
                      <img
                        src={`/images/skills/${tag}.svg`}
                        width={24}
                        height={24}
                        alt={tag}
                      />
                    </figure>
                  ))}
                </div>
              )}

              {description && (
                <div className="text-zinc-400 mb-4 text-sm lg:text-base max-h-[550px] overflow-y-auto">
                  {description[lang].map((paragraph, index) => (
                    <p key={index} className="mb-2">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}

              <div className="mt-4 flex justify-end gap-2">
                <button
                  className="bg-zinc-50/5 px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-50/10"
                  onClick={() => setShowModal(false)}
                >
                  {lang === "en" ? "Close" : "Cerrar"}
                </button>

                {resourceLink && (
                  <a
                    href={resourceLink}
                    target="_blank"
                    className="bg-zinc-50/5 px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-50/10"
                  >
                    <i className="fa-solid fa-paperclip me-2"></i>
                    {lang === "en" ? "Resource" : "Recurso"}
                  </a>
                )}

                {githubLink && (
                  <a
                    href={githubLink}
                    target="_blank"
                    className="bg-zinc-50/5 px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-50/10"
                  >
                    <i className="fa-brands fa-github me-2"></i>
                    {lang === "en" ? "Repository" : "Repositorio"}
                  </a>
                )}

                {projectLink && (
                  <a
                    href={projectLink}
                    target="_blank"
                    className="bg-zinc-50/5 px-4 py-2 rounded-lg text-zinc-400 hover:bg-zinc-50/10"
                  >
                    <i className="fa-solid fa-globe me-2"></i>
                    {lang === "en" ? "Project" : "Proyecto"}
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
