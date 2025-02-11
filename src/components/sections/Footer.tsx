import { Socials } from "../Socials";

export const Footer = () => {
  return (
    <footer className="bg-zinc-900 py-3">
      <div className="container">
        <div className="flex items-center justify-between py-6">

          <Socials />

          <p className="text-zinc-500 text-sm reveal-up">
            &copy; 2025 <span className="text-zinc-200">matiasagbenitez</span>
          </p>
        </div>
      </div>
    </footer>
  );
};
