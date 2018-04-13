import React, { Component } from 'react';
import PortfolioItem from './PortfolioItem.js'
import './portfolio-index-style.css'


import '../../assets/videos/cbrne-video.m4v'
import '../../assets/videos/hockey-video.m4v'



class PortfolioList extends Component{

render(){


  let portfolioItems;


  if(this.props.projects){
      portfolioItems = this.props.projects.map( project => {

        return (
          <PortfolioItem key={project.id} project={project}/>
        )
      })
    }


    return(
      <ul className="item-container">
        <h1 className="project-header">PROJECTS</h1>

        <hr className="projects-hr"/>
        {portfolioItems}
      </ul>
    )

}


}

export default PortfolioList;
