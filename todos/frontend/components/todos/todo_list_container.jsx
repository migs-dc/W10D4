import { connect } from 'react-redux'
import {updateTodo, createTodo, removeTodo, receiveTodo, fetchTodos } from '../../actions/todo_actions'
import TodoList from './todo_list'
import { clearErrors, receiveErrors } from '../../actions/error_actions'

const mSTP = state => {
    return {
        todos: Object.values(state.todos),
        errors: Object.values(state.errors)
    }
}

const mDTP = dispatch => {
    return {
        receiveTodo: todo => {
            return dispatch(receiveTodo(todo))
        },
        removeTodo: todo => {
            return dispatch(removeTodo(todo))
        },
        fetchTodos: () => dispatch(fetchTodos()),
        createTodo: todo => dispatch(createTodo(todo)),
        receiveErrors: errors => dispatch(receiveErrors(errors)),
        clearErrors: errors => dispatch(clearErrors()),
        updateTodo: todo => dispatch(updateTodo(todo))
    }
}

export const TodoListContainer = connect(mSTP, mDTP)(TodoList)