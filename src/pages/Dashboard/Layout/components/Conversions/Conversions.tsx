import React, { HTMLAttributes } from 'react';
import { useTranslation } from 'react-i18next';
import currency from 'utils/currency';

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

interface Props extends HTMLAttributes<HTMLDivElement> {
  onClickCountry: (selectorName: string, country: Country) => void;
  onClickReverseCurrency: (from: Country, to: Country) => void;
  onChangeYouSend: (value: string) => void;
}

const Conversions: React.FC<Props> = ({
  onClickCountry,
  onClickReverseCurrency,
  onChangeYouSend,
  ...rest
}) => {
  const { t } = useTranslation();

  const { fromCountry, toCountry, countries, recipientGets } = useSelector(
    (state: { dashboard: DashboardState }) => state.dashboard,
  );

  return (
    <Container {...rest}>
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
              type="number"
              placeholder={t('common:writeAValue')}
              onChange={event => onChangeYouSend(event.target.value)}
            />

            <span>{fromCountry.value}</span>
          </Value>
        </SelectResult>
      </From>

      <ButtonConvert
        onClick={() => onClickReverseCurrency(fromCountry, toCountry)}
      >
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
            <p>{currency(recipientGets, toCountry.value)}</p>

            <span>{toCountry.value}</span>
          </Value>
        </SelectResult>
      </To>
    </Container>
  );
};

export default Conversions;
