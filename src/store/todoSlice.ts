import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

export interface ITodo {
	id: string;
	text: string;
	completed: boolean
}

interface ITodoProps {
	list: ITodo[]
}

const initialState: ITodoProps = {
	list: []
}

const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		addNewTodo: {
			reducer: (state, action: PayloadAction<ITodo>) => {
				if (action.payload.text) {
					state.list.push(action.payload)
				}
			},
			prepare: (text) => {
				const id = nanoid()
				const completed = false
				return { payload: { id, text, completed } }
			},
		},
		toggleStatus: (state, action: PayloadAction<string>) => {
			const toggledTodo = state.list.find(todo => todo.id === action.payload)
			if (toggledTodo) {
				toggledTodo.completed = !toggledTodo.completed
			}
		},
		deleteTodo: (state, action: PayloadAction<string>) => {
			state.list = state.list.filter(todo => todo.id !== action.payload)
		}
	}
})

export const { addNewTodo, toggleStatus, deleteTodo } = todoSlice.actions
export default todoSlice.reducer