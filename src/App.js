import React, { Component } from 'react';
import NavigationBar from './components/navigation/Navigation'
import PortfolioIndex from './components/PortfolioIndex/PortfolioIndex'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'

import Projects from './components/PortfolioIndex/PortfolioIndex'
import Contact from './components/contact/Contact'
import Background from './components/background/background.css'

import firebase from 'firebase'
import {DB_CONFIG} from './Config'

class App extends Component {

  constructor(){
    super();

    this.app = firebase.initializeApp(DB_CONFIG);
    this.database = this.app.database().ref().child('speed')
    this.state = {
      speed: []
    }
  }

  componentDidMount(){
    this.database.on('value', snap => {
      this.setState({
        speed: snap.val().speed2
      })
    })
  }

  render() {


    return (
      <Router>

        <div className="App portfolio-background">
          <div className="gradient-overlay">
            <NavigationBar/>
              <Route path='/home' component={Home}/>
              <Route path='/about' component={About}/>
              <Route path='/projects' component={Projects}/>
              <Route path='/contact' component={Contact}/>
          </div>
        </div>
      </Router>



    );
  }



}

export default App;
