import { Box, Button, Code, Icon } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { BiCopy } from 'react-icons/bi';

/** @param {import("@chakra-ui/react").CodeProps} props */
function ChakraCode(props) {
  const { children, ...restProps } = props;
  const refCode = useRef();

  // const handleCopy = useCallback((e) => {
  //   const { current: copyText } = refCode;
  //   copyText.select();
  //   copyText.setSelectionRange(0, 99999); // For mobile devices

  //   // Copy the text inside the text field
  //   navigator.clipboard.writeText(copyText.value);
  // }, []);

  return (
    <Code display="block" ref={refCode} {...restProps}>
      <Box w="100%" h="100%" pos="relative">
        <Button
          pos="absolute"
          right={0}
          leftIcon={<Icon as={BiCopy} boxSize="24px" />}
          // onClick={handleCopy}
        />
      </Box>
      {children}
    </Code>
  );
}

export default ChakraCode;
