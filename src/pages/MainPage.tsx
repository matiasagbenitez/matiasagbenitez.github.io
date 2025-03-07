import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

/**
 * Register gsap plugins
 */
gsap.registerPlugin(useGSAP, ScrollTrigger);
import {
  Header,
  Hero,
  Skills,
  SoftSkills,
  Projects,
  About,
  Experience,
  Contact,
  Footer,
} from "../components";

export const MainPage = () => {
  useGSAP(() => {
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element: any) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element,
          start: "-200 bottom",
          end: "bottom 80%",
          scrub: true,
        },
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
      });
    });
  });

  return (
    <ReactLenis root>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <SoftSkills />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </ReactLenis>
  );
};
