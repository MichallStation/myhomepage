import React from 'react';
import { Box, Button, Text } from '@chakra-ui/react';
import { BiObjectsHorizontalCenter } from 'react-icons/bi';
import { IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AiOutlineHeart } from 'react-icons/ai';
import Section from '@/layouts/Section';
import data from './envs';
// import sets from './sets';
import { getSet } from '@/_globals/sets';
import { BioId } from '@/_globals/envs';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  btn: {
    // color: 'var(--primary-color)',
    // backgroundColor: 'transparent',
  },
};

function Bio({ lang = 'en' }) {
  const set = getSet(BioId, lang);

  return (
    <>
      <Section title={set.bio.title} icon={<BiObjectsHorizontalCenter />}>
        {set.bio.content.map(([year, desc]) => (
          <Box key={year} display="flex" mt={1}>
            <Text textAlign="justify" mr={4}>
              <span style={{ fontWeight: 'bold', marginRight: '12px' }}>
                {year}
              </span>
              {desc}
            </Text>
          </Box>
        ))}
      </Section>
      <Section title={set.love.title} icon={<AiOutlineHeart />}>
        <Text textAlign="justify">
          {set.love.content.map(({ name, href }) =>
            href ? (
              <span key={name}>
                <Button
                  as={Link}
                  href={href}
                  variant="link"
                  target="_blank"
                  colorScheme="pink"
                >
                  {name}
                </Button>
                {', '}
              </span>
            ) : (
              <span key={name}>
                {name}
                {', '}
              </span>
            ),
          )}
          ...
        </Text>
      </Section>
      <Section title={set.social.title} icon={<IoShareSocialOutline />}>
        {data.map((i) => (
          <Box key={i.name}>
            <Button
              // className="prim-btn-outline"
              // className="second-btn"
              as={Link}
              title={i.name}
              href={i.href}
              leftIcon={i.icon}
              target="_blank"
              style={style.btn}
              backgroundColor="second"
              // h="48px"
              mt={2}
            >
              {i.username}
            </Button>
          </Box>
        ))}
      </Section>
    </>
  );
}

export default Bio;
