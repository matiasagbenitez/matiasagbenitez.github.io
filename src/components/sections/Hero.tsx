import { useContext } from "react";
import { heroData } from "../../data/hero";
import { LangContext } from "../../context/lang";
import { Socials } from "../Socials";

export const Hero = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id="home" className="pt-24 lg:pt-28 pb-8">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5 text-zinc-400 tracking-wide">
              <span className="relative w-3 h-3 rounded-full bg-emerald-400 me-1">
                <span className="absolute inset-0 rounded-full bg-emerald-400 animate-ping"></span>
              </span>
              {heroData[lang].availableForWork}
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold my-8">
            {heroData[lang].title}{" "}
            <b className="text-stone-400">{heroData[lang].name}</b>
          </h2>

          <p className="font-bold mb-0">
            <b className="text-gray-400">{heroData[lang].subtitle}</b>
          </p>

          <div className="mt-6 mb-12">
            <p className="text-lg lg:text-lg text-zinc-400">
              {heroData[lang].content?.map(({ text, block, bold }, key) => (
                <span key={key} className={block ? "block mb-4" : ""}>
                  {bold ? <b key={key}>{text}</b> : text}
                </span>
              ))}
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <button
              className="btn btn-primary py-2 px-4 rounded-xl"
              onClick={() => window.open(`/docs/CV-Benitez-Matias-${lang}.pdf`, "_blank")}
            >
              {heroData[lang].download}
              <i className="fas fa-download text-lg"></i>
            </button>

            <Socials />
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-stone-400 via-25% via-stone-400/40 to-65% rounded-[60px] overflow-hidden">
            <img
              src="/images/hero.png"
              width={656}
              height={800}
              alt="Henry Clark"
              className="w-full"
            />
          </figure>
        </div>
      </div>
    </section>
  );
};
