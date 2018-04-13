import React, { Component } from 'react';
import homeStyle from './home.css'
import Sidebar from '../sidebar/Sidebar'

class Home extends Component {

  render() {
    return (
      <div className="home-page">
        <div className="container">
          <div className="row">
            <div className="column-2 sidebar-column">
              <Sidebar/>
            </div>
            <div className="column-10 column-body">
              <div className="row">
                <p className="name">RAYMOND CHEN</p>
              </div>
              <div className="row">
                <p className="dev">WEB DEVELOPER</p>
              </div>
              <div className="row technologies">
                <div className="column-12 tech-names">
                  <p>FRONT-END: HTML5, CSS, JavaScript, jQuery, Ajax, Bootstrap, React.js, React Native</p>
                </div>
                <div className="column-12 tech-names">
                  <p>BACK-END: Ruby on Rails, Node.js, Express.js</p>
                </div>
                <div className="column-12 tech-names">
                  <p>DATABASES: MySQL, PostgreSQL, ActiveRecord</p>
                </div>
                <div className="column-12 tech-names">
                  <p>DEPLOYMENT & DEVELOPMENT: Heroku, GitHub</p>
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
