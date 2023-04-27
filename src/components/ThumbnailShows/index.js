import { SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import Card from '../Card';

function ThumbnailShows({ data, type }) {
  return (
    <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
      {data.map((i) => (
        <Card
          key={i.id}
          as={Link}
          height="160px"
          maxW="320px"
          w="100%"
          title={i.name}
          href={`/work/${type}/${i.id}`}
          img={i.thumbnail}
        />
      ))}
    </SimpleGrid>
  );
}

export default ThumbnailShows;
