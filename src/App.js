import React, { Component } from 'react';
import NavigationBar from './components/navigation/Navigation'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import RouteProps from 'react-route-props'

import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/PortfolioIndex/PortfolioIndex'
import Contact from './components/contact/Contact'
import './components/background/background.css'
import Footer from './components/footer/Footer'

import firebase from 'firebase'

import {DB_CONFIG} from './Config'



class App extends Component {

  constructor(props){
    super(props);

    this.app = firebase.initializeApp(DB_CONFIG)
    this.database = this.app.database().ref().child('portfolio')

    this.state = {
      portfolio: {
        home: {
          backend: null
        }
      },
    }
  }

  componentDidMount(){
    this.database.on('value', snap => {
      this.setState({
        portfolio: snap.val()
      })
    })
  }

    render() {
    return (
      <Router>
        <div className="App portfolio-background">
          <div className="gradient-overlay">
            <div className="wave">

              <div className="routes">
                <NavigationBar/>
                <RouteProps exact
                  path='/'
                  component={Home}
                  home={this.state.portfolio.home}
                />
                <RouteProps path='/home'
                  component={Home}
                  home={this.state.portfolio.home}
                />
                <Route path='/about'
                  component={About}
                />
                <RouteProps
                  path='/projects'
                  component={Projects}
                  projects={this.state.portfolio.projects}
                />
                <Route
                  path='/contact'
                  component={Contact}
                />
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
