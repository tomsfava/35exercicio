import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './reducers/cart'
import checkoutReducer from './reducers/checkout'
import api from '../services/api'

const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    cart: cartReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
