import { createFilter } from "../reducers/filterReducer"
import { useDispatch } from "react-redux"

const Filter = () => {
	const dispatch = useDispatch()
	const style = {
		marginBottom: 10
	}

	return (
		<div style={style}>
			<h4>Filter</h4>
			Show All<input type="radio" name="filter" onChange={() => dispatch(createFilter('ALL'))}/>
			Most Voted<input type="radio" name="filter" onChange={() => dispatch(createFilter('TOP'))}/>
			Less Votes<input type="radio" name="filter" onChange={() => dispatch(createFilter('LESS'))}/>
		</div>
	)
}

export default Filter