import { useCallback } from "react";
import Particles from "react-particles";
//import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "tsparticles-slim"; // if you are going to use `loadSlim`, install the "tsparticles-slim" package too.

const ParticleComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine.current);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // A custom particles configuration
    const particleConfig = {
      particles: {
        number: {
          value: 100,
        },
        size: {
          value: 10,
        },
        move: {
          speed: 2,
        },
      },
    };

    // Set the particles configuration
    container.setOptions(particleConfig);
  }, []);

  return (
    <Particles id="tsparticles" init={particlesInit} loaded={particlesLoaded} />
  );
};

export default ParticleComponent;
