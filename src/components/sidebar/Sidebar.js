import React, { Component } from 'react';
import './sidebar.css'
import contactIcon from '../background/contact.png'
import githubIcon from '../background/github.png'
import linkedinIcon from '../background/linkedin.png'
import {
  Link,
} from 'react-router-dom'


class Sidebar extends Component {

  render() {
    return (
      <div className="sidebar-container">
        <div className="row sidebar-row">
          <Link to="/contact" className="icon-box">
              <img src={contactIcon}/>
          </Link>
        </div>
        <div className="row sidebar-row">
          <a href="https://github.com/rchenGH" className="icon-box">
            <img src={githubIcon}/>
          </a>
        </div>
        <div className="row sidebar-row">
          <a href="https://www.linkedin.com/in/raymond-chen-50/" className="icon-box">
            <img src={linkedinIcon}/>
          </a>
        </div>
      </div>
    );
  }



}

export default Sidebar;
