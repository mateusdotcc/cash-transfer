import React, { useRef, useEffect, useCallback, useState } from 'react';

import { FiAlignRight, FiX, FiBookOpen } from 'react-icons/fi';

import Menu from '../Menu/Menu';

import {
  Container,
  UserDetails,
  ButtonHamb,
  ContainerMenu,
} from './MenuMobile.styled';

const MenuMobile: React.FC = () => {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const listMenuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef && menuRef.current) {
      const menu = menuRef.current;

      window.onscroll = () => {
        if (window.scrollY > 50) {
          return menu?.classList.add('isScroll');
        }

        return menu?.classList.remove('isScroll');
      };
    }
  }, []);

  const handleClickHambButton = useCallback(() => {
    setOpen(!open);

    if (listMenuRef && listMenuRef.current) {
      const list = listMenuRef.current;

      if (list.classList.contains('is-open')) {
        return list.classList.remove('is-open');
      }

      list.classList.add('is-open');
    }
  }, [open]);

  return (
    <Container ref={menuRef}>
      <header>
        <UserDetails />

        <ButtonHamb type="button" onClick={handleClickHambButton}>
          {open ? <FiX size={18} /> : <FiAlignRight size={18} />}
        </ButtonHamb>
      </header>

      <ContainerMenu ref={listMenuRef}>
        <Menu />
      </ContainerMenu>
    </Container>
  );
};

export default MenuMobile;
