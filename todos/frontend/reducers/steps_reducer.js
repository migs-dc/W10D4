import { RECEIVE_STEP, RECEIVE_STEPS, REMOVE_STEP } from '../actions/step_actions'

const stepsReducer = (state = initialState, action) =>{
  Object.freeze(state);
  const newState = Object.assign({}, state)
  
  switch (action.type){
    case RECEIVE_STEPS:
        const overWrittenState = {}
      for(let i = 0; i < action.steps.length; i++){
        let step = action.steps[i]
        overWrittenState[step.id] = step
      }
      return overWrittenState
    case RECEIVE_STEP:
      newState[action.step.id] = action.step
      return newState;
    case REMOVE_STEP:
        delete newState[action.step.id]
        return newState
    default:
      return state;
  }
}

const initialState = {
    1: {
        id: 1,
        title: "go outside",
        ord: 1
    },
    2: {
        id: 2,
        title: "rinse car",
        ord: 2
    }
}

const newState = [
    {
        id: 1,
        title: "code aplenty",
        ord: 1,
        todo_id: 1 
    },
    {
        id: 2,
        title: "get tired",
        ord: 2,
        todo_id: 1
    }
]

export default stepsReducer;