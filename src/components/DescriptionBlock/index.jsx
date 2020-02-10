import React from 'react';
import './style.css'
import "./player.css"
import AudioPlayer from 'react-h5-audio-player';
class Description extends React.Component{


    render(){
        const {birdInfo} = this.props

        return (<div className="description">
            {birdInfo ? 
                <div>
                    <div className="description__header">
                        <div className="description__image"><img className="img" src={birdInfo.image} alt=""/></div>
                        <div className="description__info">
                            <div><h3>{birdInfo.name}</h3></div>
                            <hr/>
                            <div>{birdInfo.species}</div>
                            <div> <AudioPlayer autoPlay={false} src={birdInfo.audio}/></div>
                        </div>
                    </div>
                    <div className="description__text">{birdInfo.description}</div>
                </div>
                :
                <div className="description__unselected">
                    <p>Послушайте плеер</p>
                    <br/>
                    <p>Выберите птицу из списка</p>
                </div>
            }    
        </div>)
    }
}


export default Description

Description.defaultProps = {
   
}

    
    