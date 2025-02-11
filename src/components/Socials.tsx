import { heroHrefs } from "../data/hero";

export const Socials = () => {
  return (
    <div className="flex items-center gap-2">
      {heroHrefs.map(({ label, href, icon, blank, showLabel }, key) => (
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
  );
};
