import React, { Component } from 'react'
import { uniqueId } from '../../util/utils'

export default class StepForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            title: "",
            body: "",
            done: false
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
        ////debugger
        e.preventDefault()
        const step = Object.assign({}, this.state, {id: uniqueId(), todo_id: this.props.todoId})
        this.props.receiveStep(step)
    }
    
    render() {
        return (
            <div>
                <h4>Create a new step</h4>
                <label htmlFor="title">Title
                    <input onChange={this.updateTitle} type="text" name="" id="title" />
                </label>

                <label htmlFor="body">Body
                    <input onChange={this.updateBody} type="text" name="" id="body" />
                </label>

                <button onClick={this.handleSubmit} type="submit">Create Step</button>  
            </div>
        )
    }
}
