import { useContext } from "react";
import { LangContext } from "../../context/lang";
import { aboutData, educationData } from "../../data/about";

export const About = () => {
  const { lang } = useContext(LangContext);

  return (
    <section id="about" className="py-6">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-zinc-800 p-6 rounded-lg reveal-up">
          <div>
            <h2 className="headline-2">{aboutData[lang].title}</h2>
            <div className="mt-4">
              {aboutData[lang].content.map((text, key) => (
                <p key={key} className="text-zinc-300 mt-4">
                  {text}
                </p>
              ))}
            </div>
          </div>

          <div className="text-start lg:text-right">
            <h2 className="headline-2">{educationData[lang].title}</h2>
            <div className="mt-4">
              {educationData[lang].content.map((text, key) => (
                <div key={key} className="mb-4">
                  <h3 className="headline-3 text-zinc-400 font-bold text-sm">
                    {text.years}
                  </h3>
                  <p className="font-bold">{text.title}</p>
                  <p className="text-sm font-light">{text.institution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
