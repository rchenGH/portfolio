import React, { Component } from 'react';
import './portfolio-index-style.css'
import Sidebar from '../sidebar/Sidebar'
import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

import PortfolioList from './PortfolioList'
import Bottombar from '../sidebar/Bottombar'



class PortfolioIndex extends Component {

  render() {
    return (
      <div className="projects-page">
        <div className="container">
          <div className="row">
            <div className="column-2 sidebar-column">
              <Sidebar/>
            </div>

            <div className="column-10 project-column column-body">
              <article>

                <PortfolioList projects= {this.props.projects}/>
              </article>
            </div>
          <Bottombar/>
          </div>

        </div>

      </div>
    );
  }



}

export default PortfolioIndex;
