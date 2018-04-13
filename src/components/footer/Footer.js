import React, { Component } from 'react';
import './footer.css'
import contactIcon from '../background/contact.png'
import githubIcon from '../background/github.png'
import linkedinIcon from '../background/linkedin.png'
import {
  Link,
} from 'react-router-dom'

import Bottombar from '../sidebar/Bottombar'



class Footer extends Component {

  render() {
    return (
      <div>
      <Bottombar/>
        <div className="footer-nav">
          <div className =" site-info">
            <div className="copyright-column">Built in React.js</div>
            <div className="author-column">
              By Raymond Chen

            </div>
          </div>

        </div>
      </div>

    );
  }



}

export default Footer;
