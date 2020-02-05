import React from 'react';
import {Switch,BrowserRouter,Route, Router, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import Header from "./components/Header/index.jsx"

import './index.css'
import actions from './store/actions/index.js';

import stages from './data/stages'
import data from './data/data'
import Answer from './components/AnswerBlock/index.jsx';

function randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

class App extends React.Component {

    constructor(props){
        super(props);
        const {currentStage} = this.props

        const birdslist = data[currentStage]
        const birdnumber = randomInteger(0,birdslist.length-1)
       
        this.state = {
            stageBirds: birdslist,
            answerBirdNumber: birdnumber,
            tryCount: 0,
        }
    }

    startNewStage = async () => {
        await this.props.nextStage()

        const {currentStage} = this.props

        const birdslist = data[currentStage]
        const birdnumber = randomInteger(0,birdslist.length-1)
        
        this.setState({
            stageBirds: birdslist,
            answerBirdNumber: birdnumber,
            tryCount: 0,
        })

    }

    onTrueAnswer = () => {
        this.props.completeStage(this.state.stageBirds.length-this.state.tryCount)
    }

    onFalseAnswer = () => {
        const tryCount = this.state.tryCount;

        this.setState({
            tryCount: tryCount + 1
        })
    }

    onSelect = (birdNumber) => {
        console.log(birdNumber)
        const {stageBirds}=this.state
        this.props.select(stageBirds[birdNumber])
    }


    render(){
        return (
            <div>
                <div>
                    <Header score={this.props.score} currentStage={this.props.currentStage}/>
                </div>
                <div></div>
                <div className="main">
                    <div className="select">
                        <Answer completed={this.props.completed}
                            stageBirds={this.state.stageBirds}
                            answerBirdNumber={this.state.answerBirdNumber}
                            onTrue={this.onTrueAnswer}
                            onFalse={this.onFalseAnswer}
                            onSelect={this.onSelect}/>
                            
                    </div>
                    <div className="description">
                        {this.props.selectedBird.name}
                    </div>
                </div>
                <div className="next">
                    <button 
                        disabled={!this.props.completed} 
                        onClick={()=>{this.startNewStage()}}
                        className="next__button">
                            Next level
                    </button>
                </div>
            </div>    
        );
  }
}




const mapStateToProps = (state) => {
    return {
       currentStage: state.game.stage,
       score: state.game.score,
       completed: state.game.isStageCompleted,
       selectedBird: state.game.selectedBird
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        nextStage: () => dispatch(actions.gameActions.next()),
        completeStage: (score) => dispatch(actions.gameActions.complete(score)),
        select: (bird) => dispatch(actions.gameActions.select(bird))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);


