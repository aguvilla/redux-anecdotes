import { useDispatch, useSelector } from "react-redux"
import { anecdoteToVote } from "../reducers/anecdoteReducer"

const Anecdote = ({anecdote}) => {
	const dispatch = useDispatch()
	return (
		<li>
			<p>{anecdote.content}</p>
			<p>has {anecdote.votes} votes 
			<button onClick={() => dispatch(anecdoteToVote(anecdote.id))}>vote</button>
			</p>
		</li>
	)

}

const AnecdoteList = () => {
	const anecdotes = [...useSelector(state => state)]
  
	anecdotes.sort((a,b) => b.votes - a.votes)

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