import React, { useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import {
  FiGrid,
  FiRepeat,
  FiShuffle,
  FiCreditCard,
  FiDatabase,
  FiSettings,
  FiLogOut,
} from 'react-icons/fi';

import User from './components/User/User';

import {
  Container,
  ButtonItem,
  ListPrimary,
  ListSecondary,
} from './Menu.styled';

const Menu: React.FC = () => {
  const { t } = useTranslation(['aside']);

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef && containerRef.current) {
      return containerRef.current?.classList.add('animate');
    }
  }, []);

  return (
    <Container ref={containerRef}>
      <User className="container-user-details" />

      <ListPrimary>
        <li>
          <ButtonItem icon={FiGrid} onClick={() => alert(t('services'))}>
            {t('services')}
          </ButtonItem>
        </li>

        <li>
          <ButtonItem icon={FiRepeat} onClick={() => alert(t('transactions'))}>
            {t('transactions')}
          </ButtonItem>
        </li>

        <li>
          <ButtonItem
            isActive
            icon={FiShuffle}
            onClick={() => alert(t('sendMoney'))}
            disabled
          >
            {t('sendMoney')}
          </ButtonItem>
        </li>

        <li>
          <ButtonItem icon={FiCreditCard} onClick={() => alert(t('cards'))}>
            {t('cards')}
          </ButtonItem>
        </li>

        <li>
          <ButtonItem icon={FiDatabase} onClick={() => alert(t('history'))}>
            {t('history')}
          </ButtonItem>
        </li>
      </ListPrimary>

      <ListSecondary>
        <li>
          <ButtonItem icon={FiSettings} onClick={() => alert(t('settings'))}>
            {t('settings')}
          </ButtonItem>
        </li>

        <li>
          <ButtonItem icon={FiLogOut} onClick={() => alert(t('logOut'))}>
            {t('logOut')}
          </ButtonItem>
        </li>
      </ListSecondary>
    </Container>
  );
};

export default Menu;
