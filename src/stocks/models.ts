export enum StocksActionTypes {
  FETCH_STOCKS = '@@stocks/FETCH_STOCKS',
  FETCH_MORE_STOCKS = '@@stocks/FETCH_MORE_STOCKS',
  FETCH_STOCKS_SUCCESS = '@@stocks/FETCH_STOCKS_SUCCESS',
  FETCH_STOCKS_ERROR = '@@stocks/FETCH_STOCKS_ERROR',
}

export enum Instructions {
  buy = 'BUY',
  hold = 'HOLD',
  sell = 'SELL',
}

export interface Stock {
  currentPrice: number;
  financialStatements: {
    balanceSheets: {
      [key: string]: {
        assets: number;
        cash: number;
        currentAssets: number;
        currentLiabilities: number;
        estimate: boolean;
        liabilities: number;
        retainedEarnings: number;
      };
    };
    cashFlowStatements: {
      [key: string]: {
        capex: number;
        cashFromOperations: number;
        dividendsPaid: number;
        estimate: boolean;
      };
    };
    incomeStatements: {
      [key: string]: {
        estimate: boolean;
        incomeBeforeTax: number;
        interestExpense: number;
        interestIncome: number;
        netIncome: number;
        totalRevenue: number;
      };
    };
  };
  historicalPricing: {
    [key: string]: {
      close: number;
      open: number;
    };
  };
  lastUpdated: string;
  profile: {
    address: string;
    description: string;
    industry: string;
    name: string;
    officers: { name: string; title: string; yearBorn: string }[];
    phone: string;
    sector: string;
    webUrl: string;
  };
  sharesOutstanding: number;
  symbol: string;
  valuation: {
    altmanZScore: number;
    blendedMultiplier: number;
    cr: number;
    dcfIv: number;
    dividendYield: number;
    dte: number;
    eps: number;
    fairValue: number;
    fcf: number;
    grahamIv: number;
    growthRate: number;
    instruction: Instructions;
    liquidationIv: number;
    marketCap: number;
    pb: number;
    pe: number;
    peMultipleIv: number;
    peg: number;
    priceGrowthRate: number;
    roa: number;
    roe: number;
    roeIv: number;
    statementYears: number;
    expectedReturn: number;
  };
}

export interface Stocks {
  data: Stock[];
  previousStartAtValue: number; // used for firestore query to return next sorted group
  loading: boolean;
  hasMoreData: boolean;
}

export interface StocksState {
  [key: string]: Stocks; // e.g. US: { data: //... }
}
