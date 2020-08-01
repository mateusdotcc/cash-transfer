import * as ActionTypes from './actionTypes';

import { DashboardActionTypes, Country } from './types';

export const countriesRequest = (): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_COUNTRIES_REQUEST,
});

export const countriesSuccessRequest = (
  data: Country[],
): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_COUNTRIES_REQUEST_SUCCESS,
  data,
});

export const updateFromCountry = (country: Country): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_UPDATE_FROM_COUNTRY,
  country,
});

export const updateToCountry = (country: Country): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_UPDATE_TO_COUNTRY,
  country,
});

export const updateYouSend = (
  value: string | number,
): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_UPDATE_YOU_SEND,
  value,
});

export const updateDeliveryDate = (
  date: string,
  typeDelivery: string,
): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_UPDATE_DELIVERY_DATE,
  date,
  typeDelivery,
});

export const endAnimations = (): { type: string } => ({
  type: ActionTypes.DASHBOARD_END_ANIMATIONS,
});

export const reverseCurrency = (
  from: Country,
  to: Country,
): DashboardActionTypes => ({
  type: ActionTypes.DASHBOARD_REVERSE_CURRENCY,
  from,
  to,
});
