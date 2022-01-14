import { ICoins } from './cryptoTypes';

export interface IInvestItem {
  id: number;
  asset: ICoins;
  buyPrice: number;
  invested: number;
  investType: 'Sell' | 'Buy';
  category: string;
}

export interface ICategory {
  id: number;
  label: string;
  value?: string;
}
