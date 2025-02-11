import { useState, useRef, useContext, useEffect } from "react";
import { items, skillsTitles } from "../../data/skills";
import { LangContext } from "../../context/lang";

export const Skills = () => {
  const { lang } = useContext(LangContext);
  const [allOpen, setAllOpen] = useState(false); // Estado global para abrir/cerrar todos

  return (
    <section className="py-6">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="headline-2">{skillsTitles[lang].title}</h2>
          <button
            className="btn text-zinc-400 hover:text-zinc-100"
            onClick={() => setAllOpen(!allOpen)}
          >
            {allOpen ? <i className="fa-solid fa-chevron-up"></i> : <i className="fa-solid fa-chevron-down"></i>}
          </button>
        </div>

        <p className="text-zinc-400 mt-3 mb-5">{skillsTitles[lang].subtitle}</p>

        {items.map((item, key) => (
          <Accordion
            key={key}
            title={item[lang].area}
            open={allOpen} // Pasar el estado global como prop
          >
            <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-4">
              {item.skills.map((skill, key) => (
                <div
                  key={key}
                  className="flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-3 hover:bg-zinc-800 transition-colors group"
                >
                  <figure className="bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors">
                    <img
                      src={skill.imgSrc}
                      width={32}
                      height={32}
                      alt={skill.label}
                    />
                  </figure>

                  <div>
                    <h3>{skill.label}</h3>
                    <p className="text-zinc-400 text-sm">{skill[lang].desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Accordion>
        ))}
      </div>
    </section>
  );
};

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  open?: boolean; // Prop para controlar si está abierto
}

const Accordion = ({ title, children, open = false }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(open); // Estado local para manejar la apertura
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <div className="my-3">
      <div
        className="flex justify-between items-center cursor-pointer py-2 px-4 bg-zinc-800 rounded-lg"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="headline-3">{title}</h3>
        <span className="text-zinc-400">{isOpen ? <i className="fa-solid fa-chevron-up text-xs"></i> : <i className="fa-solid fa-chevron-down text-xs"></i>}</span>
      </div>

      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-500"
        style={{
          maxHeight: isOpen
            ? contentRef.current?.scrollHeight
              ? `${contentRef.current.scrollHeight}px`
              : "1000px"
            : "0px",
        }}
      >
        <div className="mt-3">{children}</div>
      </div>
    </div>
  );
};
