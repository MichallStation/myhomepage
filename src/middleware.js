import { NextResponse } from 'next/server';

const PUBLIC_FILE = /\.(.*)$/;

/** @param {import('next/server').NextRequest} req */
export async function middleware(req) {
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.includes('/api/') ||
    PUBLIC_FILE.test(req.nextUrl.pathname)
  ) {
    return;
  }

  if (req.nextUrl.locale === 'home') {
    const lang = req.cookies.get('lang')?.value || 'en';
    // eslint-disable-next-line consistent-return
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url),
    );
  }
}

export default {};
