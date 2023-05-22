import React, { useCallback, useState } from 'react';
import {
  SimpleGrid,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useColorModeValue,
  ModalHeader,
  Heading,
  ModalCloseButton,
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { BackgroundImage } from '@/lib/next-chakra';
import { Gallery } from '@/lib/motion-chakra-react-icons';

function PreviewInfo({ data, ...props }) {
  const [index, setIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState(data[0]?.title);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = useCallback(
    (i) => {
      setModalTitle(i?.title);
      if (!i) {
        onClose();
      }
    },
    [onClose],
  );

  const handleClick = useCallback(
    (e) => {
      setIndex(Number(e.target.dataset.index));
      onOpen();
    },
    [onOpen],
  );

  return (
    <>
      <SimpleGrid
        spacing={2}
        columns={[1, 2, 3]}
        className="preview-info"
        // mb={['50%', 0]}
        {...props}
      >
        {data.length > 0 &&
          data.map(({ title, thumbnail }, i) => (
            <motion.div
              key={thumbnail}
              whileTap={{ scale: 1.1, zIndex: 1 }}
              whileFocus={{ scale: 1.1, zIndex: 1 }}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.1, zIndex: 1 }}
              style={{ width: '100%', height: '100%' }}
            >
              <BackgroundImage
                as={Button}
                maxW={['100%', '320px']}
                minH="160px"
                h={['80px', '100%']}
                w="100%"
                variant="unstyled"
                onClick={handleClick}
                display="block"
                backgroundColor="holder"
                // backgroundSize="cover"
                backgroundSize="contain"
                backgroundRepeat="no-repeat"
                backgroundPosition="center"
                backgroundImage={thumbnail}
                boxShadow="dark-lg"
                data-index={i}
                title={title}
              />
            </motion.div>
          ))}
      </SimpleGrid>
      <Modal
        blockScrollOnMount
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay
          // bg="blackAlpha.500"
          bg="blackAlpha.800"
        />
        <ModalContent
          // backgroundColor={useColorModeValue(
          //   'whiteAlpha.300',
          //   'whiteAlpha.300',
          //   // 'blackAlpha.300',
          // )}
          bgColor="transparent"
          // backdropFilter="blur(10px)"
          overflow="hidden"
          h="80vh"
          pos="relative"
        >
          <ModalHeader
            display="flex"
            alignItems="center"
            color="whiteAlpha.900"
            pos="relative"
            p={0}
            px={2}
          >
            <Box flex={1}>
              <Heading
                fontSize={['xl', '2xl']}
                fontFamily="handwrite"
                display="contents"
                backgroundColor={useColorModeValue(
                  'whiteAlpha.300',
                  'whiteAlpha.300',
                  // 'blackAlpha.300',
                )}
                p={2}
                borderRadius="24px"
                // textAlign="center"
              >
                {modalTitle}
              </Heading>
            </Box>
            <ModalCloseButton
              ml={2}
              bgColor="gray"
              borderRadius="full"
              pos="unset"
              // top="50%"
              boxSize="44px"
              // transform="translateY(-50%)"
            />
          </ModalHeader>
          <ModalBody bg="transparent" p={2}>
            <Gallery
              data={data}
              originIndex={index}
              onChange={handleChange}
              onClose={onClose}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PreviewInfo;
