import { convert } from 'cashify';
import currency from 'currency.js';
import moment from 'moment';

import rates from 'assets/mock/rates.json';
import symbols from 'assets/mock/symbols.json';

import { DashboardState } from './types';

const initialValue: DashboardState = {
  countries: [],
  moneyAvailable: 22124,
  youSend: 0,
  recipientGets: 0,
  delivery: moment().set('hour', 12).toString(),
  typeDelivery: 'Express',
  fromCountry: {
    label: 'Brazil',
    id: 'BRL',
    value: 'BRL',
    flag: 'https://www.countryflags.io/br/flat/64.png',
  },
  toCountry: {
    label: 'Canada',
    id: 'CAD',
    value: 'CAD',
    flag: 'https://www.countryflags.io/ca/flat/64.png',
  },
};

export default function dashboard(
  state = initialValue,
  action: any,
): DashboardState {
  switch (action.type) {
    case '@dashboard/GET_COUNTRIES_SUCCESS':
      return {
        ...state,
        countries: action.data,
      };

    case '@dashboard/SELECT_FROM':
      return {
        ...state,
        fromCountry: action.country,
      };

    case '@dashboard/SELECT_TO':
      return {
        ...state,
        toCountry: action.country,
      };

    case '@dashboard/UPDATE_YOU_SEND':
      const value = Number(action.value);

      const { fromCountry, toCountry } = state;

      const result = convert(value, {
        from: fromCountry.value,
        to: toCountry.value,
        base: fromCountry.value,
        rates,
      });

      return {
        ...state,
        youSend: Number(action.value),
        recipientGets: currency(result, {
          symbol: Object.values(symbols)[
            Object.keys(symbols).indexOf(toCountry.value)
          ],
        }).value,
      };

    case '@dashboard/UPDATE_DELIVERY_DATE':
      const currentDeliveryHour = moment(action.date).format('H');
      const stateDeliveryHour = moment(state.delivery).format('H');

      const dateDelivery = moment(action.date).set(
        'hour',
        Number(currentDeliveryHour) || Number(stateDeliveryHour),
      );

      return {
        ...state,
        delivery: dateDelivery.toString(),
        typeDelivery: action.typeDelivery,
      };

    default:
      return state;
  }
}
