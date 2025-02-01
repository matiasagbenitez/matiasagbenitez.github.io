import { useState, useContext } from "react";
import { softSkills } from "../../data/soft-skills";
import { LangContext } from "../../context/lang";

export const SoftSkills = () => {
  const { lang } = useContext(LangContext);
  const [allOpen, setAllOpen] = useState(false); // Estado global para abrir/cerrar todos

  return (
    <section className="py-3">
      <div className="container">
        <div className="flex justify-between items-center">
          <h2 className="headline-2">{softSkills[lang].title}</h2>
          <button
            className="btn text-zinc-400 hover:text-zinc-100"
            onClick={() => setAllOpen(!allOpen)}
          >
            {allOpen ? (
              <i className="fa-solid fa-chevron-up"></i>
            ) : (
              <i className="fa-solid fa-chevron-down"></i>
            )}
          </button>
        </div>

        <p className="text-zinc-400 mt-3 mb-5">{softSkills[lang].subtitle}</p>

        <ul className="list-disc list-inside bg-zinc-50/5 py-3 px-5 rounded-lg">
          <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {softSkills[lang].skills.map((item, key) => (
              <li key={key} className="">
                {item}
              </li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};
