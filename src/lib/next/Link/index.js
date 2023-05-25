import NextLink from 'next/link';

const isExternalLink =
  /** @param {string} url */
  (url) => url.startsWith('https');

/** @param {import("next/link").LinkProps} props */
function Link(props) {
  const { href, target, ...restProps } = props;
  let targetProp = target;
  if (!targetProp && isExternalLink(href)) {
    targetProp = '_black';
  }
  return <NextLink target={targetProp} {...restProps} />;
}

export default Link;
