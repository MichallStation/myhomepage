import React from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Image,
} from '@chakra-ui/react';
import { IoIosArrowForward } from 'react-icons/io';
import Link from 'next/link';
import createFeaturesStorage from '@/features';
import E404 from '@/pages/404';
import { getProjectsByLang } from '@/_globals/db';
import SEO from '@/layouts/SEO';
import { getSet } from '@/_globals/sets';
import Section from '@/layouts/Section';
import Footer from '@/components/Footer';
import DetailInfo from '@/components/DetailInfo';

function ProjectDetail({ id, storage }) {
  const { lang } = storage;
  const projs = getProjectsByLang(lang);
  const item = projs.find((i) => i.id === id);
  if (!item) return <E404 />;

  const set = getSet(ProjectDetail.name, lang);
  const setWork = getSet('Work', lang);
  return (
    <>
      <SEO lang={lang} title={`${set.title} - ${item.name}`} />
      <Container
        maxW={{ sm: 'full', md: '2xl' }}
        pos="relative"
        overflow="hidden"
      >
        <Breadcrumb
          separator={<IoIosArrowForward color="gray.500" />}
          overflowX="scroll"
          className="breadcrumb"
        >
          <BreadcrumbItem>
            <Button as={Link} href="/work">
              {setWork.name}
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as={Link} href="/work#projs">
              {setWork.projs.title}
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem isCurrentPage>
            <Button
              as={Link}
              href="#"
              className="second-btn"
              borderRadius="3xl"
            >
              {item.name}
            </Button>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box as="article" title={item.name} id={item.id} mt={4}>
          <Box id="thumbnail" overflow="hidden" borderRadius="lg">
            <Image width="100%" src={item.thumbnail} alt={item.name} />
          </Box>
          <Section title={set.desc} id="desc" sep={4}>
            {item.desc}
            <DetailInfo data={item.info} mt={2} />
          </Section>
          <Section title={set.preview} id="preview" sep={4}>
            {}
          </Section>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

/** @param {import('next').NextPageContext} context */
export async function getServerSideProps(context) {
  return {
    props: {
      id: context.query.id || '',
      storage: createFeaturesStorage(context),
    },
  };
}

export default ProjectDetail;
