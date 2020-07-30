import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { countriesSuccessRequest } from './actions';

function* getCountries() {
  const response = yield call(
    axios.get,
    'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
  );

  yield put(countriesSuccessRequest(response.data));
}

export default all([
  takeLatest('@dashboard/GET_COUNTRIES_REQUEST', getCountries),
]);
