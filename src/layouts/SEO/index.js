import Head from 'next/head';
import React from 'react';

function SEO({ lang = 'en', title }) {
  title = title ? `Ltndat - ${title}` : 'Ltndat - Homepage';
  return (
    <Head>
      <meta charSet="utf-8" />
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="apple-touch-icon.png" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="title" content="ltndat" />
      <meta name="description" content={title} />
      <meta name="author" content="Ltndat" />
      <meta name="author" content="Le Tran Ngoc Dat" />
      <meta name="twitter:title" content="Ltndat" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@ltndat" />
      <meta name="twitter:creator" content="@ltndat" />
      <meta
        name="twitter:image"
        content="https://raw.githubusercontent.com/ltndat/ltndat/main/public/card.png"
      />
      <meta property="og:site_name" content="Ltndat" />
      <meta name="og:title" content="Ltndat" />
      <meta property="og:type" content="website" />
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/ltndat/ltndat/main/public/card.png"
      />
      <title>{title}</title>
    </Head>
  );
}

export default SEO;
