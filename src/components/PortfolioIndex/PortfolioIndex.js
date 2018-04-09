import React, { Component } from 'react';
import projectStyle from './portfolio-index-style.css'
import Sidebar from '../sidebar/Sidebar'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import PortfolioList from './PortfolioList'


import firebase from 'firebase'

import {DB_CONFIG} from '../../Config'

class PortfolioIndex extends Component {


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


    return (
      <div className="projects-page">
        <div className="container">
          <div className="row">
            <div className="column-2">
              <Sidebar/>
            </div>


            <div className="column-10">
              <article>
                <h1 className="project-header">PROJECTS</h1>
                <hr className="projects-hr"/>
                <PortfolioList projects= {this.state.projects}/>
              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }



}

export default PortfolioIndex;
