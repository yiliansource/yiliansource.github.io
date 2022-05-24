import "reset-css";

import { BlobProvider } from "components/Blobs";
import { Layout } from "components/Layout";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <BlobProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </BlobProvider>
        </>
    );
}

export default MyApp;
