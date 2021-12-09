import '../styles/globals.css'
import { wrapper } from "../store";
import { Layout } from '../components/templates';
import { ApolloProvider } from "@apollo/client";
import apollo from '../apollo-client';

function MyApp({ Component, pageProps }) {

  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);

  return { pageProps };
};
export default wrapper.withRedux(MyApp);
