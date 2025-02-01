import { useContext } from "react";
import { LangContext } from "../../context/lang";
import { aboutData } from "../../data/about";

export const About = () => {
  const { lang } = useContext(LangContext);

  return (
    <section id="about" className="py-8">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
            {aboutData[lang].text1}
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl">
            {aboutData[lang].text2}
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutData[lang].items.map(({ number, label }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>

                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/images/logo.svg"
              alt="Logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
