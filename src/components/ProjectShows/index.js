import { Box } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { projs } from '@/_globals/db';
import Card from '../Card';

const getProjectsByLang = (lang = 'en') =>
  projs.map((p) => ({ id: p.id, ...p?.[lang] }));

function ProjectShows({ lang = 'en', ...props }) {
  const projects = getProjectsByLang(lang);
  return (
    <Box className="project-shows" {...props}>
      {projects.map((i) => (
        <Card
          as={Link}
          height="140px"
          width={['100%', '50%', '33%']}
          href={`/work/detail/${i.id}`}
          img={i.thumbnail}
        />
      ))}
    </Box>
  );
}

export default ProjectShows;
