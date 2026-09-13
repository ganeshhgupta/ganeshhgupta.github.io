import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

// A quiet, slow-drifting field of dust motes. No connecting lines, no
// bouncing network animation, no fast movement — restrained enough to sit
// behind body copy without competing for attention.
const Particle = ({ nightMode }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine);
    }, []);

    const particlesOptions = {
        background: { color: { value: 'transparent' } },
        fpsLimit: 30,
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
            color: { value: nightMode ? '#3A3F4B' : '#C7CBD4' },
            links: { enable: false },
            move: {
                enable: true,
                speed: 0.15,
                direction: 'none',
                random: true,
                outModes: { default: 'out' },
            },
            number: { value: 34, density: { enable: true, area: 900 } },
            opacity: { value: { min: 0.15, max: 0.4 } },
            size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
    };

    return <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />;
};

export default Particle;
