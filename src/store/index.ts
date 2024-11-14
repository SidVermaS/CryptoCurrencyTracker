import { configureStore, } from '@reduxjs/toolkit'
import { persistReducer, persistStore } from 'redux-persist'
import { useDispatch } from 'react-redux'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'

// Configuration for the redux toolkit
const persistConfig = {
  key: 'root',
  storage,
}
// rootReducer to persist in the localStorage
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Store's confguration to save the rootReducer
const store = configureStore({
  reducer: persistedReducer,
})

// Persists the redux data in the localStorage
export const persistor = persistStore(store)

// State type by extracting the ReturnType of the rootReducer
export type RootState = ReturnType<typeof rootReducer>

// Extract the dispatch's type
export type AppDispatch = typeof store.dispatch

// Hook to call dispatch the action functions
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store