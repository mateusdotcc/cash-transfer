export interface CountriesRequest {
  type: string;
}

export interface CountriesSuccess {
  type: string;
  data: Country[];
}

export interface SetCountry {
  type: string;
  country: Country;
}

export interface YouSend {
  type: string;
  value: string;
}

export interface DeliveryDate {
  type: string;
  date: string;
  typeDelivery: string;
}

export interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

export interface DashboardState {
  countries: Country[];
  moneyAvailable: number;
  youSend: number;
  recipientGets: number | string;
  delivery: string;
  typeDelivery: string;
  fromCountry: Country;
  toCountry: Country;
}
