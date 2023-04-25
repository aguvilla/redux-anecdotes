import { createSlice } from "@reduxjs/toolkit";

const notificationSlice = createSlice({
	name: 'notification',
	initialState: '',
	reducers:{
		setMessagge(state, action){
			return action.payload
		},
		
	}
})

export const { setMessagge } = notificationSlice.actions

export const setNotification = (message, time) => {
	return  dispatch => {
		dispatch(setMessagge(message))
		setTimeout(() => {
			dispatch(setMessagge(''))
		}, (time * 1000))
	}
}

export default notificationSlice.reducer