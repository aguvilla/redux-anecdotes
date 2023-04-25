import { createSlice } from "@reduxjs/toolkit"
import services from "../services/anecdoteServices"

const anecdoteSlice = createSlice({
	name: 'anecdotes',
	initialState: [],
	reducers: {
		anecdoteToVote(state, action) {
			const note = action.payload
			return state.map( a => a.id === note.id ? note : a)
		},
		setAnecdotes(state, action) {
			return action.payload
		},
		appendAnecdote(state, action) {
			state.push(action.payload)
		}
	}
})

export const { anecdoteToVote, setAnecdotes, appendAnecdote} = anecdoteSlice.actions

export const initializeAnecdotes = ()=> {
	return async dispatch =>{
		const notes = await services.getAll()
		dispatch(setAnecdotes(notes))
	}
}

export const createAnecdote = (content) => {
	return async dispatch => {
		const note = await services.newAnecdote(content)
		dispatch(appendAnecdote(note))
	}
}
export const voteAnecdote = (id) =>{
	return async dispatch => {
		const notes = await services.getAll()
		const note = notes.find( a => a.id === id)
		const updatednote = await services.update(id, {...note, votes: note.votes + 1})
		dispatch(anecdoteToVote(updatednote))
	}
}

export default anecdoteSlice.reducer