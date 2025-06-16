// Scout Analytics Shared Types

export interface KPIData {
  totalRevenue: number;
  totalTransactions: number;
  uniqueCustomers: number;
  avgOrderValue: number;
  grossMargin?: number;
  topCategories?: string[];
}

export interface Transaction {
  id: string;
  transaction_date: string;
  total_amount: number;
  customer_id?: string;
  store_id?: string;
}

export interface RegionalData {
  region: string;
  revenue: number;
  transactions: number;
  customers: number;
  growth: number;
}

export interface FilterState {
  dateRange: {
    start: string;
    end: string;
  };
  regions: string[];
  categories: string[];
  brands: string[];
}

export interface AIResponse {
  content: string;
  context?: Record<string, any>;
  timestamp: Date;
}

export * from './dashboard';