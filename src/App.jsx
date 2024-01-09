//importing the router dependencies
import LandingPage from './components/LandingPage';
import AboutPage from './components/AboutPage';
import ExperiencePage from './components/ExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import SkillsPage from './components/SkillsPage';
import ContactMePage from './components/ContactMePage';
import NavBar from './components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import '../src/app.scss';
import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import EducationPage from './components/EducationPage';
import Footer from './components/Footer';




const App = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    // console.log(container);
  };

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "#fff",
        },
      },
      fullScreen: {
        enable: true,
        zIndex: -1
      },
      style: {
        position: 'absolute'
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "grab",
          },
          "resize": true
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          grab: {
            distance: 150,
          }
        },
      },
      particles: {
        color: {
          value: "#0984e3",
        },
        links: {
          color: "#0984e3",
          distance: 150,
          enable: true,
          opacity: 0.7,
          width: 1,
        },
        move: {
          direction: "top-right",
          enable: true,
          outModes: {
            out: "out"
          },
          random: false,
          speed: 5,
          straight: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 800
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "triangle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <BrowserRouter>
      <NavBar />
      {
        init && (
          <>
            <LandingPage />
            <Particles
              id="tsparticles"
              particlesLoaded={particlesLoaded}
              options={options} />
            <AboutPage />
            <ExperiencePage />
            <ProjectsPage />
            <SkillsPage />
            <EducationPage />
            <ContactMePage />
            <Footer />
          </>
        )
      }

    </BrowserRouter>
  );
}

export default App;