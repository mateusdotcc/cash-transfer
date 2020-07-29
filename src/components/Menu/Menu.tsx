import React from 'react';
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

import { Container, Link, ListPrimary, ListSecondary } from './Menu.styled';

const Menu: React.FC = () => {
  const { t } = useTranslation(['aside']);

  return (
    <Container>
      <User />

      <ListPrimary>
        <li>
          <Link icon={FiGrid} onClick={() => alert(t('services'))}>
            {t('services')}
          </Link>
        </li>

        <li>
          <Link icon={FiRepeat} onClick={() => alert(t('transactions'))}>
            {t('transactions')}
          </Link>
        </li>

        <li>
          <Link icon={FiShuffle} onClick={() => alert(t('sendMoney'))}>
            {t('sendMoney')}
          </Link>
        </li>

        <li>
          <Link icon={FiCreditCard} onClick={() => alert(t('cards'))}>
            {t('cards')}
          </Link>
        </li>

        <li>
          <Link icon={FiDatabase} onClick={() => alert(t('history'))}>
            {t('history')}
          </Link>
        </li>
      </ListPrimary>

      <ListSecondary>
        <li>
          <Link icon={FiSettings} onClick={() => alert(t('settings'))}>
            {t('settings')}
          </Link>
        </li>

        <li>
          <Link icon={FiLogOut} onClick={() => alert(t('logOut'))}>
            {t('logOut')}
          </Link>
        </li>
      </ListSecondary>
    </Container>
  );
};

export default Menu;
