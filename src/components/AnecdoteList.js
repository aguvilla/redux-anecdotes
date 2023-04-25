import { useDispatch, useSelector } from "react-redux"
import { voteAnecdote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({anecdote}) => {
	const vote = ( id, content) => {
		dispatch(voteAnecdote(id))
		dispatch(setNotification(`Votaste a ${content}`, 3))
	}

	const dispatch = useDispatch()
	return (
		<li>
			<p>{anecdote.content}</p>
			<p>has {anecdote.votes} votes 
			<button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
			</p>
		</li>
	)

}

const AnecdoteList = () => {
	const anecdotes = useSelector(state => {
		const ordened = [...state.anecdotes]
		ordened.sort((a,b) => b.votes - a.votes)
		
		if(state.filter === 'TOP'){
			
			return 	ordened.slice(0,3)
		} if(state.filter === 'LESS') {
			return(ordened.slice(-3))
		}
		return ordened})
  
	

	return (
		<ul>
		{anecdotes.map(anecdote =>
        <Anecdote 
					key={anecdote.id} 
					anecdote = {anecdote}/>
      )}
		</ul>
	)
}

export default AnecdoteList