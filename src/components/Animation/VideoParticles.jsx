import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticleBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine once
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // Ensure background is transparent
        },
      },
      fpsLimit: 60, // Reduce FPS limit to reduce CPU usage
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#fafcfc",
        },
        links: {
          color: "#fafcfc",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2, // Reduce speed to reduce CPU usage
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 130, // Reduce number of particles to reduce CPU usage
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    [],
  );

  if (init) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden", // Prevent overflow outside the div
          zIndex: -10, // Ensure particles are behind other elements
        }}
      >
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return <></>;
};

export default ParticleBackground;
