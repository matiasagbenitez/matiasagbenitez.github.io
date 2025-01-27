interface HrefButtonInterface {
  label: string;
  href: string;
  icon: string;
  blank?: boolean;
  showLabel?: boolean;
}

const hrefs: HrefButtonInterface[] = [
  {
    label: "Email",
    href: "mailto:matiasagbenitez@gmail.com",
    blank: false,
    icon: "fa-regular fa-envelope",
  },
  {
    label: "GitHub",
    href: "https://github.com/matiasagbenitez",
    blank: true,
    icon: "fa-brands fa-github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/matiasagbenitez/",
    blank: true,
    icon: "fa-brands fa-linkedin",
  },
  {
    label: "Scroll down",
    href: "#about",
    blank: false,
    icon: "fa-solid fa-arrow-down",
  },
];

export const Hero = () => {
  return (
    <section id="home" className="pt-28 lg:pt-32 pb-10">
      <div className="container items-center lg:grid lg:grid-cols-2 lg:gap-10">
        <div>
          <span className="text-sky-400 lg:text-lg tracking-wide">
            Bienvenido a mi portfolio!
          </span>

          <h2 className="text-4xl lg:text-6xl font-bold my-8">
            Hola! Mi nombre es <b className="text-sky-400">Matías.</b>
          </h2>

          <div className="my-10">
            <p className="text-lg lg:text-xl text-zinc-400 my-8">
              Licenciado en Sistemas de Información.{" "}
              <b className="text-sky-400">
                Desarrollador web full stack en la nube
              </b>{" "}
              con experiencia en el desarrollo de soluciones completas:
              planificación, análisis, diseño, desarrollo, pruebas e
              implementación.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8">
            <button
              className="btn btn-primary py-2 px-4 rounded-xl"
              onClick={() => window.open("/docs/cv-es.pdf", "_blank")}
            >
              Download CV
              <i className="fas fa-download text-lg"></i>
            </button>

            <div className="flex items-center gap-3">
              {hrefs.map(({ label, href, icon, blank, showLabel }, key) => (
                <a
                  key={key}
                  href={href}
                  title={label}
                  className="btn-outline py-2 px-4 rounded-xl"
                  target={blank ? "_blank" : "_self"}
                >
                  {showLabel && <span className="me-2">{label}</span>}
                  <i className={icon + " text-lg"}></i>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="hidden lg:block">
          <figure className="w-full max-w-[480px] ml-auto bg-gradient-to-t from-sky-400 via-25% via-sky-400/40 to-65% rounded-[60px] overflow-hidden">
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
