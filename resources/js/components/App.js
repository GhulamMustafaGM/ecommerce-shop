
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Login from './Admins/Login';

class App extends Component {
    
    render() { 
        return (  <div className="container">
                <Router>
                    <Route exact path='/adminsLogin' component={Login}/>
                    
                </Router>
                </div>
    );
    }
}

export default App;

if (document.getElementById('App')) {
    ReactDOM.render(<App />, document.getElementById('App'));
}

//{ "plugins": ["@babel/plugin-proposal-class-properties"] }
