import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../../pages/AuthPage/slices/AuthPageSlice'

export const mainStore = configureStore({
    reducer: { authReducer },
})

export type RootState = ReturnType<typeof mainStore.getState>
export type AppDispatch = typeof mainStore.dispatch