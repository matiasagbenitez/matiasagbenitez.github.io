import { useContext, useRef, useEffect } from "react";
import { LangContext } from "../context/lang";

interface LangProps {
  langOpen: boolean;
}

export const Languages = ({ langOpen }: LangProps) => {
  const { lang, setLang } = useContext(LangContext);
  const lastActiveButton = useRef<HTMLButtonElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const flags = [
    {
      label: "es",
      emoji: "🇪🇦",
      className: "nav-link",
      title: "Español",
      ref: lastActiveButton,
    },
    {
      label: "en",
      emoji: "🇺🇸",
      className: "nav-link",
      title: "English",
    },
  ];

  const initActiveBox = () => {
    if (activeBox.current && lastActiveButton.current) {
      activeBox.current.style.top = `${lastActiveButton.current.offsetTop}px`;
      activeBox.current.style.left = `${lastActiveButton.current.offsetLeft}px`;
      activeBox.current.style.width = `${lastActiveButton.current.offsetWidth}px`;
      activeBox.current.style.height = `${lastActiveButton.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  const handleLanguageChange = (
    label: "en" | "es",
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setLang(label);

    if (lastActiveButton.current) {
      lastActiveButton.current.classList.remove("active");
    }

    event.currentTarget.classList.add("active");
    lastActiveButton.current = event.currentTarget;

    if (activeBox.current) {
      activeBox.current.style.top = `${event.currentTarget.offsetTop}px`;
      activeBox.current.style.left = `${event.currentTarget.offsetLeft}px`;
      activeBox.current.style.width = `${event.currentTarget.offsetWidth}px`;
      activeBox.current.style.height = `${event.currentTarget.offsetHeight}px`;
    }
  };

  return (
    <nav className={`lang-navbar ${langOpen ? "active" : ""}`}>
      {flags.map(({ label, emoji, className, title, ref }, index) => (
        <button
          key={index}
          title={title}
          ref={ref}
          className={`${className} ${lang === label ? "active" : ""}`}
          onClick={(event) => handleLanguageChange(label as "en" | "es", event)}
        >
          {emoji}
        </button>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
