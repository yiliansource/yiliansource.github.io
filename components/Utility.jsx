/** @jsxImportSource @emotion/react */
import { motion } from "framer-motion";
import { useRef } from "react";

import { breakpoints } from "lib/breakpoints";

export const Section = ({ children, ...props }) => {
    const scrollRef = useRef(null);

    return (
        <section
            css={{
                padding: "200px 0 50px",
                [breakpoints.mobile]: {
                    padding: "100px 0 50px",
                },
            }}
            {...props}
        >
            <motion.div
                ref={scrollRef}
                initial={{ opacity: 0, translateY: 20 }}
                whileInView={{ opacity: 1, translateY: 0, transition: { duration: 0.5 } }}
                viewport={{ margin: "-100px 0px", once: true }}
            >
                {children}
            </motion.div>
        </section>
    );
};

export const SectionHeading = ({ children }) => (
    <div
        css={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 22,
        }}
    >
        <h2
            css={{
                fontSize: 40,
                fontWeight: 700,
            }}
        >
            {children}
        </h2>
        <div
            css={{
                flexGrow: 1,
                borderTop: "1px solid #192D3D",
            }}
        ></div>
    </div>
);
