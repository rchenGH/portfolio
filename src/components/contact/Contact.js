import React, { Component } from 'react';
import Form from './form/Form.js'
import './contact.css'

import Sidebar from '../sidebar/Sidebar'
import nameIcon from '../../assets/images/name.png'
import emailIcon from '../../assets/images/email.png'
import phoneIcon from '../../assets/images/phone.png'

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


                <div className="container contact-container">
                  <table className="contact-table">
                  <tbody>
                    <tr className="contact-row">
                      <td className="contact-icon">
                        <img src={nameIcon} alt={"contact icon"}/>
                      </td>
                      <td className="contact-column">Raymond Chen</td>
                    </tr>
                    <tr className="contact-row">
                      <td className="contact-icon">
                        <img src={phoneIcon}/>
                      </td>
                      <td className="contact-column">778-996-8813</td>
                    </tr>
                    <tr className="contact-row">
                      <td className="contact-icon">
                        <img src={emailIcon}/>
                      </td>
                      <td className="contact-column">raymondchen86@hotmail.com</td>
                    </tr>
                    </tbody>
                  </table>
                </div>

              <br/>

              <h2 className="contact-header">INQUIRIES</h2>
              <hr className="contact-hr"/>
              <article>
                <Form/>
              </article>

              </article>
            </div>
          </div>
        </div>

      </div>
    );
  }



}

export default Contact;
