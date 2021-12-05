import Document, { Html, Head, Main, NextScript } from "next/document";
import { useWindowSize } from "../services/hooks";

export default class MyDocument extends Document {
  render() {
    const scale = 1;
    // const statusBarSize = 24;
    // const width = window.screen.width;
    // const height = window.screen.height - statusBarSize;
    // const scale = Math.min(width / 1920, height / 1200);
  
    return (
      <Html>
        <Head>
            <title>C17AN's Devlog</title>
            <meta charSet="utf-8"></meta>
            <meta content={`initial-scale=${scale}, user-scalable=no`}></meta>
        </Head>
        <body>
            <Main />
            <NextScript />
        </body>
      </Html>
    );
  }
}