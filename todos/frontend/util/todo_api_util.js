export const fetchTodos = function(){
    return $.ajax({
        method: 'get',
        url: '/api/todos'
    })
}

export const createTodo = function(todo){
    return $.ajax({
        method: 'post',
        url: '/api/todos',
        data: {
            todo: todo
        }
    })
}

export const updateTodo = function(todo){
    return $.ajax({
        method: 'patch',
        url: `/api/todos/${todo.id}`,
        data: {
            todo: todo
        }
    })
}

export const removeTodo = function(todo){
    return $.ajax({
    method: 'delete',
    url: `/api/todos/${todo.id}`,
    })
}