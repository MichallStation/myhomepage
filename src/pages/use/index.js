import React, { useMemo } from 'react';
import {
  Box,
  Button,
  Container,
  Heading,
  Image,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import createFeaturesStorage from '@/features';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import { useId } from '@/_globals/envs';
import Footer from '@/components/Footer';
import Section from '@/layouts/Section';
import { getArticleByLang } from '@/_globals/db';
import PopupArticle from '@/layouts/PopupArticle';

function Detail({ data, trigger, ...props }) {
  return (
    <motion.div
      drag
      dragConstraints={{
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }}
      whileTap={{ scale: 1.1, zIndex: 1 }}
      whileFocus={{ scale: 1.1, zIndex: 1 }}
      whileHover={{ scale: 1.1, zIndex: 1 }}
      whileDrag={{ scale: 1.1, zIndex: 1 }}
    >
      <Button
        overflow="hidden"
        variant="unstyled"
        borderRadius="32px"
        w="100%"
        h="100%"
        pos="relative"
        onClick={trigger}
        {...props}
      >
        <Image
          filter="brightness(0.5)"
          src={data.thumbnail}
          objectFit="cover"
          w="100%"
          h="100%"
        />
        <Box
          top="50%"
          // left="50%"
          left={0}
          right={0}
          // bottom=''
          // transform="translate(-50%, -50%)"
          pos="absolute"
          // color="chakra-body-bg"
          color="whiteAlpha.800"
          textAlign="center"
        >
          <Heading>{data.title}</Heading>
          <Text display="block">{data.desc}</Text>
        </Box>
      </Button>
    </motion.div>
  );
}

/** @param {{storage: import('@/features/@features').FeaturesStorage}} */
function Use({ storage }) {
  const { lang } = storage.current;
  const set = getSet(useId, lang);
  const articles = useMemo(() => getArticleByLang(lang), [lang]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <SEO lang={lang} title={set.title} />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        // overflow="hidden"
      >
        <Heading
          fontSize="xl"
          textAlign="center"
          borderRadius="12px"
          // fontWeight="normal"
          p={3}
          backgroundColor="second"
        >
          {set?.slogan}
        </Heading>
        <Tabs variant="soft-rounded" colorScheme="seconds" mt={8}>
          <TabList overflowX="scroll" overflowY="hidden">
            {set.uses.map((i) => (
              <Tab h="48px" minW="100px" key={i.id}>
                {i.title}
              </Tab>
            ))}
          </TabList>
          <TabPanels mt={4}>
            {articles.map((i) => (
              <TabPanel key={i.id} p={0}>
                <Detail trigger={onOpen} data={i} height="40vh" />
              </TabPanel>
            ))}
          </TabPanels>
        </Tabs>
        <Footer lang={lang} />
      </Container>
      <Modal
        blockScrollOnMount={false}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
        size={['full', 'full', '3xl']}
        motionPreset="slideInBottom"
      >
        <ModalOverlay bg="blackAlpha.800" />
        <ModalContent
          backgroundColor={useColorModeValue(
            'whiteAlpha.800',
            'whiteAlpha.800',
            // 'blackAlpha.300',
          )}
          backdropFilter="blur(10px)"
        >
          <ModalCloseButton />
          <ModalBody p={2}>
            <PopupArticle />
            {/* <BallGallery data={data} originIndex={index} /> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: { storage: createFeaturesStorage(context) },
  };
}

export default Use;
