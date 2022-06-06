import { Global } from "@emotion/react";

export function GlobalStyles() {
    return (
        <Global
            styles={(theme) => ({
                "html, body": {
                    position: "relative",
                    scrollBehavior: "smooth",
                    background: theme.colors.background.primary,
                    color: theme.colors.text.bodyPrimary,
                },
                "h1, h2, h3": {
                    color: theme.colors.text.title,
                },
                a: {
                    color: "inherit",
                    textDecoration: "none",
                },
                p: {
                    lineHeight: 1.6,
                },
            })}
        />
    );
}
