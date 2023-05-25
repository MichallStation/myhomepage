/**
 * Base on
 * Nextjs: https://nextjs.org/docs
 * Client side rendering
 */

import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function useLang(langValue = 'en') {
  const [lang, setLang] = useState(langValue);
  const { locale, defaultLocale } = useRouter();
  useEffect(() => {
    let l;
    if (locale !== defaultLocale) {
      l = locale;
    } else {
      l = Cookies.get('lang') || 'en';
    }
    if (l !== lang) setLang(l);
  }, [locale]);
  return lang;
}
