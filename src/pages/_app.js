import { Provider } from 'react-redux';
import '@fontsource/lobster-two';
import '@fontsource/merienda';
import '@fontsource/roboto-mono';
import '@fontsource/signika-negative';
import '@fontsource/source-sans-pro';
import 'animate.css';
import { Manager } from '@/lib/chakra';
import createStore from '@/features/store';
import theme from '@/features/theme';
// import { useFeaturesStorage } from '@/features/hooks';
import { Page } from '@/layouts';
import '@/styles/globals.css';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
  document.addEventListener('touchstart', () => {}, { passive: true });
}

let store;

/** @param {{pageProps: {storage: import('@/@type/features').FeaturesStorage}}}  */
export default function App({ Component, pageProps, router }) {
  // const storage = useFeaturesStorage(pageProps?.storage);
  const { storage } = pageProps;
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Page {...pageProps} storage={storage}>
        {page}
      </Page>
    ));
  store = store || createStore(storage);

  return (
    <Provider store={store}>
      <Manager cookie={storage?.cookie || ''} theme={theme}>
        {getLayout(
          <Component {...pageProps} key={router.route} storage={storage} />,
        )}
      </Manager>
    </Provider>
  );
}
