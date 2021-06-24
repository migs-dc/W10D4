import React from 'react'
import { StepListItemContainer } from './step_list_item_container'
import StepForm from './step_form'
export default class StepList extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        ////debugger
        const stepListItemContainers = this.props.steps.map(step => {
            return <StepListItemContainer step={step} key={step.id}/>
        })
        return(
            <>
            <ul>
                {stepListItemContainers}
            </ul>
            <br />
            <StepForm receiveStep={this.props.receiveStep} todoId={this.props.todoId}/>
            <br />
            </>
        )
    }
}