import React from 'react';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { DashboardState } from 'store/modules/dashboard/types';
import { useSelector } from 'react-redux';

import {
  FiArrowRight,
  FiCalendar,
  FiDollarSign,
  FiShuffle,
} from 'react-icons/fi';

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

  const {
    fromCountry,
    toCountry,
    youSend,
    recipientGets,
    delivery,
  } = useSelector((state: { dashboard: DashboardState }) => state.dashboard);

  const formatDelivery = 'D MMMM [till] Ha';

  return (
    <Container>
      <Header>
        <h2>{t('dashboard:paymentDetails')}</h2>
      </Header>

      <Conversion>
        <div>
          <span>{youSend}</span>

          <ContainerFlag>
            <Flag source={fromCountry.flag} />
            <span>{fromCountry.value}</span>
          </ContainerFlag>
        </div>

        <Equal>
          <FiArrowRight size={24} />
        </Equal>

        <div>
          <span>{recipientGets}</span>

          <ContainerFlag>
            <Flag source={toCountry.flag} />
            <span>{toCountry.value}</span>
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

          <strong>{moment(delivery).format(formatDelivery)}</strong>
        </li>

        <li>
          <span>
            <FiDollarSign />
            {t('common:conversionRate')}
          </span>

          <strong>{youSend}</strong>
        </li>

        <li>
          <span>
            <FiShuffle />
            {t('common:recipientGets')}
          </span>

          <strong>{recipientGets}</strong>
        </li>
      </ContainerTotal>

      <Submit>{t('common:button.confirm')}</Submit>
    </Container>
  );
};

export default PaymentDetails;
