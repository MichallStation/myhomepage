import { SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { getProjectsByLang } from '@/_globals/db';
import Card from '../Card';

function ProjectShows({ lang = 'en', ...props }) {
  const projects = getProjectsByLang(lang);
  return (
    <SimpleGrid columns={[1, 2, 3]} mt={4} spacing={4}>
      {projects.map((i) => (
        <Card
          key={i.id}
          as={Link}
          height="160px"
          maxW="320px"
          w="100%"
          title={i.name}
          href={`/work/projs/${i.id}`}
          img={i.thumbnail}
        />
      ))}
    </SimpleGrid>
  );
}

export default ProjectShows;
