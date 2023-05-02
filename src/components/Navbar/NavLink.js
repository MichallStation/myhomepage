import React, { useCallback } from 'react';
import {
  AiFillGithub,
  AiOutlineHome,
  AiOutlineMenu,
  AiOutlineVideoCamera,
} from 'react-icons/ai';
import Link from 'next/link';
import {
  Box,
  Button,
  List,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  Icon,
} from '@chakra-ui/react';
import { MdWorkOutline } from 'react-icons/md';
import envs, { links } from './envs';
import { getSet } from '@/_globals/sets';
import { NavbarId } from '@/_globals/envs';

export const props = {
  Home: {
    icon: AiOutlineHome,
  },
  Work: {
    icon: MdWorkOutline,
  },
  Use: {
    icon: AiOutlineVideoCamera,
  },
  Source: {
    props: {
      target: '_blank',
    },
    // icon: <FiGithub />,
    icon: AiFillGithub,
  },
};

// export const mobileProps = {
//   Home: {
//     icon: <AiOutlineHome />,
//   },
//   Work: {
//     icon: <MdWorkOutline />,
//   },
//   Use: {
//     icon: <AiOutlineVideoCamera />,
//   },
//   Source: {
//     props: {
//       target: '_blank',
//     },
//     icon: <AiFillGithub />,
//   },
// };

const pagesRendered = Object.entries(links);

/** @param {{router: import('next/router').NextRouter}}  */
function NavLink({ lang = 'en', router }) {
  const { route: path } = router;
  // const locale = router.locale === router.defaultLocale ? 'en' : router.locale;
  // lang = lang === router.defaultLocale ? 'en' : lang;
  const set = getSet(NavbarId, lang);
  const isActive = useCallback(
    /** @param {string} p  */
    (p) => {
      if (p === '/') {
        if (path === '/') return true;
      } else if (path.startsWith(p)) return true;
      return false;
    },
    [path],
  );

  return (
    <Box display="flex" alignItems="center" ml={1}>
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
              {props[id]?.icon && <Icon as={props[id].icon} boxSize="18px" />}
              <Text ml={props[id]?.icon && 2}>{set[id]}</Text>
            </Button>
          </ListItem>
        ))}
      </List>
      <Box display={{ base: 'block', md: 'none' }} ml={2}>
        <Menu isLazy>
          <MenuButton title="Menu" as={Button} p={2} w="48px">
            <Icon
              as={AiOutlineMenu}
              boxSize="24px"
              transform="translateY(2px)"
            />
          </MenuButton>
          <MenuList>
            {pagesRendered.map(([id, item]) => (
              <MenuItem
                key={id}
                title={set[id]}
                display="flex"
                alignItems="center"
                justifyContent="center"
                p={1}
                style={{ height: envs.height }}
              >
                <Button
                  variant="unstyled"
                  backgroundColor={isActive(item.href) && 'second'}
                  as={Link}
                  // p={0}
                  // locale={lang}
                  minWidth="100%"
                  height="44px"
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
              </MenuItem>
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
}
export default NavLink;
