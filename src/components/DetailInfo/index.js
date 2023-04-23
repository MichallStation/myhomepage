import { Avatar, Box, Code, Text, Wrap, WrapItem } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';

function DetailInfo({ data, ...props }) {
  const schemes = {
    Platform: 'red',
    Stack: 'blue',
    Flow: 'green',
  };
  return (
    <Box className="detail-info" {...props}>
      {data.map((info) => (
        <Box key={info.name.toLowerCase()} mt={2}>
          <Text fontWeight="bold" fontSize="md">{`${info.name}:`}</Text>
          {info.content.map(({ title, desc, href }) => (
            <Box key={title}>
              <Code
                as={href && Link}
                href={href}
                target={href && '_blank'}
                colorScheme={schemes?.[info.name]}
                mr={2}
              >
                {title}
              </Code>
              <Text display="contents">{desc}</Text>
            </Box>
          ))}
        </Box>
      ))}
    </Box>
  );
}

export default DetailInfo;
