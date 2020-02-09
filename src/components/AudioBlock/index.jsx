import React from 'react';
import './style.css'


class Audio extends React.Component{

    shouldComponentUpdate(nextProps){
        if (this.props.completed && nextProps.completed)  return false
        else return true
    }
    
    render(){
        const {birdInfo} = this.props
        return (<div className="audio">
            <div><img height="100px" src={this.props.completed ? birdInfo.image : "bird.jpg"} alt=""/></div>
            <div>
                <div>{this.props.completed ? birdInfo.name : "*"}</div>
                <div>
                    <audio controls src={birdInfo.audio}></audio>
                </div>
            </div>
        </div>)
    }
}


export default Audio

Audio.defaultProps = {
   
}

    
    