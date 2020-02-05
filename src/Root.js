import React from 'react';
import { Router, Redirect} from 'react-router-dom'
import { Provider } from "react-redux"


import history from "./helpers/history.js"
import store from './store/index.js';

import App from './App.js'

class Root extends React.Component {
  render(){
    return (
      <div>
        <Provider store={store}>
          <Router history={history}>
             <App/>
          </Router>
        </Provider>
      </div>
    );
  }
}


export default Root;
