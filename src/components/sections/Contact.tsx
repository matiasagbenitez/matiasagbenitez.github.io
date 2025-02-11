import { useContext } from "react";
import { LangContext } from "../../context/lang";
import { contactDictionary } from "../../data/contact";

export const Contact = () => {
  const { lang } = useContext(LangContext);
  const { title, subtitle, form } = contactDictionary[lang];

  return (
    <section id="contact" className="pt-10 pb-6">
      <div className="container lg:grid lg:grid-cols-2 lg:items-stretch">
        <div className="mb-12 lg:mb-0 lg:flex lg:flex-col">
          <h2 className="headline-2 lg:max-w-[12ch] reveal-up">{title}</h2>

          <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch] lg:max-w-[30ch] reveal-up">
            {subtitle}
          </p>
        </div>

        <form
          action="https://getform.io/f/bejrydja"
          method="POST"
          className="xl:pl-10 2xl:pl-20"
        >
          <div className="md:grid md:items-center md:grid-cols-2 md:gap-2">
            <div className="mb-4">
              <label htmlFor="name" className="label reveal-up">
                {form.name.label}
              </label>

              <input
                type="text"
                name="name"
                id="name"
                autoComplete="name"
                required
                placeholder={form.name.placeholder}
                className="text-field reveal-up"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="label reveal-up">
                {form.email.label}
              </label>

              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                required
                placeholder={form.email.placeholder}
                className="text-field reveal-up"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="message" className="label reveal-up">
              {form.message.label}
            </label>

            <textarea
              name="message"
              id="message"
              placeholder={form.message.placeholder}
              required
              className="text-field resize-y min-h-32 max-h-80 reveal-up"
            ></textarea>
          </div>

          <button
            type="submit"
            className="btn btn-primary [&]:max-w-full w-full justify-center reveal-up"
          >
            {form.button}
          </button>
        </form>
      </div>
    </section>
  );
};
