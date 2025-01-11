import { LiaClipboardListSolid } from "react-icons/lia";
import { IoCheckmarkDone } from "react-icons/io5";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppDispatch } from "../hook";
import cn from 'classnames'
import { toggleStatus, type ITodo, deleteTodo } from '../store/todoSlice'



const TodoItem: React.FC<ITodo> = ({ id, completed, text }) => {

	const dispatch = useAppDispatch()

	return (
		<li className={cn('todo__item', { active: completed })}>
			<LiaClipboardListSolid className="icon__task" />
			<span
				onClick={() => dispatch(toggleStatus(id))}
			>
				{text}
			</span>
			<IoCheckmarkDone
				onClick={() => dispatch(toggleStatus(id))}
				className="icon__check"
			/>
			<RiDeleteBinLine
				onClick={() => dispatch(deleteTodo(id))}
				className="icon__delete" />
		</li>
	)
}
export default TodoItem
