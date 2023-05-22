import { expiresDay } from '@/lib/cookie';

function cookie(cookies, lang) {
  const latest = Date();
  const firstTime = cookies?.latest === undefined;
  /** @type {[import('@/@type/cookie').Cookie]} */
  const cookieData = [
    {
      name: 'latest',
      value: latest,
      options: {
        path: '/',
        expires: expiresDay(365),
      },
    },
  ];
  if (cookies?.lang !== lang) {
    cookieData.push({
      name: 'lang',
      value: lang,
      options: {
        path: '/',
        expires: expiresDay(365),
      },
    });
  }
  return [
    cookieData,
    {
      latest,
      lang,
      newbie: firstTime,
    },
  ];
}

export default {
  cookie,
};
