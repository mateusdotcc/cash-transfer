import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

import { useSelector } from 'react-redux';
import { DashboardState } from 'store/modules/dashboard/types';

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
  ButtonDate,
} from './ChoosePlay.styled';

interface Props {
  onUpdateDateCalendar: (date: string) => void;
}

const ChoosePlan: React.FC<Props> = ({ onUpdateDateCalendar }) => {
  const { t } = useTranslation();

  const { colors } = useContext(ThemeContext);

  // const format = ''; // HH to show Hours
  const formatExpress = '[Get] D MMMM YYYY [till 12pm]';
  const formatStandard = '[Get] D MMMM YYYY [till 6pm]';

  const { delivery } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  return (
    <Container>
      <Header>
        <h2>{t('dashboard:chooseAPlan')}</h2>

        <ButtonDate>
          {t('common:selects.date.placeholder')}{' '}
          <FiCalendar size={18} color={colors.onSecondary} />
        </ButtonDate>

        <DatePicker
          placeholder={t('common:selects.date.placeholder')}
          suffixIcon={<FiCalendar size={18} color={colors.onSecondary} />}
          defaultValue={moment()}
          size="large"
          inputReadOnly
          bordered={false}
          showNow={false}
          allowClear={false}
          showToday={false}
          // showTime={{ format }}
          onChange={(_, dateString) => onUpdateDateCalendar(dateString)}
        />
      </Header>

      <List>
        <form>
          <li>
            <label htmlFor="opt-express">
              <input
                type="radio"
                id="opt-express"
                name="plan"
                value={moment(delivery).set('hour', 12).toString()}
                onChange={event => onUpdateDateCalendar(event.target.value)}
                defaultChecked
              />

              <ContainerItem>
                <Checkmark>
                  <FiCheck />
                </Checkmark>

                <div>
                  <Content>
                    <Title>{moment(delivery).format(formatExpress)}</Title>
                    <Description>{t('dashboard:express')}</Description>
                  </Content>

                  <Price>$ 0.99</Price>
                </div>
              </ContainerItem>
            </label>
          </li>

          <li>
            <label htmlFor="opt-standard">
              <input
                type="radio"
                id="opt-standard"
                name="plan"
                value={moment(delivery).set('hour', 6).toString()}
                onChange={event => onUpdateDateCalendar(event.target.value)}
              />

              <ContainerItem>
                <Checkmark>
                  <FiCheck />
                </Checkmark>

                <div>
                  <Content>
                    <Title>{moment(delivery).format(formatStandard)}</Title>
                    <Description>{t('dashboard:standard')}</Description>
                  </Content>

                  <Price>$ 1.00</Price>
                </div>
              </ContainerItem>
            </label>
          </li>

          <li>
            <label htmlFor="opt-today">
              <input
                type="radio"
                id="opt-today"
                name="plan"
                value={moment(delivery).set('hour', 8).toString()}
                onChange={event => onUpdateDateCalendar(event.target.value)}
              />

              <ContainerItem>
                <Checkmark>
                  <FiCheck />
                </Checkmark>

                <div>
                  <Content>
                    <Title>{t('dashboard:getToday')}</Title>
                    <Description>{t('dashboard:onlyOnWorking')}</Description>
                  </Content>

                  <Price>$ 1.00</Price>
                </div>
              </ContainerItem>
            </label>
          </li>
        </form>
      </List>
    </Container>
  );
};

export default ChoosePlan;
