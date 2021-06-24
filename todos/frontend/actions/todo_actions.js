import * as APIUtil from '../util/todo_api_util'
import { receiveErrors } from './error_actions' 
export const RECEIVE_TODOS = "RECEIVE_TODOS";
export const RECEIVE_TODO = "RECEIVE_TODO";
export const REMOVE_TODO = "REMOVE_TODO"

export const receiveTodos = function(todos){
    return ({
        type: RECEIVE_TODOS,
        todos: todos
    })
}

export const receiveTodo = function(todo){
    return({
        type: RECEIVE_TODO,
        todo: todo
    })
}

export const removeTodo = function(todo){
    //debugger
    return({
        type: REMOVE_TODO,
        todo: todo
    })
}

export const fetchTodos = function(){
    return function(dispatch){
        return APIUtil.fetchTodos().then(todos => dispatch(receiveTodos(todos)))
    }
}

export const createTodo = todo => {
    return dispatch => {
        return APIUtil.createTodo(todo)
            .then(
                todo => dispatch(receiveTodo(todo)),
                err => dispatch(receiveErrors(err.responseJSON))
            )
    }
};

export const updateTodo = todo => {
    return dispatch => {
        return APIUtil.updateTodo(todo)
        .then(
            todo => dispatch(receiveTodo(todo)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    }
}

export const deleteTodo = todo => {
    let copy = Object.assign({}, todo)
    return dispatch => {
        return APIUtil.removeTodo(todo)
        .then(
            todo => dispatch(removeTodo(copy)),
            err => dispatch(receiveErrors(err.responseJSON))
        )
    }
}