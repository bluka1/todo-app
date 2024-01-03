import React from 'react';
import PropTypes from 'prop-types';
import XIconSrc from '../../images/x.svg';
import styles from './TodoItem.module.css';

const TodoItem = ({ todo }) => {
	return (
		<li className={styles['todo-item']} id={todo.id}>
			<div className={styles['todo-item__wrapper']}>
				<input type='checkbox' onChange='' />
				<p className={todo.done ? styles['todo-item-done'] : null}>
					{todo.text}
				</p>
			</div>
			<button className={styles['todo-item__delete']} onClick=''>
				<img src={XIconSrc} alt='' />
			</button>
		</li>
	);
};

TodoItem.propTypes = {
	todo: PropTypes.object,
};

export default TodoItem;
