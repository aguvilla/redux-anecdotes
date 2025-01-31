import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'
import Filter from './components/Filter'
import Notification from './components/Notification'
import { initializeAnecdotes } from './reducers/anecdoteReducer'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const App = () => {
	const dispatch = useDispatch()
	useEffect(() => {
		dispatch(initializeAnecdotes())
	}, [dispatch])

  return (
    <div>
			<Notification/>
      <AnecdoteForm/>
      <h2>Anecdotes</h2>
			<Filter/>
			<AnecdoteList/>
    </div>
  )
}

export default App