import React from 'react'
import ReactDOM from 'react-dom'
import { configureStore } from './store/store'
import Root from './components/root'
import { receiveTodo, receiveTodos, removeTodo, fetchTodos} from './actions/todo_actions'
import { RECEIVE_TODO, RECEIVE_TODOS, REMOVE_TODO } from './actions/todo_actions'
import { receiveStep, receiveSteps, removeStep} from './actions/step_actions'
import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from './actions/step_actions'
import * as Selectors from './reducers/selectors'


window.REMOVE_STEP = REMOVE_STEP
window.allTodos = Selectors.allTodos;
const store = configureStore();
window.store = store;
window.receiveTodo = receiveTodo
window.receiveTodos = receiveTodos
window.RECEIVE_TODO = RECEIVE_TODO
window.RECEIVE_TODOS = RECEIVE_TODOS
window.removeTodo = removeTodo
window.REMOVE_TODO = REMOVE_TODO
window.RECEIVE_STEPS = RECEIVE_STEPS
window.RECEIVE_STEP = RECEIVE_STEP
window.REMOVE_STEP = REMOVE_STEP
window.receiveStep = receiveStep
window.removeStep = removeStep
window.receiveSteps = receiveSteps
window.stepsByTodoId = Selectors.stepsByTodoId
window.fetchTodos = fetchTodos


// const applyMiddlewares = function(store, ...middlewares){
//     let dispatch = store.dispatch
//     middlewares.forEach(mw => {
//         dispatch = mw(store)(dispatch)
//     })
//     return Object.assign({}, store, { dispatch })
// }

document.addEventListener("DOMContentLoaded", () => {
    const rootElement = document.querySelector('#root')
    ReactDOM.render(<Root store={store}/>, rootElement)
})