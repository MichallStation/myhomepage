import { Box, Heading } from '@chakra-ui/react';
import React from 'react';

function Section({ title, children, icon, sep = 8 }) {
  return (
    <Box className="section" as="section" mt={6}>
      <Box className="section-title">
        <Heading
          display="inline-flex"
          alignItems="center"
          fontSize="2xl"
          fontWeight="normal"
          pos="relative"
          _after={{
            content: '""',
            display: 'block',
            pos: 'absolute',
            height: `${sep}px`,
            backgroundColor: 'currentColor',
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
      <Box className="section-content" mt={6}>
        {children}
      </Box>
    </Box>
  );
}

export default Section;
