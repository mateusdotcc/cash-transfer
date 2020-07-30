import React from 'react';
import { useTranslation } from 'react-i18next';

import { useSelector } from 'react-redux';
import { Country, DashboardState } from 'store/modules/dashboard/types';

import { FiRefreshCcw } from 'react-icons/fi';

import { SelectField } from 'components';

import {
  Container,
  From,
  To,
  ButtonConvert,
  SelectResult,
  Value,
} from './Conversions.styled';

interface Props {
  onClickCountry: (selectorName: string, country: Country) => void;
  onChangeYouSend: (value: string) => void;
}

const Conversions: React.FC<Props> = ({ onClickCountry, onChangeYouSend }) => {
  const { t } = useTranslation();

  const { fromCountry, toCountry, countries, recipientGets } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  return (
    <Container>
      <From>
        <SelectField
          selectorName="from"
          data={countries}
          currentData={fromCountry}
          selectPlaceholder={t('common:selects.country.from')}
          onClickCountry={onClickCountry}
        />

        <SelectResult>
          <p>{t('common:youSend')}</p>

          <Value>
            <input
              placeholder={t('common:writeAValue')}
              onChange={event => onChangeYouSend(event.target.value)}
            />
            <span>{fromCountry.value}</span>
          </Value>
        </SelectResult>
      </From>

      <ButtonConvert>
        <FiRefreshCcw size={22} />
      </ButtonConvert>

      <To>
        <SelectField
          selectorName="to"
          data={countries}
          currentData={toCountry}
          selectPlaceholder={t('common:selects.country.to')}
          onClickCountry={onClickCountry}
        />

        <SelectResult>
          <p>{t('common:recipientGets')}</p>

          <Value>
            {recipientGets}
            <span>{toCountry.value}</span>
          </Value>
        </SelectResult>
      </To>
    </Container>
  );
};

export default Conversions;
