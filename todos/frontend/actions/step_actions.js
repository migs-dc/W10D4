import * as StepsAPIUtil from '../util/step_api_util'
import { receiveErrors } from './error_actions'
export const RECEIVE_STEPS = "RECEIVE_STEPS"
export const RECEIVE_STEP = "RECEIVE_STEP"
export const REMOVE_STEP = "REMOVE_STEP"

export const receiveSteps = function(steps){
  return ({
    type: RECEIVE_STEPS,
    steps: steps
  })
}

export const receiveStep = function(step){
  return ({
    type: RECEIVE_STEP,
    step: step
  })
}

export const removeStep = function(step){
  return ({
    type: REMOVE_STEP,
    step: step
  })
}

export const fetchSteps = function(){
  return function(){
    return StepsAPIUtil.fetchSteps().then(steps => dispatch(receiveSteps(steps)))
  }
}

export const createStep = step => {
  return dispatch => {
      return APIUtil.createStep(step)
          .then(
              step => dispatch(receiveStep(step)),
              err => dispatch(receiveErrors(err.responseJSON))
          )
  }
};

export const updateStep = step => {
  return dispatch => {
      return APIUtil.updateStep(step)
      .then(
          step => dispatch(receiveStep(step)),
          err => dispatch(receiveErrors(err.responseJSON))
      )
  }
}

export const deleteStep = step => {
  let copy = Object.assign({}, step)
  return dispatch => {
      return APIUtil.removeStep(step)
      .then(
          step => dispatch(removeStep(copy)),
          err => dispatch(receiveErrors(err.responseJSON))
      )
  }
}