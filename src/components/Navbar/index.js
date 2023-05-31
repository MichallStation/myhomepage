import { Router, useRouter } from 'next/router';
import Link from 'next/link';
import React, { useCallback, useEffect } from 'react';
import {
  Box,
  Button,
  Container,
  Icon,
  List,
  ListItem,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useProgress } from '@/features/hooks';
import langs from '@/globals/langs';
import Logo from '../Brand';
import ThemeButton from '../ThemeButton';
import LanguageButton from '../LanguageButton';
import BallProgress from '../BallProgress';
import envs, { links } from './envs';
import { hapticFeedback } from '@/lib/browser/hard';
import { icon } from '@/globals';
import { useScroll } from '@/lib/react';

export const props = {
  Home: {
    icon: icon.home.Icon,
  },
  Work: {
    icon: icon.work.Icon,
  },
  Use: {
    icon: icon.use.Icon,
  },
  Article: {
    icon: icon.article.Icon,
  },
  Source: {
    props: {
      target: '_blank',
    },
    // icon: <FiGithub />,
    icon: icon.other.github.Icon,
  },
};

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  nav: {
    left: 0,
    right: 0,
    top: 0,
    backdropFilter: 'blur(10px)',
    position: 'fixed',
  },
  container: {
    height: envs.height,
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    display: 'flex',
    alignItems: 'center',
  },
  linkActive: {
    textDecoration: 'underline',
    fontWeight: 'bold',
  },
};

const pagesRendered = Object.entries(links);

/** @param {{storage: import('@/@type/features').FeaturesStorage}}  */
function Navbar() {
  const router = useRouter();
  const { route: path, query, locale } = router;
  const set = langs[locale].Navbar;
  const { setLoading, setDone } = useProgress();
  const scrollState = useScroll();

  const isActive = useCallback(
    /** @param {string} p  */
    (p) => {
      if (query?.page) {
        return p.startsWith(`/${query.page}`);
      }
      if (p === '/') {
        if (path === '/') return true;
      } else if (path.startsWith(p)) return true;
      return false;
    },
    [path, query.page],
  );

  useEffect(() => {
    const handleChangeStart = (url) => {
      hapticFeedback();
      return url !== router.pathname && setLoading();
    };
    const handleChangeComplete = () => setDone();

    Router.events.on('routeChangeStart', handleChangeStart);
    Router.events.on('routeChangeComplete', handleChangeComplete);
    return () => {
      Router.events.off('routeChangeStart', handleChangeStart);
      Router.events.off('routeChangeComplete', handleChangeComplete);
    };
  }, [router, setDone, setLoading]);

  return (
    <>
      <Box
        id="navbar"
        path={router.asPath}
        as="nav"
        zIndex="docked"
        left={0}
        right={0}
        top={0}
        backdropFilter="blur(10px)"
        pos="fixed"
      >
        <Container
          maxW={{ sm: 'full', md: '4xl' }}
          style={style.container}
          px={4}
        >
          <Logo width={envs.logoHeight} />
          <Box display="flex">
            <Box display="flex" alignItems="center">
              <LanguageButton />
              <ThemeButton ml={2} />
            </Box>
            <List display={{ base: 'none', md: 'flex' }}>
              {pagesRendered.map(([id, item]) => (
                <ListItem
                  key={id}
                  title={id}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  ml={2}
                  style={{ height: envs.height }}
                >
                  <Button
                    backgroundColor={isActive(item.href) && 'second'}
                    as={Link}
                    variant="unstyled"
                    title={set[id]}
                    // locale={lang}
                    p={2}
                    minWidth="60px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    fontSize="md"
                    href={item.href}
                    borderRadius="4px"
                    {...props[id]?.props}
                  >
                    {props[id]?.icon && (
                      <Icon as={props[id].icon} boxSize="18px" />
                    )}
                    <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
                  </Button>
                </ListItem>
              ))}
            </List>
          </Box>
        </Container>
        <BallProgress />
      </Box>
      <Box
        as="nav"
        id="nav-mobile"
        display={{ base: 'block', md: 'none' }}
        height={`${envs.height}px`}
        bg={useColorModeValue('light', 'dark')}
        pos="fixed"
        bottom={0}
        left={0}
        right={0}
        transform={
          scrollState.vertical === 'down'
            ? `translateY(${envs.height}px)`
            : 'translateY(0)'
        }
        transition="ease 0.3s transform"
        zIndex="docked"
      >
        <Container
          maxW={{ sm: 'full', md: '4xl' }}
          h="100%"
          display="flex"
          justifyContent="center"
          px={[0, 4]}
        >
          {pagesRendered.map(([id, item], index) => (
            <Button
              backgroundColor={isActive(item.href) && 'second'}
              as={Link}
              variant="unstyled"
              title={set[id]}
              // locale={lang}
              p={2}
              h="100%"
              // minWidth="60px"
              // minWidth="68px"
              w="20%"
              maxWidth="72px"
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDir="column"
              fontSize="md"
              href={item.href}
              borderRadius={index === 0 ? '0 12px 12px 0' : '12px'}
              {...props[id]?.props}
            >
              {props[id]?.icon && <Icon as={props[id].icon} boxSize="18px" />}
              <Text fontSize="sm">{set[id]}</Text>
            </Button>
          ))}
        </Container>
      </Box>
    </>
  );
}

export default Navbar;
