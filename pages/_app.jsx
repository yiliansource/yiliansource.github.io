import { ThemeProvider } from "@emotion/react";
import Head from "next/head";
import "reset-css";

import { GlobalStyles } from "components/GlobalStyles";
import { Layout } from "components/Layout";
import { ParticleBackground } from "components/ParticleBackground";
import { theme } from "lib/theme";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <GlobalStyles />

                <Head>
                    <title>Ian Hornik</title>
                </Head>

                <ParticleBackground />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
