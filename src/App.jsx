import { Title, VisibilityToolbar, AddTodoForm } from './components';

export default function App() {
	return (
		<div>
			<Title text='My tasks' />
			<VisibilityToolbar />
			<AddTodoForm />
		</div>
	);
}
