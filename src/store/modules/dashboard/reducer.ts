import { convert } from 'cashify';
import currency from 'currency.js';
import moment from 'moment';

import rates from 'assets/mock/rates.json';
import symbols from 'assets/mock/symbols.json';

import { DashboardState, DashboardActionTypes } from './types';
import * as ActionTypes from './actionTypes';

const initialState: DashboardState = {
  endAnimations: false,
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

const dashboard = (
  state = initialState,
  action: DashboardActionTypes,
): DashboardState => {
  switch (action.type) {
    case ActionTypes.DASHBOARD_COUNTRIES_REQUEST_SUCCESS:
      return {
        ...state,
        countries: action.data,
      };

    case ActionTypes.DASHBOARD_UPDATE_FROM_COUNTRY:
      return {
        ...state,
        fromCountry: action.country,
      };

    case ActionTypes.DASHBOARD_UPDATE_TO_COUNTRY:
      return {
        ...state,
        toCountry: action.country,
      };

    case ActionTypes.DASHBOARD_UPDATE_YOU_SEND:
      const { value } = action;

      const { fromCountry, toCountry } = state;

      const result = convert(Number(value), {
        from: fromCountry.value,
        to: toCountry.value,
        base: 'EUR',
        rates,
      });

      return {
        ...state,
        youSend: action.value,
        recipientGets: currency(result, {
          symbol: Object.values(symbols)[
            Object.keys(symbols).indexOf(toCountry.value)
          ],
        }).value,
      };

    case ActionTypes.DASHBOARD_UPDATE_DELIVERY_DATE:
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

    case ActionTypes.DASHBOARD_END_ANIMATIONS:
      return {
        ...state,
        endAnimations: true,
      };

    case ActionTypes.DASHBOARD_REVERSE_CURRENCY:
      return {
        ...state,
        fromCountry: action.to,
        toCountry: action.from,
      };

    default:
      return state;
  }
};

export default dashboard;
