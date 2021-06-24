export const allTodos = function(state){
    return Object.values(state.todos)
}

export const stepsByTodoId = function(state, todoId){
    let steps = Object.values(state.steps)
    steps = steps.filter(step => step.todo_id === todoId)
    return steps
}