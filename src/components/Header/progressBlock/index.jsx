import React from 'react';
import './style.css'


class Progress extends React.Component{
    render(){
        return (<div className="progress">
            {this.props.stages.map((item,number)=>{
                return <div key={number} className={number == this.props.currentStage ? 'progress__item_active' : 'progress__item'}>
                    {item}
                </div>
            })}
        </div>)
    }
}


export default Progress

Progress.defaultProps = {
    stages: ["Нету"],
    currentStage: 0,
}

    
    