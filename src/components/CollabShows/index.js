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
} from '@chakra-ui/react';
import React from 'react';
import { motion } from 'framer-motion';
// import data from './data';

function CollabShows({ data, ...props }) {
  return (
    <Wrap className="project-shows" overflow="visible" {...props}>
      {data.map(
        (i) =>
          !i?.delete && (
            <Popover key={i.name}>
              <PopoverTrigger>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.8 }}
                  whileFocus={{ scale: 1.2 }}
                  style={{ display: 'inline-block' }}
                >
                  <WrapItem as={Button} variant="unstyled" h="100%">
                    <Avatar name={i.name} title={i.name} src={i.thumbnail} />
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
                  <Heading fontSize="lg">{i.name}</Heading>
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
                </PopoverBody>
              </PopoverContent>
            </Popover>
          ),
      )}
    </Wrap>
  );
}

export default CollabShows;
