export interface Country {
  id: string;
  flag: string;
  label: string;
  value: string;
}

export interface DashboardState {
  countries: Country[];
  moneyAvailable: number;
  youSend: number | string;
  recipientGets: number | string;
  delivery: string;
  fromCountry: Country;
  toCountry: Country;
}
