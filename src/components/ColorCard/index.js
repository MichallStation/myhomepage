import { Box, useColorModeValue } from '@chakra-ui/react';
import React from 'react';

const setHeight = (index) => {
  if (index === 0) return '30%';
  if (index === 1) return '30%';
  return '20%';
};

function ColorCard({ colors = ['#000', '#fff', 'blue', 'green'], ...props }) {
  return (
    <Box
      h="200px"
      w={['100%', '200px']}
      maxW="200px"
      borderRadius="24px"
      className="color-card"
      overflow="hidden"
      // boxShadow="dark-lg"
      border="4px solid"
      color={useColorModeValue('black', 'gray')}
      mt={2}
      {...props}
    >
      {colors.map((color, index) => (
        <Box
          key={color}
          h={setHeight(index)}
          w="100%"
          className="color-card-item"
          bgColor={color}
        />
      ))}
    </Box>
  );
}

export default ColorCard;
