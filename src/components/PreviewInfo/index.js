import {
  SimpleGrid,
  Image,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  useColorModeValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import React, { useCallback, useState } from 'react';
import BallGallery from '../BallGallery';

function PreviewInfo({ data, ...props }) {
  const [index, setIndex] = useState(0);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
        mb={['50%', 0]}
        {...props}
      >
        {data.length > 0 &&
          data.map(({ title, thumbnail }, i) => (
            <motion.div
              key={thumbnail}
              // drag
              // dragConstraints={{
              //   left: 0,
              //   right: 0,
              //   top: 0,
              //   bottom: 0,
              // }}
              whileTap={{ scale: 1.1, zIndex: 1 }}
              whileFocus={{ scale: 1.1, zIndex: 1 }}
              whileHover={{ scale: 1.1 }}
              whileDrag={{ scale: 1.1, zIndex: 1 }}
            >
              <Button
                h={['80px', '100%']}
                // h="100%"
                variant="unstyled"
                onClick={handleClick}
                title=""
                // overflow="hidden"
                display="block"
                // w="100%"
                // backgroundImage={thumbnail}
                // backgroundSize="contain"
                // backgroundRepeat="no-repeat"
              >
                <Image
                  borderRadius="lg"
                  src={thumbnail}
                  title={title}
                  alt={title}
                  boxShadow="dark-lg"
                  data-index={i}
                  backgroundColor="chakra-body-bg"
                />
              </Button>
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
          h="60vh"
          pos="relative"
          // p={2}
        >
          <ModalBody p={2}>
            <BallGallery data={data} originIndex={index} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default PreviewInfo;
