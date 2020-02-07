import React from 'react';
import {Switch,BrowserRouter,Route, Router, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import Header from "./components/Header/index.jsx"

import './index.css'
import actions from './store/actions/index.js';

import stages from './data/stages'
import BirdsInfo from './data/data'
import Answer from './components/AnswerBlock/index.jsx';
import Audio from './components/AnswerBlock/index.jsx';
import Description from './components/DescriptionBlock/index.jsx';

function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }

class App extends React.Component {

    constructor(props){
        super(props);
        this.props.setStagesCount(BirdsInfo.length)
        
        this.state = {
            stageBirds: [],
            answerBirdNumber: undefined,
        }

        setTimeout(() => {
            this.initialize();
        }, 100);
    }

    initialize = () => {
        const {currentStage} = this.props

        const stageBirdsList = BirdsInfo[currentStage]
        const answerBirdNumber = randomInteger(0,stageBirdsList.length-1)
       

        this.setState({
            stageBirds: stageBirdsList,
            answerBirdNumber: answerBirdNumber,
        })
    }

    startNewStage = async () => {
        await this.props.nextStage()
        this.initialize()
    }

    

    onSelect = (birdNumber) => {
        const {stageBirds}=this.state
        this.props.select(stageBirds[birdNumber])
    }


    render(){
        return (
            <div className="app">
                <div>
                    <Header score={this.props.score} currentStage={this.props.currentStage}/>
                </div>
                <div>
                    <Audio/>
                </div>
                <div className="main">
                    <div className="select">
                        <Answer completed={this.props.completed}
                            stageBirds={this.state.stageBirds}
                            answerBirdNumber={this.state.answerBirdNumber}
                            onComplete={this.props.completeStage}
                            onWrong={this.props.wrong}
                            onSelect={this.onSelect}/>    
                    </div>
                    <div className="description">
                      <Description/>
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
        completeStage: () => dispatch(actions.gameActions.complete()),
        select: (birdData) => dispatch(actions.gameActions.select(birdData)),
        wrong: () => dispatch(actions.gameActions.wrong()),
        setStagesCount: (count) => dispatch(actions.gameActions.stages(count))
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(App);


