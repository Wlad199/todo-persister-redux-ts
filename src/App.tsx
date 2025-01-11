import NewTodoForm from "./components/NewTodoForm"
import TodoList from "./components/TodoList"



const App: React.FC = () => {

	return (
		<div >
			<h1 className='todo__title'>Simple Todo App</h1>
			<NewTodoForm />
			<TodoList />
		</div>
	)
}

export default App
