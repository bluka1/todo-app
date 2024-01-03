import React from 'react';
import PropTypes from 'prop-types';
import styles from './TodoList.module.css';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = (props) => {
	return (
		<ul className={styles['todo-list']}>
			<TodoItem
				todo={{
					id: 1,
					done: false,
					text: 'Kupiti mlijeko',
				}}
			/>
		</ul>
	);
};

TodoList.propTypes = {};

export default TodoList;
