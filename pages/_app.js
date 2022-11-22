import Head from "next/head";
import { Provider } from "react-redux";
import { ConfigProvider, theme } from "antd";
import gsap from "gsap";
import { ScrollTrigger as ScrollTriggerPlugin } from "gsap/dist/ScrollTrigger";
import { TextPlugin } from "gsap/dist/TextPlugin";
import store from "@/store";

import "@/styles/style.scss";

const { darkAlgorithm, compactAlgorithm } = theme;

gsap.registerPlugin(ScrollTriggerPlugin);
gsap.registerPlugin(TextPlugin);

function MyApp({ Component, pageProps }) {
  const t = {
    algorithm: [darkAlgorithm, compactAlgorithm],
  };

  return (
    <Provider store={store}>
      <Head>
        <title>前端實驗室</title>
        <meta name="description" content="前端實驗室" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ConfigProvider theme={t}>
        <Component {...pageProps} />
      </ConfigProvider>
    </Provider>
  );
}

export default MyApp;
