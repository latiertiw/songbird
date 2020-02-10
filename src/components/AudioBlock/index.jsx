import React from 'react';
import './style.css'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

import "./player.css"

class Audio extends React.Component{

    shouldComponentUpdate(nextProps){
        if (this.props.completed && nextProps.completed)  return false
        else return true
    }

    render(){
        const {birdInfo} = this.props
        return (<div className="audio">
            <div className="audio__image"><img className="img" src={this.props.completed ? birdInfo.image : "bird.jpg"} alt=""/></div>
            <div className="audio__info-block">
                <div className="audio__birdname">{this.props.completed ? birdInfo.name : "*"}</div>
                <div className="audio__song">
                    <AudioPlayer src={birdInfo.audio}></AudioPlayer>
                </div>
            </div>
        </div>)
    }
}


export default Audio

Audio.defaultProps = {
   
}

    
    