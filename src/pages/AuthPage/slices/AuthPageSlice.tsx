import { createSlice } from "@reduxjs/toolkit"

export interface IAuthState {
    authorized: null | 'admin' | 'user'
}

const initialState: IAuthState = {
    authorized: null
}


export const authSlices = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAdmin: (state) => {
            state.authorized = "admin"
        },
        setUser: (state) => {
            state.authorized = "user"
        }
    }
})

export const { setAdmin, setUser } = authSlices.actions

export default authSlices.reducer