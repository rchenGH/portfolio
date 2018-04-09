import React, { Component } from 'react';
import projectStyle from './portfolio-index-style.css'
import cbrneVideo from '../../assets/videos/cbrne-video.m4v'
import hockeyVideo from '../../assets/videos/hockey-video.m4v'


class PortfolioItem extends Component {

  render() {

    return (

          <article>
            <h1 className="project-header">PROJECTS</h1>
            <hr className="projects-hr"/>
            <div className="project-item container">
              <div className="row project-row">
                <div className="column-6 project-image">
                  <video className="project-video" controls>
                    <source src={cbrneVideo} type="video/mp4"/>
                  </video>
                </div>
                <div className="column-6 project-description">

                </div>
              </div>
            </div>


          </article>

    );
  }



}

export default PortfolioItem;
