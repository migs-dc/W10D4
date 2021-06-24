import { connect } from 'react-redux'
import StepList from './step_list'

import { receiveStep } from '../../actions/step_actions'
import * as Selectors from '../../reducers/selectors'

const mSTP = (state, { todoId }) => {
    return {
        steps: Selectors.stepsByTodoId(state, todoId),
        todoId: todoId
    }
}


const mDTP = dispatch => {
    return {
        receiveStep: step => {
            return dispatch(receiveStep(step))
        }
    }
}

export const StepListContainer = connect(mSTP, mDTP)(StepList)