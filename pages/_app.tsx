import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store";
import { Layout } from '../components/templates';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default wrapper.withRedux(MyApp);
