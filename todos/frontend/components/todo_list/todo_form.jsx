import React, { Component } from 'react'
import { uniqueId } from '../../util/utils'
export default class TodoForm extends Component {

    // componentDidMount(){
    //     this.props.receiveErrors(this.props.errors)
    // }

    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            done: false,
            errors: null
        }
        this.updateTitle = this.updateTitle.bind(this)
        this.updateBody = this.updateBody.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    updateTitle(e){
        this.setState({
            title: e.target.value
        })
    }

    updateBody(e){
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit(e){
        e.preventDefault()
        const todo = Object.assign({}, this.state, {id: uniqueId()})
        this.props.createTodo(todo).then(() => {
            this.props.clearErrors()
            this.setState({
            title: "",
            body: "",
            done: false
            })
        })
    }
    
    render() {
        const errors = this.props.errors.map((err, idx) => {
            return <li key={idx}>{err}</li>
        })
        return (
            <div className="todo-form">
                <h2 className="form-header">Make a new Todo</h2>
                <label htmlFor="title">Title
                    <input onChange={this.updateTitle} type="text" name="" id="title" />
                </label>

                <label htmlFor="body">Body
                    <input onChange={this.updateBody} type="text" name="" id="body" />
                </label>

                <button className="long-button" onClick={this.handleSubmit} type="submit">Create Todo</button>
                <ul>
                    {errors}
                </ul>
            </div>
        )
    }
}
