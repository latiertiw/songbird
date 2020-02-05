import React from 'react';
import {Switch,BrowserRouter,Route, Router, Redirect} from 'react-router-dom'
import { connect } from 'react-redux'

import Header from "./components/Header/index.jsx"




class App extends React.Component {

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <Header/>
            </div>
        );
  }
}




const mapStateToProps = (state) => {
    return {
       
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
      
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


