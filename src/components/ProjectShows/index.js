import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { getProjectsByLang, projs } from '@/_globals/db';
import Card from '../Card';

function ProjectShows({ lang = 'en', ...props }) {
  const projects = getProjectsByLang(lang);
  return (
    <Box className="project-shows" {...props}>
      {projects.map((i) => (
        <Card
          key={i.id}
          as={Link}
          height="120px"
          width={['100%', '50%', '33%']}
          href={`/work/projs/${i.id}`}
          img={i.thumbnail}
          mt={[4, 0]}
          mr={[0, 4]}
        />
      ))}
    </Box>
  );
}

export default ProjectShows;
