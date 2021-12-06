import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from "../store";
import { Layout } from '../components/templates';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";

function MyApp({ Component, pageProps }: AppProps) {
  const client = new ApolloClient({
    uri: 'http://127.0.0.1:4000/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default wrapper.withRedux(MyApp);
