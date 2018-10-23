import React, { Component } from 'react';
import './home.css'
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
              <article>
                <HomeList home={this.props.home}/>
              </article>
            </div>

          </div>

        </div>

      </div>
    );
  }



}

export default Home;
