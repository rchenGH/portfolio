import React, { Component } from 'react';
import homeStyle from './home.css'
import Sidebar from '../sidebar/Sidebar'


class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="column-2">
              <Sidebar/>
            </div>
            <div className="column-10">
              <div className="row">
                <p className="name">RAYMOND CHEN</p>
              </div>
              <div className="row">
                <p className="dev">WEB DEVELOPER</p>
              </div>
              <div className="row technologies">
                <div className="column-12 tech-names">
                  FRONT-END: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native
                </div>
                <div className="column-12 tech-names">
                  BACK-END: Ruby on Rails, Node.js, Express.js
                </div>
                <div className="column-12 tech-names">
                  DATABASES: MySQL, PostgreSQL, ActiveRecord
                </div>
                <div className="column-12 tech-names">
                  DEPLOYMENT & DEVELOPMENT: Heroku, GitHub
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    );
  }



}

export default Home;
