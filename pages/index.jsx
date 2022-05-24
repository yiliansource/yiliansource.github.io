/** @jsxImportSource @emotion/react */
import Image from "next/image";
import { AiOutlineMail } from "react-icons/ai";

import { BlobShape, BlobAnchoredScene, BlobScene, BlobCircle } from "components/Blobs";
import { SectionHeading } from "components/Utility";
import { FeaturedProject } from "components/projects/FeaturedProject";
import InReactioVeritasBanner from "public/img/in-reactio-veritas.jpg";
import PartyJsBanner from "public/img/party-js.png";
import ProfilePicture from "public/img/portrait.jpg";
import TenaciousTanksBanner from "public/img/tenacious-tanks.png";

export default function Home() {
    return (
        <>
            <section css={{ marginTop: 140 }}>
                <BlobAnchoredScene>
                    <BlobCircle translate={[40, -60]} radius={8} />
                </BlobAnchoredScene>

                <p css={{ fontSize: 16, color: "#567288" }}>My name is</p>
                <div css={{ fontSize: 64, fontWeight: 700, marginBottom: 30 }}>
                    <h1>Ian Hornik.</h1>
                    <h2 css={{ color: "#567288" }}>Developer by passion.</h2>
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
                        I am currently doing my bachelors degree in Technical Mathematics at the Technical University of
                        Vienna, Austria.
                    </p>
                </div>

                <BlobAnchoredScene override={{ left: 0 }}>
                    <BlobShape
                        align="left"
                        translate={[0, 300]}
                        rotate={-22.24}
                        scale={2}
                        shape="M132.9 -171C146.9 -118.8 115.7 -59.4 115.3 -0.4C114.9 58.7 145.5 117.4 131.4 173.6C117.4 229.9 58.7 283.7 3.2 280.5C-52.3 277.3 -104.7 217.2 -120 160.9C-135.3 104.7 -113.7 52.3 -125 -11.3C-136.3 -75 -180.6 -149.9 -165.2 -202.1C-149.9 -254.2 -75 -283.6 -7.8 -275.8C59.4 -268.1 118.8 -223.1 132.9 -171"
                    />
                    <BlobCircle translate={[0, 10]} radius={20} />
                </BlobAnchoredScene>
            </section>

            <section
                id="about"
                css={{
                    marginTop: 300,
                    paddingLeft: 150,
                }}
            >
                <BlobAnchoredScene>
                    <BlobCircle translate={[300, -150]} radius={8} />
                </BlobAnchoredScene>

                <SectionHeading>About me</SectionHeading>
                <div
                    css={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 32,
                    }}
                >
                    <div
                        css={{
                            "p + p": {
                                marginTop: 12,
                            },
                        }}
                    >
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget arcu amet condimentum eu sem
                            nulla nunc. Vestibulum ultrices ac amet enim. Mi pellentesque sem praesent pulvinar tortor
                            tellus sagittis sit tortor. Commodo est sed sed aliquet purus lorem sed pharetra.
                        </p>
                        <p>
                            Elementum morbi vel enim volutpat ultrices viverra tellus viverra. Mi posuere at pharetra
                            amet amet, ut congue. Neque vulputate facilisis duis egestas vulputate tellus dictumst.
                            Faucibus nam vitae nunc augue. Et placerat amet ut feugiat. Lectus augue tellus arcu at.
                        </p>
                        <p>Here are a few technologies I&apos;ve been working with recently:</p>
                        <div
                            css={{
                                display: "flex",
                                flexDirection: "row",
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
                                <li>Python</li>
                            </ul>
                            <ul>
                                <li>Unity3D</li>
                                <li>C++</li>
                            </ul>
                        </div>
                    </div>
                    <div css={{ flexGrow: 1 }}>
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
            </section>

            <section
                id="projects"
                css={{
                    marginTop: 300,
                }}
            >
                <SectionHeading>Proud Projects</SectionHeading>

                <div
                    css={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "40px 0",
                        gap: 80,
                    }}
                >
                    <FeaturedProject
                        title="party.js"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse aenean hac diam sapien sed risus etiam. Turpis egestas massa sed magna sapien gravida."
                        banner={PartyJsBanner}
                        keywords={["TypeScript", "HTML", "Library"]}
                        socials={{
                            github: "https://github.com/yiliansource/party-js",
                        }}
                        alternate
                    />

                    <FeaturedProject
                        title="Tenacious Tanks"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse aenean hac diam sapien sed risus etiam. Turpis egestas massa sed magna sapien gravida."
                        banner={TenaciousTanksBanner}
                        keywords={["Unity3D", "C#", "Wwise", "Autodesk Maya", "Photoshop"]}
                        socials={{
                            itchio: "/",
                        }}
                    />

                    <FeaturedProject
                        title="In Reactio Veritas"
                        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Habitasse aenean hac diam sapien sed risus etiam. Turpis egestas massa sed magna sapien gravida."
                        banner={InReactioVeritasBanner}
                        keywords={["C++", "Node.js", "Art"]}
                        socials={{}}
                        alternate
                    />
                </div>
            </section>

            {/* <section
                css={{
                    marginTop: 300,
                }}
            >
                <h2>Smaller Projects</h2>
                <div></div>
            </section> */}

            {/* TODO: Gallery! */}

            <section
                id="contact"
                css={{
                    marginTop: 300,
                }}
            >
                <div css={{ textAlign: "center" }}>
                    <h2 css={{ fontSize: 40, fontWeight: 700, marginBottom: 20 }}>Want to reach out?</h2>
                    <p css={{ marginBottom: 20 }}>
                        Whether it&apos;s an inquiry or just to say Hello, <br /> my inbox is always open!
                    </p>
                    <a href="mailto:yiliansource@gmail.com" css={{ fontSize: 32, color: "#567288" }}>
                        <AiOutlineMail />
                    </a>
                </div>
            </section>
        </>
    );
}
