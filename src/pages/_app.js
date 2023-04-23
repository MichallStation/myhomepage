import { Provider } from 'react-redux';
import ChakraManager from '@/lib/chakra/Manager';
import createStore from '@/features/store';
import createFeaturesStorage from '@/features';
import theme from '@/features/theme';
import '@/styles/globals.css';
import Page from '@/layouts/Page';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  document.addEventListener('touchstart', () => {}, { passive: true });
}

let store;

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
export default function App({ Component, pageProps, router, storage }) {
  const getLayout =
    Component.getLayout || ((page) => <Page lang={storage.lang}>{page}</Page>);
  store = store || createStore(storage);
  const { cookie } = storage;

  return (
    <Provider store={store}>
      <ChakraManager cookie={cookie} theme={theme}>
        {getLayout(<Component {...pageProps} key={router.route} />)}
      </ChakraManager>
    </Provider>
  );
}

/** @param {{ctx: import('next').NextPageContext}} */
App.getInitialProps = async ({ ctx }) => {
  const storage = createFeaturesStorage(ctx);
  return { storage };
};
