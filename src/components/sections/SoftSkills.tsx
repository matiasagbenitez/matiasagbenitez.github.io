import { useContext } from "react";
import { softSkills } from "../../data/soft-skills";
import { LangContext } from "../../context/lang";

export const SoftSkills = () => {
  const { lang } = useContext(LangContext);

  return (
    <section id="skills" className="py-6">
      <div className="container">
        <h2 className="headline-2">{softSkills[lang].title}</h2>

        <p className="text-zinc-400 mt-3 mb-5">{softSkills[lang].subtitle}</p>

        <ul>
          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
            {softSkills[lang].skills.map((item, key) => (
              <li key={key}>{item}</li>
            ))}
          </div>
        </ul>
      </div>
    </section>
  );
};
