import Link from 'next/link';
import React, { useMemo } from 'react';
import {
  Avatar,
  Box,
  Button,
  Code,
  Heading,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Text,
  Wrap,
  WrapItem,
  Icon,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  AiFillGithub,
  AiFillHome,
  AiFillInstagram,
  AiFillLinkedin,
  AiOutlineTwitter,
} from 'react-icons/ai';
import { CiGlobe } from 'react-icons/ci';
import { IoLogoWhatsapp } from 'react-icons/io';
import { FaFacebook, FaFacebookMessenger } from 'react-icons/fa';
import { BackgroundImage } from '@/lib/next-chakra';
// import data from './data';

const isLink =
  /** @param {string} url */
  (url) => url.startsWith('https');

const icons = {
  unknown: CiGlobe,
  web: AiFillHome,
  twitter: AiOutlineTwitter,
  github: AiFillGithub,
  facebook: FaFacebook,
  messenger: FaFacebookMessenger,
  whatsapp: IoLogoWhatsapp,
  linkedin: AiFillLinkedin,
  instagram: AiFillInstagram,
};

const links = {
  twitter: 'https://twitter.com',
  github: 'https://github.com',
  facebook: 'https://facebook.com',
  messenger: 'https://facebook.com',
  whatsapp: 'whatsapp://send?phone=',
  linkedin: 'https://linkedin.com/in',
  instagram: 'https://www.instagram.com',
};

function Social({ data, ...props }) {
  const unpackData = useMemo(() => Object.entries(data), [data]);
  return (
    <Box flexWrap="wrap" display="flex" mt={2} {...props}>
      {unpackData.map(([typeSocial, linkOrUsername]) => (
        <Button
          as={Link}
          target="_blank"
          borderRadius="full"
          href={
            isLink(linkOrUsername)
              ? linkOrUsername
              : `${links?.[typeSocial]}/${linkOrUsername}`
          }
          mr={2}
        >
          <Icon as={icons?.[typeSocial] || icons.unknown} boxSize="24px" />
        </Button>
      ))}
    </Box>
  );
}

function CollabShows({ data, ...props }) {
  return (
    <Wrap className="project-shows" overflow="visible" {...props}>
      {data.map(
        (i) =>
          !i?.delete && (
            <Popover key={i?.name || i?.title}>
              <PopoverTrigger>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  whileFocus={{ scale: 1.2 }}
                  style={{ display: 'inline-block' }}
                >
                  <WrapItem as={Button} variant="unstyled" h="100%">
                    <BackgroundImage
                      as={Avatar}
                      // backgroundColor="holder"
                      name={i?.name || i?.title}
                      title={i?.name || i?.title}
                      src={i.thumbnail}
                    />
                  </WrapItem>
                </motion.div>
              </PopoverTrigger>
              <PopoverContent
                py={2}
                px={4}
                display="inline-block"
                borderRadius="32px"
              >
                <PopoverBody>
                  <Heading fontSize="lg">{i?.name || i?.title}</Heading>
                  <Box display="flex" alignItems="center" mt={2}>
                    <Text mr={2}>{i.role.title}:</Text>
                    <Code
                      colorScheme="blue"
                      textAlign="center"
                      py={2}
                      px={4}
                      borderRadius="32px"
                    >
                      {i.role.content}
                    </Code>
                  </Box>
                  {i?.info && (
                    <Box mt={2}>
                      {i.info.map(({ title, content }) => (
                        <Text>
                          <Code>{title}</Code> {content}
                        </Text>
                      ))}
                    </Box>
                  )}
                  {i?.social && <Social data={i.social} />}
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ),
      )}
    </Wrap>
  );
}

export default CollabShows;
