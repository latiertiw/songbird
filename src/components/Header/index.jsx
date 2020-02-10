import React from 'react';
import actions from '../../store/actions/index.js'
import history from '../../helpers/history'
import { connect } from 'react-redux'

import stages from '../../data/stages'
import data from '../../data/data'

import './style.css'
import Progress from './progressBlock/index.jsx';

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header__title-block">
                    <div className="header__title">Птички</div>
                    <div className="header__score">Текущий счёт : {this.props.score}</div>
                </div>
                <div className="header__progress-block">
                    <Progress stages={stages} currentStage={this.props.currentStage}/>
                </div>
            </div>
        )
    }
}


export default Header