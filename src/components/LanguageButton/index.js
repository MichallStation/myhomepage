import { useRouter } from 'next/router';
import React, { useCallback } from 'react';
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from '@chakra-ui/react';
import Cookies from 'js-cookie';
import { expiresDay } from '@/lib/cookie';
import { list as langList } from '@/globals/langs';
import envs from './envs';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  select: {
    // width: '44px',
    height: '44px',
  },
  option: {
    height: '48px',
  },
};

function LanguageButton() {
  const router = useRouter();
  const { locale: lang } = router;
  const handleChangeLang = useCallback(
    /** @param {Event} e */
    (e) => {
      // const value = Cookies.get('lang');
      if (lang === e.target.value) return;

      router.push(router.asPath, '', {
        locale: e.target.value,
        scroll: false,
      });
      Cookies.set('lang', e.target.value, {
        path: '/',
        expires: expiresDay(365),
      });
    },
    [lang, router],
  );

  return (
    <Menu isLazy closeOnSelect closeOnBlur={false}>
      <MenuButton as={Button} style={style.select}>
        {router.locale}
      </MenuButton>
      <MenuList p={2}>
        {langList.map((i) => (
          <MenuItem
            key={i}
            as={Button}
            // className={i === lang && 'second-btn'}
            bgColor={i === lang && 'second'}
            // as="span"
            value={i}
            style={style.option}
            onClick={handleChangeLang}
            mt={1}
          >
            {envs?.[i]}
            <Text pointerEvents="none" ml={2}>
              {i}
            </Text>
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageButton;
