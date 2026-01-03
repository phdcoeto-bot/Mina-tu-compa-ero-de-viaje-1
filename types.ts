export enum AppView {
  DASHBOARD = 'DASHBOARD',
  ESIM = 'ESIM',
  CHAT = 'CHAT',
  PERKS = 'PERKS',
  WALLET = 'WALLET'
}

export type Language = 'es' | 'en' | 'jp' | 'kr';

export interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export interface ESimPlan {
  id: string;
  region: string;
  data: string;
  duration: string;
  price: number;
  flag: string;
}

export interface Transaction {
  id: string;
  merchant: string;
  amount: number;
  currency: string;
  date: string;
  category: 'food' | 'transport' | 'shopping' | 'travel';
}

export interface DataPackage {
  id: string;
  gigs: number;
  label: string;
  price: number;
  url: string;
}