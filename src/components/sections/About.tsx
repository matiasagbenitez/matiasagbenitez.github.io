const aboutItems = [
  {
    label: "Proyectos completados",
    number: 15,
  },
  {
    label: "Años de experiencia",
    number: 2,
  },
  {
    label: "Certificaciones",
    number: 10,
  },
];

export const About = () => {
  return (
    <section id="about" className="py-8">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
            ¡Hola! Soy Matías Agustín Benítez, Analista en Sistemas de
            Computación y Licenciado en Sistemas de Información, graduado de la
            Universidad Nacional de Misiones 🇦🇷. Cuento con experiencia en el
            desarrollo de aplicaciones web completas utilizando distintas
            tecnologías modernas.
          </p>
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-xl ">
            Me considero un profesional comprometido con la calidad y la
            excelencia, buscando contribuir en equipos de IT donde pueda seguir
            creciendo y aportar mis habilidades. Siempre busco definir metas
            claras y asegurar calidad en mi trabajo.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
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
