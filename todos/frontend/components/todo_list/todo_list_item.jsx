import React, { Component } from 'react'
import { TodoDetailViewContainer } from './todo_detail_view_container'
export default class TodoListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            detail: false
        }
        this.updateDone = this.updateDone.bind(this)
        this.toggleDetail = this.toggleDetail.bind(this)
    }

    updateDone(e){
        e.preventDefault()
        let copy = Object.assign({}, this.props.todo)
        copy.done = (copy.done ? false : true)
        return this.props.updateTodo(copy)
    }

    toggleDetail(){
        this.setState({
            detail: !this.state.detail
        })
    }

    render() {
        return (
            <li className="todo-list-item">
                <span onClick={this.toggleDetail}>
                    {this.props.todo.title} 
                </span>
                <button className="float-right" onClick={this.updateDone}>
                    {this.props.todo.done ? "Done" : "Undo"}
                </button>
                { this.state.detail ? <TodoDetailViewContainer todo={this.props.todo} removeTodo={this.props.removeTodo} /> : ""}
            </li>
        )
    }
}
