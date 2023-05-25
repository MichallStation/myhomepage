import React, { useCallback, useEffect, useState } from 'react';
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
  Box,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundImage } from '@/lib/next-chakra';
import { Gallery } from '@/lib/motion-chakra-react-icons';
import {
  blue3dDone,
  blue3dPause,
  selectblue3dStatus,
  PAUSE,
  DONE,
} from '@/features/slices/ui';
import { disableScale, enableScale } from '@/lib/browser/dom';

function PreviewInfo({ data, ...props }) {
  const [index, setIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState(data[0]?.title);
  const [modalBlockMode, setModalBlockMode] = useState(true);
  const dispatch = useDispatch();
  const blue3dStatus = useSelector(selectblue3dStatus);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(
    () => () => {
      if (blue3dStatus !== DONE) dispatch(blue3dDone());
    },
    [blue3dStatus, dispatch],
  );

  const handleCLose = useCallback(() => {
    onClose();
    if (blue3dStatus !== DONE) dispatch(blue3dDone());
    enableScale();
  }, [blue3dStatus, dispatch, onClose]);

  const handleOpen = useCallback(() => {
    if (blue3dStatus !== PAUSE) dispatch(blue3dPause());
    disableScale();
    onOpen();
  }, [blue3dStatus, dispatch, onOpen]);

  const handleChange = useCallback(
    (i) => {
      setModalTitle(i?.title);
      if (!i) {
        handleCLose();
      }
    },
    [handleCLose],
  );

  const handleClick = useCallback(
    (e) => {
      setIndex(Number(e.target.dataset.index));
      handleOpen();
    },
    [handleOpen],
  );

  const handleCloseFullscreen = useCallback(() => {
    disableScale();
    setModalBlockMode(true);
  }, []);

  const handleOpenFullscreen = useCallback(() => {
    enableScale();
    setModalBlockMode(false);
  }, []);

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
        blockScrollOnMount={modalBlockMode}
        isOpen={isOpen}
        onClose={handleCLose}
        isCentered
        size="3xl"
        motionPreset="none"
      >
        <ModalOverlay
          // bg="blackAlpha.500"
          bg="blackAlpha.800"
          motionProps={{
            initial: {
              scaleY: 0,
              opacity: 0,
            },
            whileInView: {
              scaleY: 1,
              opacity: 1,
            },
            exit: {
              scaleY: 0,
              opacity: 0,
            },
            transition: { duration: 0.25 },
          }}
        />
        <ModalContent
          bgColor="transparent"
          overflow="hidden"
          pos="relative"
          // h={['100%', '80%']}
          h="80%"
          m={0}
        >
          <ModalHeader
            display="flex"
            alignItems="center"
            color="whiteAlpha.900"
            pos="relative"
            // p={2}
            py={0}
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
            {/* <ModalCloseButton
              ml={2}
              // bgColor="gray"
              bgColor="red"
              borderRadius="full"
              pos="unset"
              // top="50%"
              boxSize="44px"
              // transform="translateY(-50%)"
            /> */}
          </ModalHeader>
          <ModalBody display="flex" alignItems="center" bg="transparent" p={2}>
            <Gallery
              data={data}
              originIndex={index}
              onChange={handleChange}
              onClose={handleCLose}
              onOpenFullscreen={handleOpenFullscreen}
              onCloseFullscreen={handleCloseFullscreen}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PreviewInfo;
