import {
  Box,
  Heading,
  Image,
  Text,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DONE, selectball3dStatus } from '@/features/slices/ui';
import { getSet } from '@/_globals/sets';

/** @type {import('@chakra-ui/react').UseToastOptions}  */
const style = {
  position: 'bottom-right',
  isClosable: true,
  colorScheme: 'seconds',
  status: 'info',
};

/** @param {{title: string | React.ReactNode, description: string | React.ReactNode}}  */
function Toast({ title, description, color, id, onClose }) {
  title =
    typeof title === 'string' ? (
      <Heading fontSize="lg">{title}</Heading>
    ) : (
      title
    );

  return (
    <Box
      className="toast"
      minW="280px"
      display="flex"
      alignItems="center"
      backdropFilter="blur(10px)"
      backgroundColor={useColorModeValue('blackAlpha.200', 'whiteAlpha.200')}
      pos="relative"
      borderRadius="32px 0 0 32px"
      boxShadow="dark-lg"
      overflow="hidden"
      p={2}
    >
      <Box
        pos="absolute"
        top={0}
        bottom={0}
        right={0}
        width="4px"
        backgroundColor={color}
      />
      <Box className="toast-icon" px={2}>
        <Image className="heartbeat" height="44px" src="/blue.png" />
      </Box>
      <Box className="toast-content">
        {title}
        <Text>{description}</Text>
      </Box>
    </Box>
  );
}

/** @param {{storage: import('@/features/@features').FeaturesStorage}}  */
function BallToast({ storage }) {
  const { lang = 'en' } = storage.current;
  const status = useSelector(selectball3dStatus);
  const toast = useToast();
  const set = getSet(BallToast.name, lang);
  const isOldguy = storage.prev?.latest;
  let setWelcome = getSet('Welcome', lang);
  setWelcome = isOldguy ? setWelcome.old : setWelcome.newbie;

  useEffect(() => {
    let t;
    if (status === DONE) {
      t = setTimeout(() => {
        toast({
          duration: 10000,
          render: (props) => (
            <Toast
              color="second"
              title={
                <Heading fontFamily="deco" fontSize="lg">
                  Blue
                </Heading>
              }
              description={setWelcome.desc}
              {...props}
            />
          ),
          position: 'bottom-right',
          isClosable: true,
        });
      }, 2000);
    }
    return () => t && clearTimeout(t);
  }, [status]);

  return React.Fragment;
}

export default BallToast;
