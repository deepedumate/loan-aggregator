import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface LoanProduct {
  id: string;
  name: string;
  provider: string;
  interestRate: number;
  maxAmount: number;
  processingFee: number;
  tenure: string;
  features: string[];
  eligibility: string[];
  collateral?: string;
  logo?: string;
}

interface LoanState {
  loans: LoanProduct[];
  selectedLoans: string[];
  filters: {
    minAmount?: number;
    maxAmount?: number;
    maxInterestRate?: number;
    providers: string[];
    collateralRequired?: boolean;
  };
  sortBy: 'interestRate' | 'maxAmount' | 'name';
  sortOrder: 'asc' | 'desc';
}

const initialState: LoanState = {
  loans: [],
  selectedLoans: [],
  filters: {
    providers: [],
  },
  sortBy: 'interestRate',
  sortOrder: 'asc',
};

const loanSlice = createSlice({
  name: 'loan',
  initialState,
  reducers: {
    setLoans: (state, action: PayloadAction<LoanProduct[]>) => {
      state.loans = action.payload;
    },
    addLoanToComparison: (state, action: PayloadAction<string>) => {
      if (!state.selectedLoans.includes(action.payload)) {
        state.selectedLoans.push(action.payload);
      }
    },
    removeLoanFromComparison: (state, action: PayloadAction<string>) => {
      state.selectedLoans = state.selectedLoans.filter(id => id !== action.payload);
    },
    clearComparison: (state) => {
      state.selectedLoans = [];
    },
    setFilters: (state, action: PayloadAction<Partial<LoanState['filters']>>) => {
      state.filters = { ...state.filters, ...action.payload };
    },
    setSortBy: (state, action: PayloadAction<LoanState['sortBy']>) => {
      state.sortBy = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<LoanState['sortOrder']>) => {
      state.sortOrder = action.payload;
    },
    resetFilters: (state) => {
      state.filters = { providers: [] };
    },
  },
});

export const {
  setLoans,
  addLoanToComparison,
  removeLoanFromComparison,
  clearComparison,
  setFilters,
  setSortBy,
  setSortOrder,
  resetFilters,
} = loanSlice.actions;

export default loanSlice.reducer;
