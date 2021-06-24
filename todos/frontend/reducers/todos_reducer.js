import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";


const todosReducer = (state = initialState, action) => {
  Object.freeze(state);
  const newState = Object.assign({}, state)

  switch (action.type) {
    case RECEIVE_TODOS:
      const overWrittenState = {}
      for(let i = 0; i < action.todos.length; i++){
        let todo = action.todos[i]
        overWrittenState[todo.id] = todo
      }
      return overWrittenState
    case RECEIVE_TODO:
      newState[action.todo.id] = action.todo
      return newState;
    case REMOVE_TODO:
      //debugger
      delete newState[action.todo.id]
      return newState
    default:
      return state;
    }
};

// reducers/todos_reducer.js
const initialState = {
  1: {
    id: 1,
    title: "wash car",
    body: "with soap",
    done: false
  },
  2: {
    id: 2,
    title: "wash dog",
    body: "with shampoo",
    done: true
  }
};

const newState = [{
    id: 1,
    title: "code",
    body: "alot",
    done: false
  },
  {
    id: 2,
    title: "sleep",
    body: "300 hours",
    done: true
  }]

export default todosReducer;




const newTodos = [{ id: 1, title: 'Learn Redux', body: 'It is fundamental', done: false }, { id: 2, title: 'learn react', body: 'v important', done: false}];