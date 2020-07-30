import React, {
  useState,
  useEffect,
  useCallback,
  useContext,
  useRef,
} from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeContext } from 'styled-components';
import Scrollbar from 'react-smooth-scrollbar';

import { Country } from 'store/modules/dashboard/types';

import { CircleSpinner } from 'react-spinners-kit';
import { FiChevronDown, FiSearch } from 'react-icons/fi';

import {
  Container,
  Loader,
  Current,
  List,
  Button,
  Flag,
  Search,
  Selected,
} from './SelectField.styled';

interface Props {
  selectorName: string;
  data: Country[];
  currentData: Country;
  selectPlaceholder?: string;
  onClickCountry: (selectorName: string, item: Country) => void;
}

const SelectField: React.FC<Props> = ({
  selectorName,
  data = [],
  currentData = {},
  selectPlaceholder,
  onClickCountry,
}) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const { colors } = useContext(ThemeContext);
  const selectRef = useRef(null);

  const handleClickOutside = useCallback((event: MouseEvent) => {
    if (selectRef.current) {
      if (!(selectRef.current! as any).contains(event.target)) {
        setOpen(false);
      }
    }
  }, []);

  const handleClickSelect = useCallback(() => {
    setOpen(!open);
  }, [open]);

  useEffect(() => {
    if (open) {
      document.addEventListener('click', handleClickOutside, true);
    }

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [open, handleClickOutside]);

  return (
    <Container ref={selectRef} isOpen={open}>
      <Current
        isActive={open}
        onClick={handleClickSelect}
        disabled={data.length === 0}
      >
        {data.length === 0 ? (
          <Loader>
            <CircleSpinner size={20} color={colors.senary} />
          </Loader>
        ) : (
          <>
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
                {currentData.flag && <Flag source={currentData.flag} />}
                <span>{currentData.label}</span>
                <FiChevronDown size={18} />
              </Selected>
            )}
          </>
        )}
      </Current>

      <List>
        <Scrollbar alwaysShowTracks continuousScrolling={false}>
          {data.map((item: Country) => (
            <li key={item.id}>
              <Button
                onClick={() => {
                  onClickCountry(selectorName, item);
                  handleClickSelect();
                }}
              >
                {item.flag && <Flag source={item.flag} />}
                {item.label}
              </Button>
            </li>
          ))}
        </Scrollbar>
      </List>
    </Container>
  );
};

export default SelectField;
