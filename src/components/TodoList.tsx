import TodoItem from './TodoItem'
import { useAppSelector } from '../hook'


const TodoList: React.FC = () => {

	const todos = useAppSelector(state => state.todo.list)
	const sortedTodos = todos.slice().reverse()


	return (
		<ul className='todo__list'>
			{sortedTodos?.map(todo => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	)
}

export default TodoList