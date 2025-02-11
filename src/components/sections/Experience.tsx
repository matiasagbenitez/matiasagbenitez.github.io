import { useContext, useEffect, useRef, useState } from "react";
import { experienceData } from "../../data/experience";
import { LangContext } from "../../context/lang";

export const Experience = () => {
  const { lang } = useContext(LangContext);
  const {
    company,
    position,
    lapse,
    projects_label,
    projects,
    items,
    features_label,
    tags_label,
    no_repo_text,
  } = experienceData[lang];
  return (
    <section id="experience" className="py-6">
      <div className="container ">
        <h2 className="headline-2">Experiencia laboral</h2>

        <div className="mt-4">
          <div className="flex flex-col gap-1">
            <strong className="text-lg underline">{position}</strong>
            <span>📍 {company}</span>
            <span>📅 {lapse}</span>
            <ul className="list-disc list-inside m-4">
              {items.map((task, key) => (
                <li key={key}>{task}</li>
              ))}
            </ul>
          </div>
          {projects && projects_label && (
            <>
              <p className="font-bold mb-4">✅ {projects_label}</p>
              {projects.map(({ title, features, tags, favorite }, key) => (
                <Accordion key={key} title={title} favorite={favorite}>
                  <div className="px-4">
                    <span>{features_label}</span>
                    <ul className="my-4 text-zinc-400 text-sm">
                      <div className="grid grid-cols-1 md:grid-cols-2">
                        {features.map((feature, key) => (
                          <li key={key}>{feature}</li>
                        ))}
                      </div>
                    </ul>

                    <span>{tags_label}</span>
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
                  </div>
                </Accordion>
              ))}
            </>
          )}
        </div>
        <p className="text-sm text-zinc-400">{no_repo_text}</p>
      </div>
    </section>
  );
};

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  favorite?: boolean; // Prop para marcar como favorito
  open?: boolean; // Prop para controlar si está abierto
}

const Accordion = ({
  title,
  children,
  favorite = false,
  open = false,
}: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open); // Estado local para manejar la apertura
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className="my-3">
      <div
        className={`flex justify-between items-center cursor-pointer py-2 px-4 bg-zinc-800 rounded-lg ${
          favorite ? "favorite-accordion" : ""
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className={`${favorite ? "text-amber-500" : ""}`}>{title}</h3>
        <span className="text-zinc-400">
          {isOpen ? (
            <i className="fa-solid fa-chevron-up text-xs"></i>
          ) : (
            <i className="fa-solid fa-chevron-down text-xs"></i>
          )}
        </span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : ""
            : "0px",
        }}
      >
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};
