import React from 'react';
import './style.css'
import "./player.css"
import AudioPlayer from 'react-h5-audio-player';
import { stages } from '../../store/actions/gameActions';
class Description extends React.Component{

    shouldComponentUpdate(nextProps){
        if(nextProps.gameEnded) {
            this.player.audio.pause()
        }
        if(this.props.birdInfo == false) return true
        else if(nextProps.birdInfo!=false && (this.props.birdInfo.name == nextProps.birdInfo.name)) {
            return false
        }
        else return true
    }

    render(){
        const {birdInfo} = this.props

        return (<div className="description">
                <div style={{display:birdInfo ?'block':'none'}}>
                    <div className="description__header">
                        <div className="description__image"><img className="img" src={birdInfo.image} alt=""/></div>
                        <div className="description__info">
                            <div><h3>{birdInfo.name}</h3></div>
                            <hr/>
                            <div>{birdInfo.species}</div>
                            <AudioPlayer ref={c => (this.player = c)} autoPlayAfterSrcChange={false} src={birdInfo.audio}/>
                        </div>
                    </div>
                    <div className="description__text">{birdInfo.description}</div>
                </div>
                
                <div style={{display:birdInfo ?'none':'block'}} className="description__unselected">
                    <p>Послушайте плеер</p>
                    <br/>
                    <p>Выберите птицу из списка</p>
                </div>
            
        </div>)
    }
}


export default Description

Description.defaultProps = {
   
}

    
    