import '../styles/base.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { setupStore } from '../store/store';

const store = setupStore();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <div id="portal"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
export default MyApp;
