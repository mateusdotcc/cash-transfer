import {
  Country,
  CountriesRequest,
  CountriesSuccess,
  SetCountry,
  YouSend,
  DeliveryDate,
  ReverseCurrency,
} from './types';

export function countriesRequest(): CountriesRequest {
  return {
    type: '@dashboard/GET_COUNTRIES_REQUEST',
  };
}

export function countriesSuccessRequest(data: Country[]): CountriesSuccess {
  return {
    type: '@dashboard/GET_COUNTRIES_SUCCESS',
    data,
  };
}

export function setFromCountry(country: Country): SetCountry {
  return {
    type: '@dashboard/SELECT_FROM',
    country,
  };
}

export function setToCountry(country: Country): SetCountry {
  return {
    type: '@dashboard/SELECT_TO',
    country,
  };
}

export function updateYouSend(value: string | number): YouSend {
  return {
    type: '@dashboard/UPDATE_YOU_SEND',
    value,
  };
}

export function updateDeliveryDate(
  date: string,
  typeDelivery: string,
): DeliveryDate {
  return {
    type: '@dashboard/UPDATE_DELIVERY_DATE',
    date,
    typeDelivery,
  };
}

export function endAnimations(): { type: string } {
  return {
    type: '@dashboard/END_ANIMATIONS',
  };
}

export function reverseCurrency(from: Country, to: Country): ReverseCurrency {
  return {
    type: '@dashboard/REVERSE_CURRENCY',
    from,
    to,
  };
}
