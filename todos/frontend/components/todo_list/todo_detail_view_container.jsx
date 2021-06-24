import { connect } from 'react-redux'
import TodoDetailView from './todo_detail_view'

import { removeTodo, deleteTodo } from '../../actions/todo_actions'
import { fetchSteps, receiveSteps } from '../../actions/step_actions'

const mDTP = dispatch => {
    return {
        removeTodo: todo => {
            return dispatch(removeTodo(todo))
        },
        receiveSteps: steps => {
            return dispatch(receiveSteps(steps))
        },
        deleteTodo: todo => dispatch(deleteTodo(todo)),
        fetchSteps: () => dispatch(fetchSteps())
    }
}

export const TodoDetailViewContainer = connect(null, mDTP)(TodoDetailView)