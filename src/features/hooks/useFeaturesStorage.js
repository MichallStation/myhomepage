/**
 * Base on
 * Manage: Cookies & LocalStorage & Session Storage (In Application Tab)
 * Nextjs: https://nextjs.org/docs
 * Client side rendering
 */

import { useEffect, useState } from 'react';
import cookieParser from 'cookie';

/** @type {import("../../@type/features").FeaturesStorage} */
const initialValues = {
  lang: 'en',
  latest: Date(),
  cookie: '',
  cookies: {},
  authorization: '',
  host: '',
  location: '',
  origin: '',
  token: '',
  newbie: true,
};

/** @returns {import("../../@type/features").FeaturesStorage} */
export default function useFeaturesStorage(serverStorage) {
  const [storage, setStorage] = useState(serverStorage || initialValues);
  useEffect(() => {
    if (serverStorage) return;
    const cookies = cookieParser.parse(document.cookie);
    // console.log(cookies);
    setStorage({
      lang: cookies?.lang || 'en',
      latest: cookies?.latest || Date(),
      cookie: document.cookie,
      cookies,
      authorization: document?.authorization,
      host: document.location.host,
      location: document.location.href,
      origin: document.location.origin,
      token: document?.token,
      newbie: cookies?.latest === undefined,
    });
  }, [serverStorage]);
  return storage;
}
