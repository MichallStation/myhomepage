import { serialize } from 'cookie';

/**
 * @param {import('next').NextApiResponse} res
 * @param {[import('../../@type/cookie').Cookie]} values
 * */
export function setCookieForResponse(res, values) {
  return res.setHeader(
    'Set-Cookie',
    values.map(({ name, value, options }) => serialize(name, value, options)),
  );
}

/** @param {import('next').NextPageContext} ctx */
export const isDefaultLocale = ({ defaultLocale, locale }) =>
  defaultLocale === locale;

export default {};
