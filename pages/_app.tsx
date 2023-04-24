import Layout from "@/components/containers/layout";
import "@/styles/globals.css";
import { SessionProvider } from "next-auth/react";
import type { AppProps } from "next/app";
import store from "@/utils/store";
import { Provider } from "react-redux";

export default function App({
    Component,
    pageProps: { session, ...pageProps },
}: AppProps) {
    return (
        <SessionProvider session={session}>
            <Provider store={store}>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </Provider>
        </SessionProvider>
    );
}
