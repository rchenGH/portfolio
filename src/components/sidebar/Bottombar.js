import React, { Component } from 'react';
import './bottombar.css'
import contactIcon from '../background/contact.png'
import githubIcon from '../background/github.png'
import linkedinIcon from '../background/linkedin.png'
import {
  Link,
} from 'react-router-dom'


class Bottombar extends Component {

  render() {
    return (
      <div className="bottombar-container container">
        <div className='row'>
          <Link to="/contact" className="icon-box column-3 bottombar-box">
            <img src={contactIcon}/>
          </Link>


          <a href="https://github.com/rchenGH" className="icon-box column-3 bottombar-box">
            <img src={githubIcon}/>
          </a>


          <a href="https://www.linkedin.com/in/raymond-chen-50/" className="icon-box column-3 bottombar-box">
            <img src={linkedinIcon}/>
          </a>

        </div>
      </div>
    );
  }



}

export default Bottombar;
