import { combineReducers } from 'redux';

import settings from './settings/reducer';
import dashboard from './dashboard/reducer';

export default combineReducers({
  settings,
  dashboard,
});
