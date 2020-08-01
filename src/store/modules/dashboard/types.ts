import * as ActionTypes from './actionTypes';

export interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

export interface DashboardCountriesRequest {
  type: typeof ActionTypes.DASHBOARD_COUNTRIES_REQUEST;
}

export interface DashboardCountriesRequestSuccess {
  type: typeof ActionTypes.DASHBOARD_COUNTRIES_REQUEST_SUCCESS;
  data: Country[];
}

export interface DashboardUpdateFromCountry {
  type: typeof ActionTypes.DASHBOARD_UPDATE_FROM_COUNTRY;
  country: Country;
}

export interface DashboardUpdateToCountry {
  type: typeof ActionTypes.DASHBOARD_UPDATE_TO_COUNTRY;
  country: Country;
}

export interface DashboardYouSend {
  type: typeof ActionTypes.DASHBOARD_UPDATE_YOU_SEND;
  value: string | number;
}

export interface DashboardDeliveryDate {
  type: typeof ActionTypes.DASHBOARD_UPDATE_DELIVERY_DATE;
  date: string;
  typeDelivery: string;
}

export interface DashboardReverseCurrency {
  type: typeof ActionTypes.DASHBOARD_REVERSE_CURRENCY;
  from: Country;
  to: Country;
}

export interface DashboardEndAnimations {
  type: typeof ActionTypes.DASHBOARD_END_ANIMATIONS;
  endAnimations: boolean;
}

export interface DashboardState {
  readonly endAnimations: boolean;
  readonly countries: Country[];
  readonly moneyAvailable: number;
  readonly youSend: string | number;
  readonly recipientGets: number | string;
  readonly delivery: string;
  readonly typeDelivery: string;
  readonly fromCountry: Country;
  readonly toCountry: Country;
}

export type DashboardActionTypes =
  | DashboardCountriesRequest
  | DashboardCountriesRequestSuccess
  | DashboardUpdateFromCountry
  | DashboardUpdateToCountry
  | DashboardYouSend
  | DashboardDeliveryDate
  | DashboardReverseCurrency
  | DashboardEndAnimations;
