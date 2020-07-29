import React from 'react';
import { useTranslation } from 'react-i18next';

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

interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

interface Props {
  onClickCountry: (country: Country) => void;
}

const Conversions: React.FC<Props> = ({ onClickCountry }) => {
  const { t } = useTranslation();

  return (
    <Container>
      <From>
        <SelectField
          selectPlaceholder={t('common:selects.country.from')}
          onClickCountry={onClickCountry}
        />

        <SelectResult>
          <p>{t('common:youSend')}</p>

          <Value>
            22,124
            <span>BRL</span>
          </Value>
        </SelectResult>
      </From>

      <ButtonConvert>
        <FiRefreshCcw size={22} />
      </ButtonConvert>

      <To>
        <SelectField
          selectPlaceholder={t('common:selects.country.to')}
          onClickCountry={onClickCountry}
        />

        <SelectResult>
          <p>{t('common:recipientGets')}</p>

          <Value>
            4,124
            <span>EUR</span>
          </Value>
        </SelectResult>
      </To>
    </Container>
  );
};

export default Conversions;
