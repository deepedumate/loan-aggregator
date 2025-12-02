import { configureStore } from '@reduxjs/toolkit';
import loanReducer from './slices/loanSlice';
import chatReducer from './slices/chatSlice';

export const store = configureStore({
  reducer: {
    loan: loanReducer,
    chat: chatReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
