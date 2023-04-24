import { Box, SimpleGrid, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { getWorksByLang } from '@/_globals/db';
import Card from '../Card';

function WorkShows({ lang = 'en', ...props }) {
  const works = getWorksByLang(lang);
  return works.length > 0 ? (
    <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
      {works.map((i) => (
        <Card
          key={i.id}
          as={Link}
          height="130px"
          maxW="280px"
          href={`/work/projs/${i.id}`}
          img={i.thumbnail}
        />
      ))}
    </SimpleGrid>
  ) : (
    <Text fontSize="2xl" align="center">
      ...
    </Text>
  );
}

export default WorkShows;
