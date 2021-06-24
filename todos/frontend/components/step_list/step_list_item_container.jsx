import { connect } from 'react-redux'
import StepListItem from './step_list_item'

import { receiveStep, removeStep } from '../../actions/step_actions'


const mDTP = dispatch => {
    return {
        removeStep: step => {
            return dispatch(removeStep(step))
        },
        receiveStep: step => {
            return dispatch(receiveStep(step))
        }
    }
}

export const StepListItemContainer = connect(null, mDTP)(StepListItem)