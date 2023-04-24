/**
 * Base on
 * Manage: Cookies & LocalStorage & Session Storage (In Application Tab)
 * Nextjs: https://nextjs.org/docs
 */

import { expiresDay } from '@/utils/cookie';
import { isDefaultLocale, setCookieForResponse } from '@/lib/next';

// /** @type {import('./@features').FeaturesStorage} */
export const initialValues = {
  lang: 'en',
  latest: Date(),
};

/** @param {import('next').NextPageContext} ctx */
export const isFirstTime = (ctx) =>
  ctx.req.cookies?.latest === undefined &&
  !ctx.locales.find((i) => ctx.req.cookies?.lang === i);

/** @param {import('next').NextApiRequest} req */
export function extractDataFromRequest(req) {
  return {
    ...req.headers,
    ...req.cookies,
  };
}

/**
 * @param {import('next').NextPageContext} context
 * @returns {import('./@features').FeaturesStorage}
 * */
export default function createFeaturesStorage(context) {
  const { req, res, locale } = context;
  const result = initialValues;
  if (!req || !res) return result;

  result.latest = Date();
  /** @type {[import('@/lib/next/@next').Cookie]} */
  const data = [
    {
      name: 'latest',
      value: result.latest,
      options: {
        path: '/',
        expires: expiresDay(365),
      },
    },
  ];

  if (isFirstTime(context)) {
    result.lang = 'en';
    if (!isDefaultLocale(context)) {
      result.lang = locale;
    }
    data.push({
      name: 'lang',
      value: result.lang,
      options: {
        path: '/',
        expires: expiresDay(365),
      },
    });
  } else {
    result.lang = req.cookies?.lang || 'en';
    if (!isDefaultLocale(context)) {
      result.lang = locale;
      if (locale !== req.cookies.lang) {
        data.push({
          name: 'lang',
          value: result.lang,
          options: {
            path: '/',
            expires: expiresDay(365),
          },
        });
      }
    }
  }
  setCookieForResponse(res, data);

  return {
    // ...result,
    current: result,
    prev: extractDataFromRequest(req),
  };
}
