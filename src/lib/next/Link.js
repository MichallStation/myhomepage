import { useRouter } from 'next/router';
import React from 'react';

/** @param {import("next/link").LinkProps} props */
function Link({ children }) {
  const { locale } = useRouter();
  return <Link />;
}

export default Link;
