import { setFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
	const dispatch = useDispatch()
	const style = {
		marginBottom: 10
	}

	return (
		<div style={style}>
			<h4>Filter</h4>
			Show All<input type="radio" name="filter" onChange={() => dispatch(setFilter('ALL'))}/>
			Most Voted<input type="radio" name="filter" onChange={() => dispatch(setFilter('TOP'))}/>
			Less Votes<input type="radio" name="filter" onChange={() => dispatch(setFilter('LESS'))}/>
		</div>
	)
}

export default Filter