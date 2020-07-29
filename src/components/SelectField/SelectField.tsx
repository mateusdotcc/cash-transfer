import React, { useState, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';

import { FiChevronDown, FiSearch } from 'react-icons/fi';

import {
  Container,
  Current,
  List,
  Button,
  Flag,
  Search,
  Selected,
} from './SelectField.styled';

interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

interface Props {
  selectPlaceholder?: string;
  onClickCountry: (item: Country) => void;
}

const SelectField: React.FC<Props> = ({
  selectPlaceholder,
  onClickCountry,
}) => {
  const { t } = useTranslation();

  const [countries, setCountries] = useState<Country[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
      );

      console.log(response.data);
      setCountries(response.data);
    }

    getData();
  }, []);

  const handleClickSelect = useCallback(() => {
    setOpen(!open);
  }, [open]);

  return (
    <Container isOpen={open}>
      <Current onClick={handleClickSelect} isActive={open}>
        {open ? (
          <Search>
            <input
              type="text"
              placeholder={t('common:selects.country.placeholder')}
            />
            <FiSearch />
          </Search>
        ) : (
          <Selected>
            {selectPlaceholder}
            <Flag source={countries[11]?.flag} />{' '}
            <span>{countries[11]?.label}</span>
            <FiChevronDown />
          </Selected>
        )}
      </Current>

      <List>
        {countries.map((item: Country) => (
          <li key={item.id}>
            <Button
              onClick={() => {
                onClickCountry(item);
                handleClickSelect();
              }}
            >
              <Flag source={item.flag} />
              {item.label}
            </Button>
          </li>
        ))}
      </List>
    </Container>
  );
};

export default SelectField;
