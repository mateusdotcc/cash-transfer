import axios from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';

import { Country } from './types';

import { countriesSuccessRequest } from './actions';

function* getCountries() {
  const response = yield call(
    axios.get,
    'https://my-json-server.typicode.com/juliomerisio/currency-json-server/currencies',
  );

  // Added filter to remove (Romania) with inconsistent data,
  // Adjusting this item, the filter will be unnecessary.
  // return only 'response.data'
  const filter = response.data.filter(
    (country: Country) => country.label !== 'RON',
  );

  yield put(countriesSuccessRequest(filter));
}

export default all([
  takeLatest('@dashboard/GET_COUNTRIES_REQUEST', getCountries),
]);
