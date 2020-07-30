import { all } from 'redux-saga/effects';

import dashboard from './dashboard/sagas';

export default function* rootSaga() {
  return yield all([dashboard]);
}
