import React, { useEffect, useRef } from 'react';
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Container,
  Image,
  Text,
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
import PreviewInfo from '@/components/PreviewInfo';
import { detailId, detailProjectType, workId } from '@/_globals/envs';

function PageDetail({ lang = 'en', type = detailProjectType, detail: item }) {
  const refBread = useRef();
  const set = getSet(detailId, lang);
  const setWork = getSet(workId, lang);

  useEffect(() => {
    const { current: breadEl } = refBread;
    if (!breadEl) return;
    breadEl.scrollLeft = breadEl.offsetWidth;
  }, []);

  return (
    <>
      <SEO
        lang={lang}
        title={`${set.title} ${setWork?.[type].title} - ${item.name}`}
      />
      <Container
        maxW={{ sm: 'full', md: '3xl' }}
        pos="relative"
        overflow="hidden"
      >
        <Breadcrumb
          separator={<IoIosArrowForward color="gray.500" />}
          overflowX="scroll"
          className="breadcrumb"
          ref={refBread}
        >
          <BreadcrumbItem>
            <Button as={Link} href="/work">
              {setWork.name}
            </Button>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Button as={Link} href={`/work#${type}`}>
              {setWork?.[type].title}
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
            <Text textAlign="justify">{item.desc}</Text>
            <DetailInfo data={item.info} mt={2} />
          </Section>
          <Section title={set.preview} id="preview" sep={4}>
            <PreviewInfo data={item.preview} />
          </Section>
        </Box>
        <Footer />
      </Container>
    </>
  );
}

export default PageDetail;
