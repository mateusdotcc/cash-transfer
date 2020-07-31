import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import currency from 'currency.js';

import { Country, DashboardState } from 'store/modules/dashboard/types';
import { useSelector } from 'react-redux';

import { Aside, MenuMobile, Nav } from 'components';

import {
  MoneyAvailable,
  Conversions,
  ChoosePlan,
  PaymentDetails,
} from './components';

import { Container, Header, Center, Content, Main } from './Dashboard.styled';

interface Props {
  onClickCountry: (selectorName: string, country: Country) => void;
  onChangeYouSend: (value: string | number) => void;
  onReverseCurrency: (from: Country, to: Country) => void;
  onUpdateDateCalendar: (date: string, typeDelivery: string) => void;
  onSubmitConfirm: () => void;
}

const DashboardLayout: React.FC<Props> = ({
  onClickCountry,
  onChangeYouSend,
  onReverseCurrency,
  onUpdateDateCalendar,
  onSubmitConfirm,
}) => {
  const { t } = useTranslation();

  const containerCenter = useRef<HTMLDivElement>(null);

  const { moneyAvailable, endAnimations } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  useEffect(() => {
    if (containerCenter && containerCenter.current) {
      return containerCenter.current?.classList.add('animate');
    }
  }, []);

  return (
    <Container endAnimations={endAnimations}>
      <MenuMobile className="container-menu-mobile" />

      <Aside />

      <Center ref={containerCenter}>
        <Header className="container-header">
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
              className="container-conversions"
              onClickCountry={onClickCountry}
              onChangeYouSend={onChangeYouSend}
              onClickReverseCurrency={onReverseCurrency}
            />

            <ChoosePlan
              className="container-choose-plan"
              onUpdateDateCalendar={onUpdateDateCalendar}
            />
          </Main>

          <PaymentDetails
            className="container-payment-details"
            onSubmitConfirm={onSubmitConfirm}
          />
        </Content>
      </Center>
    </Container>
  );
};

export default DashboardLayout;
