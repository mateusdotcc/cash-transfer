import React, {
  useRef,
  useEffect,
  useCallback,
  useState,
  HTMLAttributes,
} from 'react';

import { FiAlignRight, FiX, FiList } from 'react-icons/fi';

import Menu from '../Menu/Menu';

import {
  Container,
  UserDetails,
  ButtonHamb,
  ContainerMenu,
  ContainerCtaMenu,
  ButtonCta,
  NavCta,
} from './MenuMobile.styled';

type Props = HTMLAttributes<HTMLDivElement>;

const MenuMobile: React.FC<Props> = ({ ...rest }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openCta, setOpenCta] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);
  const menuCtaRef = useRef<HTMLDivElement>(null);
  const listMenuRef = useRef<HTMLDivElement>(null);

  const handleClickHambButton = useCallback(() => {
    setOpenMenu(!openMenu);

    if (listMenuRef && listMenuRef.current) {
      const list = listMenuRef.current;

      if (list.classList.contains('is-open')) {
        return list.classList.remove('is-open');
      }

      list.classList.add('is-open');
    }
  }, [openMenu]);

  const handleClickCtaOutside = useCallback((event: MouseEvent) => {
    if (menuCtaRef.current) {
      if (!(menuCtaRef.current! as any).contains(event.target)) {
        setOpenCta(false);
      }
    }
  }, []);

  useEffect(() => {
    if (menuRef && menuRef.current) {
      const menu = menuRef.current;

      menu.classList.add('animate');

      window.onscroll = () => {
        if (window.scrollY > 50) {
          return menu?.classList.add('isScroll');
        }

        return menu?.classList.remove('isScroll');
      };
    }

    if (openCta) {
      document.addEventListener('click', handleClickCtaOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickCtaOutside, true);
    };
  }, [handleClickCtaOutside, openCta]);

  return (
    <Container ref={menuRef} {...rest}>
      <header>
        <UserDetails />

        <ButtonHamb type="button" onClick={handleClickHambButton}>
          {openMenu ? <FiX size={18} /> : <FiAlignRight size={18} />}
        </ButtonHamb>
      </header>

      <ContainerMenu ref={listMenuRef}>
        <Menu />
      </ContainerMenu>

      <ContainerCtaMenu ref={menuCtaRef}>
        <NavCta className={openCta ? 'is-open-cta' : ''} />

        <ButtonCta type="button" onClick={() => setOpenCta(!openCta)}>
          {openCta ? <FiX size={18} /> : <FiList size={18} />}
        </ButtonCta>
      </ContainerCtaMenu>
    </Container>
  );
};

export default MenuMobile;
