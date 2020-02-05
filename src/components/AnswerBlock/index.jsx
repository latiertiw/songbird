import React from 'react';

import './style.css'

class Answer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            wrongAnswers : []
        }
    }

    shouldComponentUpdate(nextProps){
        if(this.props.completed == true && nextProps.completed == false ) this.setState({wrongAnswers:[]})
        return true
    }

    render(){
        return (
            <div>
                {this.props.stageBirds.map((item,i)=>{
                    return <div className="select__item" onClick={(e)=>{
                        const {answerBirdNumber} = this.props
                        const {wrongAnswers} = this.state
                        
                        if( i!=answerBirdNumber && !(i in this.state.wrongAnswers) && !this.props.completed) {
                            wrongAnswers[i] = i
                            this.setState({wrongAnswers})
                            this.props.onFalse()
                        }
                        else if(i == answerBirdNumber) {
                            this.props.onTrue()
                        }

                        this.props.onSelect(i);
                    }}>
                        <div className={
                            this.props.completed && i == this.props.answerBirdNumber ? 
                            "active" : i in this.state.wrongAnswers ? "wrong" : "default"
                        }/> 
                        <span>{item.name}</span>
                    </div>
                })}
            </div>
        )
    }
}


export default Answer

Answer.defaultProps = {
    stageBirds: [],
}