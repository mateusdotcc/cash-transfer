import * as ActionTypes from './actionTypes';
import { SettingsActionTypes } from './types';

export const changeTheme = (theme: string): SettingsActionTypes => ({
  type: ActionTypes.CHANGE_THEME,
  theme,
});

export const changeLanguage = (language: string): SettingsActionTypes => ({
  type: ActionTypes.CHANGE_LANGUAGE,
  language,
});
