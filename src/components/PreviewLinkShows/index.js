import Link from 'next/link';
import React from 'react';
import { LinkPreview } from '@dhaiwat10/react-link-preview';
import { SimpleGrid } from '@chakra-ui/react';
import CardInternal from '../CardInternal';

/** @param {string} url */
const isExternalLink = (url) => url.startsWith('https');

function PreviewLinkShows({ lang = 'en', data, ...props }) {
  return (
    <SimpleGrid
      className="link-preview-shows"
      columns={[1, 2, 3]}
      mt={4}
      spacingX={[0, 4]}
      spacingY={4}
      {...props}
    >
      {data.map((url) =>
        isExternalLink(url) ? (
          <LinkPreview url={url} width="400px" />
        ) : (
          <CardInternal
            key={url}
            as={Link}
            w="100%"
            href={url}
            url={url}
            lang={lang}
          />
        ),
      )}
    </SimpleGrid>
  );
}

export default PreviewLinkShows;
