import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const ParticleComponent = ({ toggleNightMode, nightMode }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Load slim particles
    }, []);

    return (
        <Particles
            id="tsparticles"
            init={particlesInit}
            options={{
                background: {
                    color: {
                        value: nightMode ? "#121212" : "#ffffff", // Adjust background based on nightMode
                    },
                },
                fpsLimit: 60,
                particles: {
                    color: {
                        value: nightMode ? "#bbbbbb" : "#aaaaaa", // Adjust particle color
                    },
                    links: {
                        enable: true,
                        color: nightMode ? "#888888" : "#bbbbbb", // Adjust link color
                        distance: 300,
                    },
                    move: {
                        enable: true,
                        speed: 2,
                    },
                    number: {
                        value: 30,
                    },
                    opacity: {
                        value: 0.5,
                    },
                    size: {
                        value: { min: 1, max: 5 },
                    },
                },
                detectRetina: true,
            }}
        />
    );
};

export default ParticleComponent;
