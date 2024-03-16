import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './user/userSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import roleReducer from './roleSlice'

const rootReducer = combineReducers({
  user: userReducer,
  role: roleReducer,
})

const persistConfig = {
  key: 'root',
  storage,
  version: 1,
}

const persistantReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
  reducer: persistantReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({
    serializableCheck: false,
  }),
})

export const persistor = persistStore(store)