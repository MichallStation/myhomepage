import { Box, Heading, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

function Section({ title, children, icon, sep = 8, ...props }) {
  return (
    <Box className="section" as="section" mt={6} {...props}>
      <Box className="section-title">
        <Heading
          display="inline-flex"
          alignItems="center"
          fontSize="2xl"
          fontWeight="normal"
          pos="relative"
          // backgroundColor='blackAlpha.500'
          _after={{
            content: '""',
            display: 'block',
            pos: 'absolute',
            height: `${sep}px`,
            backgroundColor: useColorModeValue(
              // 'blackAlpha.600',
              'currentColor',
              'currentColor',
            ),
            borderRadius: '2px',
            width: '100%',
            bottom: '-12px',
            // filter: 'contrast(0.5)',
          }}
        >
          <Box mr={2}>{title}</Box>
          {icon}
        </Heading>
      </Box>
      <Box className="section-content" mt={6} textAlign="justify">
        {children}
      </Box>
    </Box>
  );
}

export default Section;
