import { renderToString } from 'react-dom/server';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import PullToRefresh from 'pulltorefreshjs';
// import '@fontsource/lobster-two';
// import '@fontsource/merienda';
// import '@fontsource/roboto-mono';
// import '@fontsource/signika-negative';
// import '@fontsource/source-sans-pro';
import 'animate.css';
import { Icon } from '@chakra-ui/react';
import { TiArrowUpOutline } from 'react-icons/ti';
// import { ImSpinner2 } from 'react-icons/im';
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

/**
 * @param {{
 * pageProps: {storage: import('@/@type/features').FeaturesStorage}
 * router: import('next/router').NextRouter
 * }}
 * */
export default function App({ Component, pageProps, router }) {
  const { storage } = pageProps;
  const getLayout =
    Component.getLayout ||
    ((page) => (
      <Page {...pageProps} storage={storage}>
        {page}
      </Page>
    ));
  store = store || createStore(storage);

  useEffect(() => {
    PullToRefresh.init({
      mainElement: 'body',
      instructionsPullToRefresh: ' ',
      instructionsRefreshing: ' ',
      instructionsReleaseToRefresh: ' ',
      onRefresh() {
        // window.location.reload();
        router.replace(router.asPath);
      },
      iconArrow: renderToString(<Icon icon={TiArrowUpOutline} />),
      // iconRefreshing: <Icon icon={ImSpinner2} className="rotate-center" />,
    });
    return () => {
      PullToRefresh.destroyAll();
    };
  }, [router]);

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
