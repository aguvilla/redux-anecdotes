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

export default notificationSlice.reducer