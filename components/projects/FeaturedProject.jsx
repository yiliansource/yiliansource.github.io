/** @jsxImportSource @emotion/react */
import Image from "next/image";
import Link from "next/link";
import { FaGithub, FaItchIo } from "react-icons/fa";

const socialIconMap = {
    github: <FaGithub />,
    itchio: <FaItchIo />,
};

export const FeaturedProject = ({ title, description, banner, keywords = [], socials = {}, alternate = false }) => {
    return (
        <div
            css={{
                position: "relative",

                minHeight: 380,
            }}
        >
            <div
                css={{
                    position: "absolute",
                    top: 0,
                    left: alternate ? 0 : "unset",
                    right: alternate ? "unset" : 0,
                }}
            >
                <Image
                    src={banner}
                    alt={title}
                    layout="fixed"
                    width={580}
                    height={360}
                    quality={100}
                    css={{ borderRadius: 8 }}
                    draggable={false}
                />
            </div>
            <div
                css={{
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: alternate ? "flex-end" : "flex-start",
                    textAlign: alternate ? "right" : "left",
                    padding: "46px 0",
                    gap: 20,
                }}
            >
                <div css={{ marginBottom: 12 }}>
                    <p css={{ color: "#FBAE3C", fontWeight: 600, fontSize: 16 }}>Featured Project</p>
                    <h3 css={{ fontWeight: 700, fontSize: 40 }}>{title}</h3>
                </div>
                <div
                    css={{
                        background: "#092C46",
                        padding: "18px 30px",
                        borderRadius: 8,
                        boxShadow: "0 2px 12px rgb(0, 0, 0, 0.25)",
                    }}
                >
                    <p
                        css={{
                            color: "#B8CFE0",
                            maxWidth: 450,
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div
                    css={{
                        display: "flex",
                        flexDirection: "row",
                        gap: 20,

                        fontFamily: "Fira Code, monospace",
                        fontSize: 14,
                        color: "#567288",
                    }}
                >
                    {keywords.map((k) => (
                        <span key={k}>{k}</span>
                    ))}
                </div>
                <div
                    css={{
                        fontSize: 24,
                        a: {
                            color: "#567288",
                            "&:hover": {
                                color: "inherit",
                            },
                        },
                    }}
                >
                    {Object.entries(socials).map(([social, href]) => (
                        <span key={social}>
                            <Link href={href}>
                                <a>{socialIconMap[social]}</a>
                            </Link>
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};
