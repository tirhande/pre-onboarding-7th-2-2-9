import { combineReducers, configureStore } from '@reduxjs/toolkit';
import dashReducer from './reducer/dashSlice';
import adsReducer from './reducer/adsSlice';

const reducers = combineReducers({
  dashboard: dashReducer,
  adsmanage: adsReducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
