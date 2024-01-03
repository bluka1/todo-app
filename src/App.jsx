import { Title, VisibilityToolbar, AddTodoForm, TodoList } from './components';
import styles from './App.module.css';
import { useState } from 'react';
import { Todo } from './models/Todo';

export default function App() {
	const [todos, setTodos] = useState([
		new Todo('Kupiti kruh'),
		new Todo('Kupiti mlijeko'),
		new Todo('kupiti tenisice'),
	]);

	const handleAddNewTodo = (text) => {
		const newTodo = new Todo(text);
		setTodos((prevState) => [...prevState, newTodo]);
	};

	const handleRemoveTodo = (id) => {
		const newTodos = todos.filter((todo) => todo.id !== id);
		setTodos(newTodos);
	};

	const handleToggleTodo = (id) => {
		const newTodosState = [...todos];
		const todo = newTodosState.find((todo) => todo.id === id);
		todo.done = !todo.done;
		setTodos(newTodosState);
	};

	return (
		<div>
			<Title text='My tasks' />
			<VisibilityToolbar />
			<div className={styles['form-and-list-wrapper']}>
				<AddTodoForm addNewTodo={handleAddNewTodo} />
				<TodoList
					todos={todos}
					removeTodo={handleRemoveTodo}
					toggleTodo={handleToggleTodo}
				/>
			</div>
		</div>
	);
}
