import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import Script from 'next/script';
import { author, langs } from '@/globals';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 * }}
 * */
function SEO({ title, name, desc, card }) {
  // const set = getSet(homeId, lang);
  const { locale } = useRouter();
  const set = langs[locale].SEO;
  title = title ? `${set.name} - ${title}` : `${set.name} - ${set.title}`;
  name = name ? `${set.name} - ${name}` : set.name;
  return (
    <>
      <Head>
        <meta
          name="viewport"
          // content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=yes, viewport-fit=cover"
        />
        <meta name="title" content={name || set.name} />
        <meta name="description" content={desc || set.desc} />
        <meta name="author" content={author.name} />
        {/* <meta name="author" content="Le Tran Ngoc Dat" /> */}
        {/* <meta name="twitter:title" content={author.name} /> */}
        <meta name="twitter:title" content={name || set.name} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content={`@${author.name}`} />
        <meta name="twitter:creator" content={`@${author.name}`} />
        <meta name="twitter:description" content={desc || set.desc} />
        <meta
          name="twitter:image"
          content={
            card ||
            'https://raw.githubusercontent.com/ltndat/myhomepage/main/public/cardhat.png'
          }
        />
        <meta name="twitter:url" content="https://ltndat.com" />
        <meta property="og:site_name" content={author.name} />
        <meta name="og:title" content={name || set.name} />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={desc || set.desc} />
        <meta property="og:url" content="https://ltndat.com" />
        <meta
          property="og:image"
          content={
            card ||
            'https://raw.githubusercontent.com/ltndat/myhomepage/main/public/cardhat.png'
          }
        />

        <title>{title}</title>
      </Head>
      {/* <!-- Google tag (gtag.js) --> */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-27R5ELBFJH"
      />
      <Script
        id="gtm-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-27R5ELBFJH');`,
        }}
      />
    </>
  );
}

export default SEO;
