import Head from 'next/head';
import React from 'react';
import { ENV_HOST_URL } from '@/globals/envs';
import author from '@/globals/author';
import fallback from '@/globals/fallback';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function SEO({ sets, title, name, desc, card }) {
  // const set = getSet(homeId, lang);
  const set = sets?.seo || fallback.home;
  title = title ? `${set.name} - ${title}` : `${set.name} - ${set.title}`;
  name = name ? `${set.name} - ${name}` : set.name;
  return (
    <Head>
      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
      />
      <meta name="title" content={name || set.name} />
      <meta name="description" content={desc || set.desc} />
      <meta name="author" content={author.name} />
      {/* <meta name="author" content="Le Tran Ngoc Dat" /> */}
      <meta name="twitter:title" content={author.name} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={`@${author.name}`} />
      <meta name="twitter:creator" content={`@${author.name}`} />
      <meta name="twitter:description" content={desc || set.desc} />
      <meta
        name="twitter:image"
        content={card || `${ENV_HOST_URL}/cardhat.png`}
      />
      <meta name="twitter:url" content={ENV_HOST_URL} />
      <meta property="og:site_name" content={author.name} />
      <meta name="og:title" content={name || set.name} />
      <meta property="og:type" content="website" />
      <meta property="og:description" content={desc || set.desc} />
      <meta property="og:url" content={ENV_HOST_URL} />
      <meta
        property="og:image"
        content={card || `${ENV_HOST_URL}/cardhat.png`}
      />
      <title>{title}</title>
    </Head>
  );
}

export default SEO;
