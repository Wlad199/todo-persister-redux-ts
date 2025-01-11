import { useState } from "react"
import { useAppDispatch } from "../hook"
import { addNewTodo } from "../store/todoSlice"


const NewTodoForm: React.FC = () => {

	const [inputValue, setInputValue] = useState('')
	const dispatch = useAppDispatch()


	const sendTodoHandler = () => {

		dispatch(addNewTodo(inputValue))
		setInputValue('')
	}

	return (
		<form className="todo__form">
			<input
				className="todo__input"
				type="text"
				placeholder="Enter new todo"
				value={inputValue}
				onChange={(e) => setInputValue(e.target.value)}
			/>
			<button
				className="todo__button-send"
				type="button"
				onClick={sendTodoHandler}
			>
				Submit
			</button>
		</form>
	)
}

export default NewTodoForm