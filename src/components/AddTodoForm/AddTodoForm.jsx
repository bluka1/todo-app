import { useState } from 'react'
import PropTypes from 'prop-types'
import styles from './AddTodoForm.module.css'

const AddTodoForm = ({ addNewTodo }) => {
  const [text, setText] = useState('')

  const handleFormSubmit = (e) => {
    e.preventDefault()
    if (text.trim() === '') return
    addNewTodo(text)
    setText('')
  }
  return (
    <form className={styles['add-todo-form']} onSubmit={handleFormSubmit}>
      <input
        className={styles['add-todo-form__input']}
        type="text"
        name="text"
        id="text"
        placeholder="Add todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button className={styles['add-todo-form__button']} type="submit">
        ADD
      </button>
    </form>
  )
}

AddTodoForm.propTypes = {
  addNewTodo: PropTypes.func,
}

export default AddTodoForm
