import React from 'react';
import './style.css'


class Description extends React.Component{


    render(){
        const {birdInfo} = this.props

        return (<div className="description">
            {birdInfo ? 
                <div>
                    <div>
                        <div><img height="100px" src={this.props.completed ? birdInfo.image : "bird.jpg"} alt=""/></div>
                        <div>
                            <div>{birdInfo.name}</div>
                            <div>{birdInfo.species}</div>
                            <div><audio controls src={birdInfo.audio}></audio></div>
                        </div>
                    </div>
                    <div>{birdInfo.description}</div>
                </div>
                :
                <div>
                    <p>Послушайте плеер</p>
                    <p>Выберите птицу из списка</p>
                </div>
            }    
        </div>)
    }
}


export default Description

Description.defaultProps = {
   
}

    
    