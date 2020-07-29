import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiShuffle,
} from 'react-icons/fi';

import FlagAsset from 'assets/images/flag.png';

import {
  Container,
  Header,
  Conversion,
  Equal,
  ContainerFlag,
  Flag,
  Divider,
  ContainerTotal,
  Submit,
} from './PaymentsDetails.styled';

const PaymentDetails: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <h2>{t('dashboard:paymentDetails')}</h2>
      </Header>

      <Conversion>
        <div>
          <span>22,124</span>

          <ContainerFlag>
            <Flag source={FlagAsset} />
            <span>BRL</span>
          </ContainerFlag>
        </div>

        <Equal>
          <FiArrowRight size={24} />
        </Equal>

        <div>
          <span>22,124</span>

          <ContainerFlag>
            <Flag source={FlagAsset} />
            <span>EUR</span>
          </ContainerFlag>
        </div>
      </Conversion>

      <Divider />

      <ContainerTotal>
        <li>
          <span>
            <FiCalendar />
            {t('common:delivery')}
          </span>

          <strong>26 July till 12pm</strong>
        </li>

        <li>
          <span>
            <FiDollarSign />
            {t('common:conversionRate')}
          </span>

          <strong>22,124</strong>
        </li>

        <li>
          <span>
            <FiShuffle />
            {t('common:recipientGets')}
          </span>

          <strong>4,124</strong>
        </li>
      </ContainerTotal>

      <Submit>{t('common:button.confirm')}</Submit>
    </Container>
  );
};

export default PaymentDetails;
