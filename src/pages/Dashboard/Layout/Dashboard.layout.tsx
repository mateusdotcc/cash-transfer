import React from 'react';
import { useTranslation } from 'react-i18next';

import { Aside } from 'components';

import { MoneyAvailable, Conversions, ChoosePlan } from './components';

import { Container, Center } from './Dashboard.styled';

interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

interface Props {
  onClickCountry: (country: Country) => void;
}

const DashboardLayout: React.FC<Props> = ({ onClickCountry }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <Aside />

      <Center>
        <MoneyAvailable>
          <h2>{t('dashboard:sendMoney')}</h2>

          <div>
            <span>22,124</span>
            <p>{t('dashboard:available')}</p>
          </div>
        </MoneyAvailable>

        <Conversions onClickCountry={onClickCountry} />

        <ChoosePlan />
      </Center>
    </Container>
  );
};

export default DashboardLayout;
