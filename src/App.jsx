import { Title, VisibilityToolbar, AddTodoForm, TodoList } from './components';
import styles from './App.module.css';

export default function App() {
	return (
		<div>
			<Title text='My tasks' />
			<VisibilityToolbar />
			<div className={styles['form-and-list-wrapper']}>
				<AddTodoForm />
				<TodoList />
			</div>
		</div>
	);
}
