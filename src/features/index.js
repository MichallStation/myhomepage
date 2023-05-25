/**
 * Base on
 * Manage: Cookies & LocalStorage & Session Storage (In Application Tab)
 * Nextjs: https://nextjs.org/docs
 * Server side rendering
 */

import { setCookieForResponse } from '@/lib/next/ssr';
import cache from './cache';

const sendResCookie = async (res, cookieData) =>
  setCookieForResponse(res, cookieData);

/**
 * @param {import('next').GetServerSidePropsContext} context
 * @returns {import('../@type/features').FeaturesStorage}
 * */
export default function createFeaturesStorage(context) {
  const { req, res, locale: lang } = context;
  const latest = Date();
  if (!req || !res) {
    return {
      lang,
      latest,
    };
  }

  const [cookieData, cacheData] = cache.cookie(req.cookies, lang);
  const { url = '', cookies = {} } = req;
  const {
    cookie = '',
    authorization = '',
    location = '',
    host = '',
    origin = '',
  } = req.headers;

  sendResCookie(res, cookieData);
  return {
    ...cacheData,
    url,
    cookies,
    cookie,
    authorization,
    location,
    host,
    origin,
    lang,
    latest,
  };
}
