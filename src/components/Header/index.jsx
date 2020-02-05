import React from 'react';
import actions from '../../store/actions/index.js'
import history from '../../helpers/history'
import { connect } from 'react-redux'

import './style.css'

class Header extends React.Component{
    render(){
        return (
            <div className="header">
                <div className="header__title-block">

                </div>
                <div className="header__progress-block">
                    
                </div>
            </div>
        )
    }
}


export default Header