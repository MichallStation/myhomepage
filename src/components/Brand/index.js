import React from 'react';
import Link from 'next/link';
import { Box, Heading, Image } from '@chakra-ui/react';

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

function Brand(props) {
  return (
    <Box
      id="brand"
      key="brand"
      className="brand"
      as={Link}
      href="/"
      display="flex"
      alignItems="center"
      tabIndex={-1}
      {...props}
    >
      {/* <Image
        className="brand-img"
        src="/blue.png"
        alt="Blue"
        style={style.img}
        width="44px"
      /> */}
      {/* <Heading fontFamily="deco" fontSize="3xl" ml={2} style={style.heading}> */}
      <Heading fontFamily="deco" fontSize="3xl" style={style.heading}>
        Ltndat
      </Heading>
    </Box>
  );
}

export default Brand;
