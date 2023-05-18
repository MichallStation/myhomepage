import React, { useCallback, useState } from 'react';
import { Box, Button, Input, Text, Icon } from '@chakra-ui/react';
import { BiObjectsHorizontalCenter } from 'react-icons/bi';
import { IoMailUnreadOutline, IoShareSocialOutline } from 'react-icons/io5';
import Link from 'next/link';
import { AiOutlineHeart, AiOutlineSend } from 'react-icons/ai';
import Section from '@/layouts/Section';
import envs from './envs';
import fallback from '@/globals/fallback';

/** @type {Object<string, import('@chakra-ui/react').ThemeTypings["colorSchemes"]>} */
const shemes = {
  warn: 'orange',
  error: 'red',
  normal: 'teal',
};

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Bio({ sets }) {
  const set = sets?.Bio || fallback.Bio;
  const [inputValue, setInputValue] = useState('');
  const [emailStatus, setEmailStatus] = useState(shemes.normal);

  const validate = useCallback(() => {
    setEmailStatus(shemes.error);
  }, []);
  const handleSubmit = useCallback(
    /** @param {Event} e */
    (e) => {
      e.preventDefault();
      fetch('/api/new', {
        method: 'POST',
        body: JSON.stringify({ email: inputValue }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    [inputValue],
  );

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
        {envs.map((i) => (
          <Box key={i.name}>
            <Button
              as={Link}
              title={i.name}
              href={i.href}
              leftIcon={i.icon}
              target="_blank"
              // style={style.btn}
              backgroundColor="second"
              mt={2}
            >
              {i.username}
            </Button>
          </Box>
        ))}
      </Section>
      <Section title={set?.news?.title} icon={<IoMailUnreadOutline />}>
        {set?.news?.desc}
        <Box
          as="form"
          display="flex"
          flexDir="column"
          alignItems="center"
          justifyContent="center"
          mt={6}
          p={4}
          border="4px dotted"
          borderColor="gray.600"
          borderRadius="24px"
          onSubmit={handleSubmit}
        >
          <Input
            border="2px solid"
            borderColor="gray.600"
            borderRadius="24px"
            colorScheme={emailStatus}
            maxW="md"
            size="lg"
            placeholder={set?.news?.holder || 'Your email here'}
            type="email"
            onChange={(e) => setInputValue(e.target.value)}
            onBlur={validate}
          />
          <Box display="flex" justifyContent="center" mt={3}>
            <Button
              colorScheme="teal"
              rightIcon={<Icon as={AiOutlineSend} boxSize="20px" />}
              p={5}
              fontFamily="handwrite"
              fontSize="md"
              size={['sm', 'md']}
              type="submit"
            >
              {set?.news?.btn || 'Join'}
            </Button>
          </Box>
        </Box>
      </Section>
    </>
  );
}

export default Bio;
