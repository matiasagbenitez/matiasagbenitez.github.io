import { useRef, useEffect, useContext } from "react";
import { LangContext } from "../context/lang";

interface NavbarProps {
  navOpen: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ navOpen }) => {
  const { lang } = useContext(LangContext);

  const lastActiveLink = useRef<HTMLAnchorElement | null>(null);
  const activeBox = useRef<HTMLDivElement | null>(null);

  const sections = useRef<NodeListOf<HTMLElement> | null>(null);

  const initActiveBox = () => {
    if (activeBox.current && lastActiveLink.current) {
      activeBox.current.style.top = `${lastActiveLink.current.offsetTop}px`;
      activeBox.current.style.left = `${lastActiveLink.current.offsetLeft}px`;
      activeBox.current.style.width = `${lastActiveLink.current.offsetWidth}px`;
      activeBox.current.style.height = `${lastActiveLink.current.offsetHeight}px`;
    }
  };

  useEffect(() => {
    initActiveBox();
    window.addEventListener("resize", initActiveBox);
    return () => {
      window.removeEventListener("resize", initActiveBox);
    };
  }, []);

  useEffect(() => {
    initActiveBox();
  }, [lang]);

  const handleScroll = () => {
    sections.current = document.querySelectorAll("section");
    let currentSection = "";
    
    sections.current.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= sectionTop - sectionHeight / 3) {
        currentSection = section.id;
      }
    });

    const currentLink = document.querySelector(`a[href="#${currentSection}"]`) as HTMLAnchorElement;
    if (currentLink && currentLink !== lastActiveLink.current) {
      lastActiveLink.current?.classList.remove("active");
      currentLink.classList.add("active");
      lastActiveLink.current = currentLink;
      initActiveBox();
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navItems = [
    { label: { en: "Home", es: "Inicio" }, link: "#home", className: "nav-link active", ref: lastActiveLink },
    { label: { en: "About", es: "Sobre mí" }, link: "#about", className: "nav-link" },
    { label: { en: "Skills", es: "Habilidades" }, link: "#skills", className: "nav-link" },
  ];

  return (
    <nav className={`navbar ${navOpen ? "active" : ""}`}>
      {navItems.map(({ label, link, className, ref }, key) => (
        <a
          href={link}
          key={key}
          ref={ref as React.RefObject<HTMLAnchorElement>}
          className={className}
          onClick={(event) => {
            event.preventDefault();
            document.querySelector(link)?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {label[lang]}
        </a>
      ))}
      <div className="active-box" ref={activeBox}></div>
    </nav>
  );
};
