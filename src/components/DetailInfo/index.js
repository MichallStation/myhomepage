import Link from 'next/link';
import React from 'react';
import {
  Box,
  Code,
  Text,
  Icon,
  SimpleGrid,
  useColorModeValue,
  Image,
  Heading,
} from '@chakra-ui/react';
import { FaArrowsAltH } from 'react-icons/fa';

import BackgroundImage from '../BackgroundImage';
import ColorCard from '../ColorCard';

/** @type {Object<string, import('@chakra-ui/react').ThemeTypings["colorSchemes"]>} */
const schemes = {
  platform: 'red',
  stack: 'blue',
  flow: 'green',
  ui: 'teal',
  font: 'yellow',
  color: 'purple',
  dev: 'cyan',
  front: 'cyan',
  back: 'purple',
  create: 'green',
  design: 'orange',
  develop: 'twitter',
  product: 'purple',
  os: 'green',
  term: 'twitter',
  tech: 'orange',
};

function Color({ info }) {
  return (
    <SimpleGrid className="color-pattern" spacing={2} columns={[1, 2, 3]}>
      {Array.isArray(info.data[0]) ? (
        info.data.map((pattern, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <ColorCard key={`pattern-${index}`} colors={pattern} />
        ))
      ) : (
        <ColorCard colors={info.data} />
      )}
    </SimpleGrid>
  );
}

function Layout({ info }) {
  const filterValue = useColorModeValue('', 'invert(1)');
  return (
    <SimpleGrid
      className="detail-layout"
      mb={2}
      spacing={2}
      columns={[1, 2, 3]}
    >
      {info.data.map((thumbnail) => (
        <BackgroundImage
          key={thumbnail}
          // w="200px"
          // h="200px"
          filter={filterValue}
          src={thumbnail}
          w="100%"
          h="200px"
        />
      ))}
    </SimpleGrid>
  );
}

function Flow({ info }) {
  const filterValue = useColorModeValue('', 'invert(1)');
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexDir="column"
      className="detail-flow"
      mb={[-4, -8]}
      mt={-4}
      mx={[-4, -8]}
    >
      {info.data.map((thumbnail) => (
        <Image
          maxH="520px"
          alt="flow"
          title="flow"
          filter={filterValue}
          key={thumbnail}
          src={thumbnail}
          pointerEvents="none"
        />
      ))}
    </Box>
  );
}

/** @param {{data: [{id?: string}]}}  */
function DetailInfo({ data, ...props }) {
  if (!data || data?.length === 0)
    return <Box className="detail-info" {...props} />;

  return (
    <Box className="detail-info" {...props}>
      {data.length > 0 &&
        data.map((info) => (
          <Box key={info.id} mt={4}>
            {info?.heading && (
              <Heading
                className="overlay"
                fontSize="lg"
                borderRadius="0 32px 32px 0"
                px={4}
                py={2}
                // backgroundColor={headingBgColorValue}
                fontWeight="normal"
              >{`${info.heading}`}</Heading>
            )}
            {info?.name && (
              <Text fontWeight="bold" fontSize="md">{`${info.name}:`}</Text>
            )}
            {info?.content &&
              info.content.map(({ title, desc, href }) => (
                <Box key={title}>
                  <Code
                    title={title}
                    as={href && Link}
                    href={href}
                    target={href && '_blank'}
                    colorScheme={schemes?.[info.id]}
                    mr={2}
                  >
                    {title}
                  </Code>
                  {desc && (
                    <>
                      <Icon
                        as={FaArrowsAltH}
                        transform="translateY(2px)"
                        mr={2}
                      />
                      <Text title={desc} display="contents" textAlign="justify">
                        {desc}
                      </Text>
                    </>
                  )}
                </Box>
              ))}
            {info.id === 'color' && <Color info={info} />}
            {info.id === 'structure' && <Code>{info.content}</Code>}
            {info.id === 'layout' && <Layout info={info} />}
            {info.id === 'flow' && info?.data && <Flow info={info} />}
          </Box>
        ))}
    </Box>
  );
}

export default DetailInfo;
