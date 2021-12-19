import '../styles/globals.css'
import { wrapper } from "../store";
import { Layout } from '../components/templates';
import { ApolloProvider } from "@apollo/client";
import apollo from '../services/dataCollector/apolloClient';

function MyApp({ Component, pageProps }) {
  const apolloClient = apollo.getClient();
  console.log('apolloClient', apolloClient);
  return (
    <Layout>
        {/* <ApolloProvider client={apolloClient}> */}
          <Component {...pageProps} />
        {/* </ApolloProvider> */}
    </Layout>
  );
}

MyApp.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);

  return { pageProps };
};
export default wrapper.withRedux(MyApp);
