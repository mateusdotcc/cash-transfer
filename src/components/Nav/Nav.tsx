import React, { useCallback } from 'react';
import { DefaultTheme } from 'styled-components';

import { FiFileText, FiHelpCircle } from 'react-icons/fi';
import { BsMoon } from 'react-icons/bs';
import { IoIosSunny } from 'react-icons/io';

import { useSelector, useDispatch } from 'react-redux';
import { SettingsState } from 'store/modules/settings/types';
import { changeTheme } from 'store/modules/settings/actions';

import usePersistedState from 'hooks/usePersistedState';

import light from 'styles/themes/theme-light';
import dark from 'styles/themes/theme-dark';

import ButtonIcon from '../ButtonIcon/ButtonIcon';

import { Container } from './Nav.styled';

interface Props {
  className?: string;
}

const Nav: React.FC<Props> = ({ className }) => {
  const [_, setSettings] = usePersistedState<DefaultTheme>('theme', light);

  const { theme } = useSelector(
    (state: { settings: SettingsState }) => state.settings,
  );

  const dispatch = useDispatch();

  const handleClickChangeTheme = useCallback(() => {
    const getTheme = theme === 'light' ? dark : light;

    setSettings(getTheme);
    dispatch(changeTheme(theme === 'light' ? 'dark' : 'light'));
  }, [theme, dispatch, setSettings]);

  return (
    <Container className={className}>
      <li>
        <ButtonIcon
          onClick={handleClickChangeTheme}
          icon={theme === 'light' ? BsMoon : IoIosSunny}
        />
      </li>

      <li>
        <ButtonIcon icon={FiFileText} />
      </li>

      <li>
        <ButtonIcon icon={FiHelpCircle} />
      </li>
    </Container>
  );
};

export default Nav;
