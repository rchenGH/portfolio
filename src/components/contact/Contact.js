import React, { Component } from 'react';
import './contact.css'
import Sidebar from '../sidebar/Sidebar'


class Contact extends Component {

  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="row">
            <div className="column-2 sidebar-column">
              <Sidebar/>
            </div>
            <div className="column-10 column-body">
              <article>

                <h1 className="contact-header">CONTACT</h1>

                <hr className="contact-hr"/>
                <div className="column-8">
                  <p id="contact-text">Raymond Chen</p>
                  <p id="contact-text">Mobile: 778-996-8813</p>
                  <p id="contact-text">Email: raymondchen86@hotmail.com</p>
                </div>

              <br/>



              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }



}

export default Contact;
