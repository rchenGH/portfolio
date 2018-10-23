import React, { Component } from 'react';
import './home.css'

class HomeList extends Component {

  render() {
    let homeItems;

    if(this.props.home){
      homeItems = this.props.home.map( home => {
        return (
          <HomeItem key={home.id} home={home}/>
        )
      })
    }

    return (
      <ul className="home-container">
        <div className="row">
          <p className="name">RAYMOND CHEN</p>
        </div>
        <div className="row">
          <p className="dev">WEB DEVELOPER</p>
        </div>

        <div className="row technologies technologies-border">
          {/*  */}
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
          {/*  */}
        </div>
      </ul>
    )

  }
}

export default HomeList;
