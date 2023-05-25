import { Box } from '@chakra-ui/react';

function PageStatic({ children }) {
  return (
    <Box
      w="100vw"
      h="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      {children}
    </Box>
  );
}

export default PageStatic;
