import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'userInfo',
  initialState: {
    name: 'Bruno',
    isLogin: false,
    // cartIsVisible: false,
    // notification: null,
  },
  reducers: {
    toggle(state) {
      state.isLogin = !state.isLogin
    },
    updateLoginState(state, action) {
      state.isLogin = action.payload
    },
    // showNotification(state, action) {
    //   const { status, title, message } = action.payload
    //   state.notification = { status, title, message }
    // },
  },
})

export const userActions = userSlice.actions
export default userSlice.reducer
