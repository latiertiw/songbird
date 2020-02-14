import React from 'react';

import './style.css'

class Answer extends React.Component{

    constructor(props){
        super(props)

        this.errAudio = new Audio('lose.mp3')
        this.winAudio = new Audio('win.mp3')

        this.state = {
            wrongAnswers : [],
        }
    }

    

    shouldComponentUpdate(nextProps){
        if (this.props.completed && !nextProps.completed)  this.setState({wrongAnswers : []})
        return true
    }

    onWrong = (number) => {
        let wrongAnswers = this.state.wrongAnswers;
        wrongAnswers[number] = number;
        wrongAnswers['key'] = number
        this.errAudio.play()
    }

    onComplete = () => {
        this.winAudio.play()
    }

    render(){
        return (
            <div className="select">
                {this.props.stageBirds.map((bird, number) => {
                    return <div key={number} className="select__item" onClick={(event)=>{
                         const {answerBirdNumber, completed} = this.props
                         const {wrongAnswers} = this.state
                        
                        this.props.onSelect(number)

                        if(number == answerBirdNumber && !completed) {
                            this.props.onComplete();
                            this.onComplete();
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
                        {[this.state.errAudio, this.state.winAudio]}
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