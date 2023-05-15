import Head from 'next/head';
import React from 'react';
import { ENV_HOST_URL, homeId } from '@/globals/envs';
import { getSet } from '@/globals/sets';
import author from '@/globals/author';

function SEO({ lang = 'en', title, name, desc, card }) {
  const set = getSet(homeId, lang);
  title = title ? `${author.name} - ${title}` : `${author.name} - ${set.title}`;
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
