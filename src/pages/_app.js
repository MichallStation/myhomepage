import { Provider } from 'react-redux';
import ChakraManager from '@/lib/chakra/Manager';
import createStore from '@/features/store';
import theme from '@/features/theme';
import '@/styles/globals.css';
import Page from '@/layouts/Page';
import 'animate.css';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  document.addEventListener('touchstart', () => {}, { passive: true });
}

let store;

/** @param {{pageProps: {storage: import('@/@type/features').FeaturesStorage}}}  */
export default function App({ Component, pageProps, router }) {
  const { storage } = pageProps;
  store = store || createStore(storage);
  const getLayout =
    Component.getLayout || ((page) => <Page {...pageProps}>{page}</Page>);

  return (
    <Provider store={store}>
      <ChakraManager cookie={storage?.prev?.cookie || ''} theme={theme}>
        {getLayout(<Component {...pageProps} key={router.route} />)}
      </ChakraManager>
    </Provider>
  );
}
