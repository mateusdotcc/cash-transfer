import { SettingsState, SettingsActionTypes } from './types';
import * as ActionTypes from './actionTypes';

const initialState: SettingsState = {
  theme: 'light',
  language: 'en-US',
};

const settingsReducer = (
  state = initialState,
  action: SettingsActionTypes,
): SettingsState => {
  switch (action.type) {
    case ActionTypes.CHANGE_THEME:
      return {
        ...state,
        theme: action.theme,
      };

    case ActionTypes.CHANGE_LANGUAGE:
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};

export default settingsReducer;
