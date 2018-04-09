import React, { Component } from 'react';
import projectStyle from './portfolio-index-style.css'
import Sidebar from '../sidebar/Sidebar'
import cbrneVideo from '../../assets/videos/cbrne-video.m4v'
import hockeyVideo from '../../assets/videos/hockey-video.m4v'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import firebase from 'firebase'
import {DB_CONFIG} from '../../Config'

class PortfolioIndex extends Component {

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

                <article className="project-item container">
                  <div className="row project-row">
                    <div className="column-6 project-image">
                      <video className="project-video" controls>
                        <source src={cbrneVideo} type="video/mp4"/>
                      </video>
                    </div>
                    <div className="column-6 project-description">
                      <div className="container">
                        <div className="row">
                          <div className="column-3">
                            {this.state.speed}
                          </div>
                          <div className="column-9">
                            {this.state.speed}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>


              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }



}

export default PortfolioIndex;
