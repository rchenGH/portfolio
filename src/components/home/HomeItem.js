import React, { Component } from 'react';
import './home.css'

class HomeList extends Component {

  render() {
    return (
      <article className="home-container">
        <article>
        <div>
        </div>
          <div className="row">
          <p className="name">RAYMOND CHEN</p>
          </div>
          <div className="row">
            <p className="dev">WEB DEVELOPER</p>
          </div>

          <div className="row technologies technologies-border">
            <div className="column-12 tech-names">
              <p className="home-item-prop">FRONT-END: {this.props.home.frontend}</p>
            </div>
            <div className="column-12 tech-names">
              <p className="home-item-prop">BACKEND: {this.props.home.backend}</p>
            </div>
            <div className="column-12 tech-names">
              <p className="home-item-prop">TESTING: {this.props.home.testing}</p>
            </div>
            <div className="column-12 tech-names">
              <p className="home-item-prop">DEPLOYMENT & DEVELOPMENT: {this.props.home.deployment}</p>
            </div>
          </div>
        </article>
      </article>
    )

  }
}

export default HomeList;
