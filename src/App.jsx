import { useState } from 'react';

import { Title, VisibilityToolbar, AddTodoForm, TodoList } from './components';
import { Todo } from './models/Todo';
import { VISIBILITY_TYPES } from './utils/visibilityTypes';

import styles from './App.module.css';

export default function App() {
  const [todos, setTodos] = useState([]);
  const [visibility, setVisibility] = useState(VISIBILITY_TYPES.ALL);

  const handleSetVisibility = (visibilityValue) => {
    setVisibility(visibilityValue);
  };

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

  const todosToShow = () => {
    if (visibility === VISIBILITY_TYPES.ACTIVE) return todos.filter((todo) => !todo.done);
    if (visibility === VISIBILITY_TYPES.COMPLETED) return todos.filter((todo) => todo.done);
    return todos;
  };

  return (
    <div>
      <Title text="My tasks" />
      <VisibilityToolbar visibility={visibility} handleSetVisibility={handleSetVisibility} />
      <div className={styles['form-and-list-wrapper']}>
        <AddTodoForm addNewTodo={handleAddNewTodo} />
        <TodoList todos={todosToShow()} removeTodo={handleRemoveTodo} toggleTodo={handleToggleTodo} />
      </div>
    </div>
  );
}
