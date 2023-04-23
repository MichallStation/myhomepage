import React, { useCallback } from 'react';
import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';
import { langs } from '@/_globals/sets';
import { expiresDay } from '@/utils/cookie';

/** @type {Object.<string, import('react').CSSProperties>} */
const style = {
  select: {
    // width: 40,
    // height: 40,
  },
  option: {
    // borderRadius: 12,
  },
};

function LanguageButton({ lang = 'en' }) {
  const router = useRouter();
  const handleChangeLang = useCallback(
    /** @param {Event} e */
    (e) => {
      const value = Cookies.get('lang');
      if (value === e.target.value) return;

      router.push(router.asPath, '', {
        locale: e.target.value,
        scroll: false,
      });
      Cookies.set('lang', e.target.value, {
        path: '/',
        expires: expiresDay(365),
      });
    },
    [router],
  );

  return (
    <Menu>
      <MenuButton as={Button}>{lang}</MenuButton>
      <MenuList p={2}>
        {langs.map((i) => (
          <MenuItem
            key={i}
            as={Button}
            className={i === lang && 'second-btn'}
            // as="span"
            value={i}
            style={style.option}
            onClick={handleChangeLang}
          >
            {i}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

export default LanguageButton;
