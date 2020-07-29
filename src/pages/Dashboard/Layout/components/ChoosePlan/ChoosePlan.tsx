import React from 'react';
import { useTranslation } from 'react-i18next';

import {
  Container,
  Header,
  List,
  Content,
  Title,
  Description,
  Price,
} from './ChoosePlay.styled';

const ChoosePlan: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <Header>
        <h2>{t('dashboard:chooseAPlan')}</h2>
      </Header>

      <List>
        <li>
          <label>
            <input type="radio" />

            <div>
              <Content>
                <Title>Get 27 July 2020 till 12pm</Title>
                <Description>Express</Description>
              </Content>

              <Price>$ 0.99</Price>
            </div>
          </label>
        </li>

        <li>
          <label>
            <input type="radio" />

            <div>
              <Content>
                <Title>Get 27 July 2020 till 12pm</Title>
                <Description>Standard</Description>
              </Content>

              <Price>$ 1.00</Price>
            </div>
          </label>
        </li>

        <li>
          <label>
            <input type="radio" />

            <div>
              <Content>
                <Title>Get today till 8pm</Title>
                <Description>Only on working days from 11am to 8pm</Description>
              </Content>

              <Price>$ 1.00</Price>
            </div>
          </label>
        </li>
      </List>
    </Container>
  );
};

export default ChoosePlan;
