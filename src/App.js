import React, { Component } from 'react';
import NavigationBar from './components/navigation/Navigation'
import PortfolioIndex from './components/PortfolioIndex/PortfolioIndex'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import RouteProps from 'react-route-props'

import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/PortfolioIndex/PortfolioIndex'
import Contact from './components/contact/Contact'
import Background from './components/background/background.css'
import Footer from './components/footer/Footer'

import firebase from 'firebase'

import {DB_CONFIG} from './Config'


class App extends Component {

  constructor(){
    super();

    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('projects')

    this.state = {
      projects: []
    }
  }

  componentDidMount(){
    this.database.on('value', snap => {
      this.setState({
        projects: snap.val()
      })
    })
  }

    render() {

      console.log(this.state.projects)
    return (

      <Router>

        <div className="App portfolio-background">
          <div className="gradient-overlay">
            <div className="wave">

              <div className="routes">
                <NavigationBar/>
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <RouteProps
                  path='/projects'
                  component={Projects}
                  projects = {this.state.projects}

                />
                <Route path='/contact' component={Contact}/>
                <Footer/>
              </div>

            </div>

          </div>
        </div>
      </Router>



    );
  }



}

export default App;
