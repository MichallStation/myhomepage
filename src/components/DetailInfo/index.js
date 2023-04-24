import {
  Avatar,
  Box,
  Code,
  Text,
  Icon,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { FaArrowsAltH } from 'react-icons/fa';

function DetailInfo({ data, ...props }) {
  const schemes = {
    platform: 'red',
    stack: 'blue',
    flow: 'green',
  };
  return (
    <Box className="detail-info" {...props}>
      {data &&
        data.map((info) => (
          <Box key={info.id} mt={2}>
            <Text fontWeight="bold" fontSize="md">{`${info.name}:`}</Text>
            {info.content.map(({ title, desc, href }) => (
              <Box key={title}>
                <Code
                  as={href && Link}
                  href={href}
                  target={href && '_blank'}
                  colorScheme={schemes?.[info.id]}
                  mr={2}
                >
                  {title}
                </Code>
                {desc && <Icon as={FaArrowsAltH} mr={2} />}
                {desc && <Text display="contents">{desc}</Text>}
              </Box>
            ))}
          </Box>
        ))}
    </Box>
  );
}

export default DetailInfo;
