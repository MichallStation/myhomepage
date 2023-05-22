import ChakraUIRenderer from 'chakra-ui-markdown-renderer';
import React from 'react';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import rehypeRaw from 'rehype-raw';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import shortcodes from 'remark-shortcodes';
import { MarkdownCustomComponents } from '@/lib/react-markdown-chakra';

/** @type {import('react-markdown').Components} */
const MarkdownComponents = {
  ...ChakraUIRenderer(),
  ...MarkdownCustomComponents,
};

/** @param {import('react-markdown/lib/complex-types').ReactMarkdownProps} props */
function MarkdownRender(props) {
  const { children, restProps } = props;
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw, rehypeSlug]}
      remarkPlugins={[remarkGfm, shortcodes]}
      components={MarkdownComponents}
      {...restProps}
    >
      {children}
    </ReactMarkdown>
  );
}

export default MarkdownRender;
