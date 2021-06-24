import React, { Component } from 'react'

export default class StepListItem extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggled: true //done
        }
        this.toggle = this.toggle.bind(this)
        this.remove = this.remove.bind(this)
    }

    toggle(){
        let step = Object.assign({}, this.props.step)
        step.done = !step.done;
        return this.props.receiveStep(step);
    }
    
    remove(){
        return this.props.removeStep(this.props.step)
    }
    render() {
        return (
            <div>
                <p>{this.state.toggled ? this.props.step.title : ""}</p>
                <p>{this.state.toggled ? this.props.step.body : ""}</p>
                <button onClick={this.toggle}>{this.props.step.done ? "Undo" : "Done"}</button>
                <button onClick={this.remove}>Delete</button>
            </div>
        )
    }
}
