import React, { Component } from 'react';
import projectStyle from './portfolio-index-style.css'
import cbrneVideo from '../../assets/videos/cbrne-video.m4v'
import hockeyVideo from '../../assets/videos/hockey-video.m4v'


class PortfolioItem extends Component{


render(){

  //video iteration below provides links
  let videos = [cbrneVideo, hockeyVideo]

  let videoItem;

  if(videos){
      videoItem = videos.map( video => {

        return (
          video
        )
      })
    }

    console.log(videoItem)

  return (
    <li className="project-item container">
      <div className="row project-row">
        <div className="column-6 project-image">
          <video className="project-video" controls>
            <source src={this.props.project.video} type="video/mp4"/>
          </video>
        </div>
        <div className="column-6 project-description">
          <div className="container">
            <div className="row">
              <div className="column-3">
              </div>
              <div className="column-9">
                <div>{this.props.project.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
  )



}


}

export default PortfolioItem;
