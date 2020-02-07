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
        if (this.props.completed && !nextProps.completed)  this.setState({wrongAnswers : []})
        return true
    }

    onWrong = (number) => {
        let wrongAnswers = this.state.wrongAnswers;
        wrongAnswers[number] = number;

        this.setState({wrongAnswers})
    }

    render(){
        return (
            <div>
                {this.props.stageBirds.map((bird, number) => {
                    return <div className="select__item" onClick={(event)=>{
                         const {answerBirdNumber, completed} = this.props
                         const {wrongAnswers} = this.state
                        
                        this.props.onSelect(number)

                        if(number == answerBirdNumber && !completed) {
                            this.props.onComplete();
                        }
                        else {
                            if (!(number in wrongAnswers)) {
                                if (!completed) {
                                    this.props.onWrong()
                                    this.onWrong(number)
                                }
                            }

                        }
                    }}>
                        <div className={
                            this.props.completed && number == this.props.answerBirdNumber ? 
                            "active" : number in this.state.wrongAnswers ? "wrong" : "default"
                        }/>
                        <span>{bird.name}</span> 
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