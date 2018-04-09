import React, { Component } from 'react';
import './contact.css'
import Sidebar from '../sidebar/Sidebar'


class Contact extends Component {

  render() {
    return (
      <div className="contact-page">
        <div className="container">
          <div className="row">
            <div className="column-2">
              <Sidebar/>
            </div>
            <div className="column-10">
              <h1>Contact</h1>
              <article>

              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }



}

export default Contact;
