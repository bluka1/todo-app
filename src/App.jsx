import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router';

import { Title, VisibilityToolbar, AddTodoForm, TodoList } from './components';
import { addTodo, clearCompleted, removeTodo, toggleTodo } from './store/todoSlice';
import { Todo } from './models/Todo';
import { VISIBILITY_TYPES } from './utils/visibilityTypes';

import styles from './App.module.css';

export default function App() {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  const handleAddNewTodo = (text) => {
    const newTodo = new Todo(text);
    dispatch(addTodo(JSON.stringify(newTodo)));
  };

  const handleRemoveTodo = (id) => {
    dispatch(removeTodo(id));
  };

  const handleToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const clearCompletedTodos = () => {
    dispatch(clearCompleted());
  };

  const todosToShow = (visibility) => {
    if (visibility === VISIBILITY_TYPES.ACTIVE) return todos.filter((todo) => !todo.done);
    if (visibility === VISIBILITY_TYPES.COMPLETED) return todos.filter((todo) => todo.done);
    return todos;
  };

  const elementToShow = (todos, visibilityType) => {
    return (
      <>
        <TodoList todos={todos} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
        {todos.length > 0 &&
        (visibilityType === VISIBILITY_TYPES.ALL || visibilityType === VISIBILITY_TYPES.COMPLETED) ? (
          <div className={styles['clear-completed-button-wrapper']}>
            <button className={styles['clear-completed-button']} onClick={clearCompletedTodos}>
              Clear Completed
            </button>
          </div>
        ) : null}
      </>
    );
  };

  return (
    <div>
      <Title text="My tasks" />
      <VisibilityToolbar />
      <div className={styles['form-and-list-wrapper']}>
        <AddTodoForm addNewTodo={handleAddNewTodo} />

        <Routes>
          <Route path="/" element={elementToShow(todosToShow(), VISIBILITY_TYPES.ALL)} />
          <Route path="/all" element={elementToShow(todosToShow(), VISIBILITY_TYPES.ALL)} />
          <Route
            path="/active"
            element={elementToShow(todosToShow(VISIBILITY_TYPES.ACTIVE), VISIBILITY_TYPES.ACTIVE)}
          />
          <Route
            path="/completed"
            element={elementToShow(todosToShow(VISIBILITY_TYPES.COMPLETED), VISIBILITY_TYPES.COMPLETED)}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </div>
  );
}
