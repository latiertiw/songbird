import React from 'react';

import './style.css'

class Answer extends React.Component{

    constructor(props){
        super(props)

        this.state = {
            wrongAnswers : [],
            errAudio: null,
            winAudio: null
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
        this.setState({wrongAnswers, errAudio:<audio key={number} autoPlay={true} src="lose.mp3"></audio>},()=>{
            setTimeout(()=>{
                this.setState({errAudio: null})
            },600)
            
        })
    }

    onComplete = () => {
        this.setState({winAudio:<audio key={null} autoPlay={true} src="win.mp3"></audio>},()=>{
            setTimeout(()=>{
                this.setState({winAudio: null})
            },4000)  
        })
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