/**
 * Base on
 * Manage: Cookies & LocalStorage & Session Storage (In Application Tab)
 * Nextjs: https://nextjs.org/docs
 * Client side rendering
 */

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

/** @type {import("../../@type/features").FeaturesStorage} */
const initialValues = {
  lang: 'en',
  latest: Date(),
  cookie: '',
};

/** @returns {import("../../@type/features").FeaturesStorage} */
export default function useFeaturesStorage() {
  const [storage, setStorage] = useState(initialValues);
  useEffect(() => {
    setStorage({
      lang: Cookies.get('lang') || 'en',
      latest: Cookies.get('latest') || Date(),
      cookie: document.cookie,
    });
  }, []);
  return storage;
}
