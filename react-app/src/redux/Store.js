import { configureStore } from '@reduxjs/toolkit';
import pageNameReducer from '../redux/UserInfo';

export const store = configureStore({
  reducer: {
    pageName: pageNameReducer
  },
});