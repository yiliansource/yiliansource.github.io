/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";

import { ArtworkGallery } from "components/ArtworkGallery";
import { Section, SectionHeading } from "components/Utility";
import { FeaturedProject } from "components/projects/FeaturedProject";
import InReactioVeritasBanner from "public/img/in-reactio-veritas.jpg";
import PartyJsBanner from "public/img/party-js.png";
import ProfilePicture from "public/img/portrait.jpg";
import TenaciousTanksBanner from "public/img/tenacious-tanks.png";

export default function Home() {
    return (
        <>
            <Section id="home">
                <p css={(theme) => ({ fontSize: 16, color: theme.colors.text.bodySecondary })}>My name is</p>
                <div
                    css={(theme) => ({
                        fontSize: 64,
                        fontWeight: 700,
                        marginBottom: 30,
                        [theme.breakpoints.mobile]: {
                            fontSize: 48,
                        },
                    })}
                >
                    <h1>Ian Hornik.</h1>
                    <h2 css={(theme) => ({ color: theme.colors.text.bodySecondary })}>Developer by passion.</h2>
                </div>
                <div
                    css={{
                        fontSize: 16,
                        maxWidth: 600,
                        "p + p": {
                            marginTop: 20,
                        },
                    }}
                >
                    <p>
                        I&apos;m an enthusiastic mathematics student, that additionally does fullstack web development,
                        game development and 3D art.
                    </p>
                    <p>
                        I am currently doing my Bachelor&apos;s degree in Technical Mathematics at the Technical
                        University of Vienna, Austria.
                    </p>
                </div>
            </Section>

            <Section id="about">
                <SectionHeading>About me</SectionHeading>
                <div
                    css={(theme) => ({
                        display: "flex",
                        flexDirection: "row",
                        gap: 32,
                        [theme.breakpoints.mobile]: {
                            flexWrap: "wrap",
                        },
                    })}
                >
                    <div
                        css={{
                            flexShrink: 1,
                            "p + p": {
                                marginTop: 12,
                            },
                        }}
                    >
                        <p>
                            Before graduating from the HTL Spengergasse in Vienna, I mostly spent my time with game
                            development, as this was the primary focus of my educational institution. During the final
                            year and post-graduation I started to transition more and more into full-stack web
                            development, fascinated by the endless possibility of applications, interfaces and creative
                            design choices. This is currently my primary occupation of work, but may be prone to change
                            in the future.
                        </p>
                        <p>
                            I have been wanting to study Technical Mathematics for a while, so after finishing my civil
                            service I enrolled at the Technical University of Vienna.
                        </p>
                        <p>Here are a few technologies I&apos;ve been working with recently:</p>
                        <div
                            css={{
                                display: "flex",
                                flexDirection: "row",
                                flexWrap: "wrap",
                                marginTop: 10,
                                ul: {
                                    margin: "0 auto 0 0",
                                    padding: "0 0 0 26px",

                                    listStyle: "disc",
                                    lineHeight: 1.6,

                                    fontFamily: "Fira Code, monospace",
                                    fontSize: 14,
                                },
                            }}
                        >
                            <ul>
                                <li>Javascript/Typescript (ES6+)</li>
                                <li>React</li>
                                <li>Node.js</li>
                            </ul>
                            <ul>
                                <li>Python</li>
                                <li>Unity3D</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>
                    <div css={{ margin: "0 auto" }}>
                        <Image
                            src={ProfilePicture}
                            alt="Portrait Image"
                            quality={100}
                            width={256}
                            height={256}
                            layout="fixed"
                            css={{ borderRadius: 8 }}
                            draggable={false}
                        />
                    </div>
                </div>
            </Section>

            <Section id="projects">
                <SectionHeading>Proud Projects</SectionHeading>

                <div
                    css={(theme) => ({
                        display: "flex",
                        flexDirection: "column",
                        padding: "40px 0",
                        gap: 80,

                        [theme.breakpoints.mobile]: {
                            gap: 12,
                        },
                    })}
                >
                    <FeaturedProject
                        title="party.js"
                        description="A JavaScript library to brighten up your user's site experience with visual effects!"
                        banner={PartyJsBanner}
                        keywords={["TypeScript", "HTML", "Library"]}
                        socials={{
                            github: "https://github.com/yiliansource/party-js",
                        }}
                        alternate
                    />
                    <FeaturedProject
                        title="Tenacious Tanks"
                        description="A free-to-play, local-multiplayer, fast-paced arena brawler, where up to 4 players challenge each other in head-to-head tactical combat! This was my graduation project."
                        banner={TenaciousTanksBanner}
                        keywords={["Unity3D", "C#", "Wwise", "Autodesk Maya", "Photoshop"]}
                        socials={{
                            itchio: "https://yilian.itch.io/tenacious-tanks",
                        }}
                    />
                    <FeaturedProject
                        title="In Reactio Veritas"
                        description="Turning brain impulses into art was a creative project I worked on together with some friends, before exhibitioning it at the Prix Ars Electronica in the category u19-create your world."
                        banner={InReactioVeritasBanner}
                        keywords={["C++", "Node.js", "Art"]}
                        alternate
                    />
                </div>
            </Section>

            {/* <section
                css={{
                    marginTop: 300,
                }}
            >
                <h2>Smaller Projects</h2>
                <div></div>
            </section> */}

            <Section id="artworks">
                <SectionHeading>Artworks</SectionHeading>
                <p>
                    Occasionally I create artworks, mostly 3D using Blender. Below you can find a collection of my
                    proudest pieces.
                </p>
                <div css={{ marginTop: 20 }}>
                    <ArtworkGallery />
                </div>
            </Section>

            <Section id="contact">
                <div css={{ textAlign: "center" }}>
                    <h2 css={{ fontSize: 40, fontWeight: 700, marginBottom: 20 }}>Want to reach out?</h2>
                    <p css={{ marginBottom: 20 }}>
                        Whether it&apos;s an inquiry or just to say Hello, <br /> my inbox is always open!
                    </p>
                    <a
                        href="mailto:yiliansource@gmail.com"
                        css={(theme) => ({ fontSize: 32, color: theme.colors.text.bodySecondary })}
                    >
                        <AiOutlineMail />
                    </a>
                </div>
            </Section>
        </>
    );
}
