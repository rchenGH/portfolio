import React, { Component } from 'react';
import NavigationBar from './components/navigation/Navigation'
import PortfolioIndex from './components/PortfolioIndex/PortfolioIndex'
import {BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './components/home/Home'
import About from './components/about/About'
import Projects from './components/PortfolioIndex/PortfolioIndex'
import Contact from './components/contact/Contact'
import Background from './components/background/background.css'

class App extends Component {


  render() {



    return (
      <Router>

        <div className="App portfolio-background">
          <div className="gradient-overlay">
            <div className="wave">
            <NavigationBar/>

              <div className="routes">
                <Route exact path='/' component={Home}/>
                <Route path='/home' component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/projects' component={Projects}/>
                <Route path='/contact' component={Contact}/>
              </div>
            </div>

          </div>
        </div>
      </Router>



    );
  }



}

export default App;
