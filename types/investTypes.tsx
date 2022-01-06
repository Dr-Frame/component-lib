export interface IInvestItem {
  id: number;
  asset: string;
  price: number;
  invested: number;
  category: string;
}

export interface ICategory {
  id: number;
  label: string;
  value: string;
}

export interface ICryptoList extends Object {
  id: number;
  name: string;
  symbol: string;
  slug: string;
  rank: number;
  is_active: number;
  first_historical_data: string;
  last_historical_data: string;
  platform: object | null | undefined;
}
