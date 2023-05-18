import { MdWorkOutline } from 'react-icons/md';
import {
  Box,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { BsBoxArrowInRight } from 'react-icons/bs';
import Section from '@/layouts/Section';
import envs from './envs';
import fallback from '@/globals/fallback';

/**
 * @param {{
 *  storage: import('@/@type/features').FeaturesStorage,
 *  sets: import('@/@type/sets').SetLang
 * }}
 * */
function Author({ sets }) {
  const set = sets?.Author || fallback.Author;
  return (
    <Box className="author">
      <Heading
        fontWeight="normal"
        fontSize="xl"
        display="block"
        textAlign="center"
        // borderRadius="xl"
        position="relative"
        p={3}
        // borderRadius="32px"
        borderRadius="12px"
        // py={3}
        // px={4}
        m={0}
        bottom={0}
        left={0}
        right={0}
        backgroundColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.300')}
      >
        {set.welcome}
      </Heading>
      <Box
        display="flex"
        flexDirection={{ base: 'column', md: 'row' }}
        justifyContent="space-around"
        alignItems="center"
        position="relative"
        mt={[3, 4]}
        // p={4}
        // backgroundColor={useColorModeValue(
        //   'blackAlpha.200',
        //   // 'whiteAlpha.300',
        // )}
        // borderRadius="32px"
      >
        <Box>
          <Heading as="h1" fontWeight="bold" fontSize="3xl" m={0}>
            {set.name}
          </Heading>
          <Text as="p" fontSize="xl">
            {set.desc}
          </Text>
        </Box>
        <Box
          className="shows-avatar"
          mt={{ base: 3, md: 0 }}
          borderRadius="full"
          border="4px solid"
          borderColor={useColorModeValue(
            'gray.700',
            // 'currentColor',
            'currentColor',
          )}
          w="132px"
          h="128px"
          backgroundColor="holder"
          backgroundSize="contain"
          backgroundRepeat="no-repeat"
          backgroundPosition="center"
          backgroundImage={envs.avatarUrl}
        />
      </Box>
      <Section title={set.worktitle} icon={<MdWorkOutline />}>
        <Text textAlign="justify">{set.workcontent}</Text>
        <Box mt={4} display="flex" justifyContent="center">
          <Button
            as={Link}
            href="/work"
            backgroundColor={useColorModeValue('prim', 'primdark')}
            // h="48px"
            // colorScheme="prim"
            color={useColorModeValue('', 'black')}
            rightIcon={<BsBoxArrowInRight />}
            p={5}
          >
            {set.workbtn}
          </Button>
        </Box>
      </Section>
    </Box>
  );
}

export default Author;
