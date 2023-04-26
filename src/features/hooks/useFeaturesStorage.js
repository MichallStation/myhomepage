/**
 * Base on
 * Manage: Cookies & LocalStorage & Session Storage (In Application Tab)
 * Nextjs: https://nextjs.org/docs
 * Client side rendering
 */

import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';

/** @type {import("../@features").FeaturesStorage} */
const initialValues = {
  current: {
    lang: 'en',
    latest: Date(),
    cookie: '',
  },
  prev: {
    lang: 'en',
    latest: Date(),
    cookie: '',
  },
};

/** @returns {import("../@features").FeaturesStorage} */
export default function useFeaturesStorage() {
  const [storage, setStorage] = useState(initialValues);
  useEffect(() => {
    setStorage({
      current: {
        lang: Cookies.get('lang') || 'en',
        latest: Cookies.get('latest') || Date(),
      },
      prev: {
        cookie: document.cookie,
      },
    });
  }, []);
  return storage;
}
