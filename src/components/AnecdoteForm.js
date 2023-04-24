import { useDispatch } from "react-redux"
import { createAnecdote } from "../reducers/anecdoteReducer"
import { setMessagge } from "../reducers/notificationReducer"

const AnecdoteForm = () => {
	const dispatch = useDispatch()
	
	const addAnecdote = (event) => {
		event.preventDefault()
		const content = event.target.anecdote.value
		event.target.anecdote.value = ''
		
		dispatch(createAnecdote(content))
		dispatch(setMessagge(`Se añadio: ${content}`))
		setTimeout(() => dispatch(setMessagge('')), 5000)
	}

	return (
		<>
		<h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name = 'anecdote'/></div>
        <button>create</button>
      </form>
		</>
	)
}

export default AnecdoteForm