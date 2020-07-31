import React from 'react';
import { useTranslation } from 'react-i18next';
import currency from 'currency.js';

import { Country, DashboardState } from 'store/modules/dashboard/types';
import { useSelector } from 'react-redux';

import { Aside, MenuMobile } from 'components';

import {
  MoneyAvailable,
  Conversions,
  ChoosePlan,
  PaymentDetails,
  Nav,
} from './components';

import { Container, Header, Center, Content, Main } from './Dashboard.styled';

interface Props {
  onClickCountry: (selectorName: string, country: Country) => void;
  onChangeYouSend: (value: string) => void;
  onUpdateDateCalendar: (date: string, typeDelivery: string) => void;
  onSubmitConfirm: () => void;
}

const DashboardLayout: React.FC<Props> = ({
  onClickCountry,
  onChangeYouSend,
  onUpdateDateCalendar,
  onSubmitConfirm,
}) => {
  const { t } = useTranslation();

  const { moneyAvailable } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  return (
    <Container>
      <MenuMobile />

      <Aside />

      <Center>
        <Header>
          <MoneyAvailable>
            <h2>{t('dashboard:sendMoney')}</h2>
            <div>
              <span>
                {currency(moneyAvailable, { fromCents: false }).format()}
              </span>
              <p>{t('dashboard:available')}</p>
            </div>
          </MoneyAvailable>

          <Nav />
        </Header>

        <Content>
          <Main>
            <Conversions
              onClickCountry={onClickCountry}
              onChangeYouSend={onChangeYouSend}
            />

            <ChoosePlan onUpdateDateCalendar={onUpdateDateCalendar} />
          </Main>

          <PaymentDetails onSubmitConfirm={onSubmitConfirm} />
        </Content>
      </Center>
    </Container>
  );
};

export default DashboardLayout;
