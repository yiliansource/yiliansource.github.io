import Head from "next/head";
import "reset-css";

import { Layout } from "components/Layout";
import { ParticleBackground } from "components/ParticleBackground";
import "styles/globals.css";

function MyApp({ Component, pageProps, router }) {
    return (
        <>
            <Head>
                <title>Ian Hornik</title>
            </Head>

            <ParticleBackground />
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </>
    );
}

export default MyApp;
