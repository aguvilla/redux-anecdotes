import { useDispatch, useSelector } from "react-redux"
import { anecdoteToVote } from "../reducers/anecdoteReducer"
import { setMessagge } from "../reducers/notificationReducer"

const Anecdote = ({anecdote}) => {
	const vote = ( id, content) => {
		dispatch(anecdoteToVote(id))
		dispatch(setMessagge(`Votaste a ${content}`))
		setTimeout(() => dispatch(setMessagge('')), 5000)
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