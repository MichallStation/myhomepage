import React from 'react';
import Link from 'next/link';
import { Box, Heading } from '@chakra-ui/react';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  heading: {
    letterSpacing: '3px',
    fontWeight: 'bold',
  },
  img: {
    borderRadius: '50%',
    width: '44px',
  },
};

/** @param {import('@chakra-ui/react').BoxProps} props */
function Brand(props) {
  const { title = 'Ltndat', ...restProps } = props;

  return (
    <Box
      // id="brand"
      key="brand"
      className="brand"
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      tabIndex={-1}
      {...restProps}
    >
      {/* <Image
        className="brand-img"
        src="/blue.png"
        alt="Blue"
        style={style.img}
        width="44px"
      /> */}
      {/* <Heading fontFamily="deco" fontSize="3xl" ml={2} style={style.heading}> */}
      {/* <Icon className="brand-icon" as={IoFootball} boxSize="24px" mr={1} /> */}
      <Heading fontFamily="deco" fontSize="3xl" style={style.heading}>
        {title}
      </Heading>
    </Box>
  );
}

export default Brand;
