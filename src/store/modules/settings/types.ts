import * as ActionTypes from './actionTypes';

export interface SettingsState {
  theme: string;
  language: string;
}

export interface ChangeThemeAction {
  type: typeof ActionTypes.CHANGE_THEME;
  theme: string;
}

export interface ChangeLanguageAction {
  type: typeof ActionTypes.CHANGE_LANGUAGE;
  language: string;
}

export type SettingsActionTypes = ChangeThemeAction | ChangeLanguageAction;
