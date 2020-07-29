import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';

import { DatePicker } from 'antd';

import { FiCalendar, FiCheck } from 'react-icons/fi';

import {
  Container,
  ContainerItem,
  Header,
  List,
  Content,
  Title,
  Description,
  Price,
  Checkmark,
} from './ChoosePlay.styled';

const ChoosePlan: React.FC = () => {
  const { t } = useTranslation();

  const { colors } = useContext(ThemeContext);

  return (
    <Container>
      <Header>
        <h2>{t('dashboard:chooseAPlan')}</h2>

        <DatePicker
          placeholder={t('common:selects.date.placeholder')}
          suffixIcon={<FiCalendar size={18} color={colors.onSecondary} />}
          size="large"
          bordered={false}
          showTime
          inputReadOnly
        />
      </Header>

      <List>
        <li>
          <label>
            <input type="radio" name="plan" defaultChecked />

            <ContainerItem>
              <Checkmark>
                <FiCheck />
              </Checkmark>

              <div>
                <Content>
                  <Title>Get 27 July 2020 till 12pm</Title>
                  <Description>{t('dashboard:express')}</Description>
                </Content>

                <Price>$ 0.99</Price>
              </div>
            </ContainerItem>
          </label>
        </li>

        <li>
          <label>
            <input type="radio" name="plan" />

            <ContainerItem>
              <Checkmark>
                <FiCheck />
              </Checkmark>

              <div>
                <Content>
                  <Title>Get 27 July 2020 till 12pm</Title>
                  <Description>{t('dashboard:standard')}</Description>
                </Content>

                <Price>$ 1.00</Price>
              </div>
            </ContainerItem>
          </label>
        </li>

        <li>
          <label>
            <input type="radio" name="plan" />

            <ContainerItem>
              <Checkmark>
                <FiCheck />
              </Checkmark>

              <div>
                <Content>
                  <Title>Get today till 8pm</Title>
                  <Description>
                    {t('dashboard:onlyOnWorking')} ??{t('dashboard:to')} ??
                  </Description>
                </Content>

                <Price>$ 1.00</Price>
              </div>
            </ContainerItem>
          </label>
        </li>
      </List>
    </Container>
  );
};

export default ChoosePlan;
