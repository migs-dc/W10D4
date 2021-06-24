import React from 'react'
import TodoListItem from '../todo_list/todo_list_item'
import TodoForm from '../todo_list/todo_form'
class TodoList extends React.Component{

    componentDidMount(){
        this.props.fetchTodos()
    }

    render(){
        const todoLis = this.props.todos.map(todo => {
            return <TodoListItem
    
            updateTodo={this.props.updateTodo}
            receiveTodo={this.props.receiveTodo}
            removeTodo={this.props.removeTodo}
            todo={todo} key={todo.id}/>
        })
        return (
            <div>
                <h1 className="todo-header">Super Awesome Todo List</h1>
                <ul>
                    <TodoForm errors={this.props.errors} clearErrors={this.props.clearErrors} receiveErrors = { this.props.receiveErrors} createTodo={ this.props.createTodo } receiveTodo={this.props.receiveTodo}/>
                    {todoLis}
                </ul>
            </div>
        )
    }
}

export default TodoList
