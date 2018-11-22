import React, { Component } from 'react';
import './portfolio-index-style.css'
import cbrneVideo from '../../assets/videos/cbrne-video.m4v'
import hockeyVideo from '../../assets/videos/hockey-video.m4v'
import mnsVideo from '../../assets/videos/mns-video.m4v'
import nexVideo from '../../assets/videos/nexgen-video.m4v'

import './portfolio-index-style.css'
import codePic from '../../assets/images/code.png'
import descriptionPic from '../../assets/images/description.png'
import linkPic from '../../assets/images/link.png'


class PortfolioItem extends Component{
  constructor(props){
    super();

    this.state = {
      currentInfo: 'Description: ' + props.project.description
    }
  }

  closeInfo(e){
    e.preventDefault();
    this.setState({currentInfo: ""})
  }

  showDescription(e){
    e.preventDefault();
    this.setState({
      currentInfo: 'Description: ' + this.props.project.description
    })
  }

  showTechnology(e){
    e.preventDefault();
    this.setState({
      currentInfo: "Technologies: " + this.props.project.technologies
    })
  }

  showLink(e){
    e.preventDefault();
    this.setState({
      currentInfo:
      " Site Link: " + this.props.project.siteLink
    })
  }

render(){
  //video iteration below provides links
  let videos = [cbrneVideo, hockeyVideo, mnsVideo, nexVideo]

  return (
    <article>
    <li className="project-item container">
      <div className="row project-row">
        <div className="column-6 project-image">
          <video className="project-video" controls>
            <source src={this.props.project.video} type="video/mp4"/>
          </video>
        </div>
        <div className="column-6 project-description">
          <div className="container button-container">
            <div className="row button-row">
              <div className="column-3 button-column">

                  <div className="button-box">
                    <button onClick={(e) => this.showDescription(e)}>
                      <img src={descriptionPic}
                        className='button-pic'
                      />
                    </button>
                  </div>

                    <div className="button-box">
                      <button onClick={(e) => this.showTechnology(e)}>
                      <img src={codePic}
                        className='button-pic'

                      />
                      </button>
                    </div>


                    <div className="button-box">
                      <button onClick={(e) => this.showLink(e)}>
                      <img src={linkPic}
                        className='button-pic'
                      />
                      </button>
                    </div>
              </div>
              <div className="column-9">
                <div className="container">
                  <div className="project-name row">
                    <div className="column-12">
                      {this.props.project.name}
                    </div>

                  </div>
                  <div className="row info-">
                    <div className="column-12 info-column">
                      <p className="current-info">{this.state.currentInfo}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </li>
    <hr className="list-hr" />
  </article>
  )
}
}

export default PortfolioItem;
