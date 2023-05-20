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
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import { BackgroundImage } from '@/lib/NextChakra';
import BallGallery from '../BallGallery';

function PreviewInfo({ data, ...props }) {
  const [index, setIndex] = useState(0);
  const [modalTitle, setModalTitle] = useState(data[0]?.title);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleChange = useCallback(
    (i) => {
      setModalTitle(data[i]?.title);
    },
    [data],
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
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size="3xl"
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent
          backgroundColor={useColorModeValue(
            'whiteAlpha.300',
            'whiteAlpha.300',
            // 'blackAlpha.300',
          )}
          backdropFilter="blur(10px)"
          overflow="hidden"
          h="80vh"
          pos="relative"
        >
          <ModalHeader>{modalTitle}</ModalHeader>
          <ModalBody p={2}>
            <BallGallery
              data={data}
              originIndex={index}
              onChange={handleChange}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PreviewInfo;
