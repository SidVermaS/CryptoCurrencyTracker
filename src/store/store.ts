import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import { useDispatch } from 'react-redux';
import storage from 'redux-persist/lib/storage';
import rootReducer from './reducers';
// Configuration for the redux toolkit
const persistConfig = {
  key: 'root',
  storage,
};
// rootReducer to persist in the localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store's confguration to save the rootReducer
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
// Persists the redux data in the localStorage
export const persistor = persistStore(store);

// State type by extracting the ReturnType of the rootReducer
export type RootStateI = ReturnType<typeof persistedReducer>;

// Extract the dispatch's type
export type AppDispatchI = typeof store.dispatch;

// Hook to call dispatch the action functions
export const useAppDispatch = useDispatch.withTypes<AppDispatchI>();

export default store;
