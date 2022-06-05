/** @jsxImportSource @emotion/react */
import { memo } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

// eslint-disable-next-line react/display-name
export const ParticleBackground = memo(() => {
    const particlesInit = async (main) => {
        await loadFull(main);
    };

    return (
        <Particles
            id="tsparticles"
            options={options}
            init={particlesInit}
            css={{
                position: "absolute",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                zIndex: 0,
            }}
        />
    );
});

const options = {
    fullScreen: false,
    interactivity: {
        modes: {
            bubble: {
                distance: 250,
                duration: 2,
                opacity: 0,
                size: 0,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    mix: false,
                    selectors: [],
                },
            },
            grab: {
                distance: 400,
            },
            repulse: {
                distance: 400,
                divs: {
                    distance: 200,
                    duration: 0.4,
                    factor: 100,
                    speed: 1,
                    maxSpeed: 50,
                    easing: "ease-out-quad",
                    selectors: [],
                },
            },
        },
    },
    particles: {
        color: {
            value: "#ffffff",
        },
        move: {
            enable: true,
            outModes: {
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
            },
            random: true,
            speed: 1,
        },
        number: {
            density: {
                enable: true,
            },
            value: 20,
        },
        opacity: {
            random: {
                enable: true,
            },
            value: {
                min: 0,
                max: 0.5,
            },
            animation: {
                enable: true,
                speed: 1,
                minimumValue: 0,
            },
        },
        size: {
            random: {
                enable: true,
            },
            value: {
                min: 1,
                max: 3,
            },
            animation: {
                speed: 4,
                minimumValue: 0.3,
            },
        },
    },
};
