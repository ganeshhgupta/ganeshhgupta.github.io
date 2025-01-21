import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const Particle = ({ toggleNightMode, nightMode }) => {
    const particlesInit = useCallback(async (engine) => {
        await loadSlim(engine); // Load slim particles
    }, []);

    const particlesOptions = nightMode
        ? {
              background: {
                  color: {
                      value: "#000000", // Black background for night mode
                  },
              },
              fpsLimit: 30, // Lower frame rate for a subtle effect
              particles: {
                  color: {
                      value: ["#ffffff", "#aaaaaa", "#bbbbbb"], // Star-like colors
                  },
                  move: {
                      enable: true,
                      speed: 0.2, // Very slow movement for a serene starry effect
                      direction: "none",
                      outModes: {
                          default: "bounce", // Bounce off edges
                      },
                  },
                  number: {
                      value: 80, // More particles for a star-filled night
                  },
                  opacity: {
                      value: { min: 0.3, max: 1 }, // Twinkling effect
                      animation: {
                          enable: true,
                          speed: 1,
                          minimumValue: 0.3,
                          sync: false,
                      },
                  },
                  size: {
                      value: { min: 1, max: 3 }, // Smaller particles for stars
                      animation: {
                          enable: true,
                          speed: 5,
                          minimumValue: 1,
                          sync: false,
                      },
                  },
                  links: {
                      enable: false, // No links for stars
                  },
              },
              detectRetina: true,
          }
        : {
              background: {
                  color: {
                      value: "#ffffff", // Light background for day mode
                  },
              },
              fpsLimit: 60,
              particles: {
                  color: {
                      value: "#aaaaaa", // Default color
                  },
                  links: {
                      enable: true,
                      color: "#bbbbbb",
                      distance: 300,
                  },
                  move: {
                      enable: true,
                      speed: 2, // Faster movement for day mode
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
          };

    return (
        <div>
            {/* Toggle button for night mode */}
            <button
                onClick={toggleNightMode}
                style={{
                    margin: "10px",
                    backgroundColor: nightMode ? "#ffffff" : "#000000",
                    color: nightMode ? "#000000" : "#ffffff",
                    border: "none",
                    padding: "10px 20px",
                    cursor: "pointer",
                }}
            >
                Toggle Night Mode
            </button>
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
        </div>
    );
};

export default Particle;
