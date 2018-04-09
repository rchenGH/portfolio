import React, {Component} from 'react';
import './navigation.css'
import {
  Link,
} from 'react-router-dom'

import logo from '../background/logo.png'

class NavigationBar extends Component {

  constructor(){
    super();

    this.state = {
      showMenu: false,
    }
    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event){
    event.preventDefault();

    this.setState(
      { showMenu: true },
      () => {
        document.addEventListener('click', this.closeMenu);
      });
    }

    closeMenu(event){

      if(!this.dropdownMenu.contains(event.target)){
        this.setState(
          { showMenu: false },
          () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }

    }

    render(){

      return (
        <div>
          <nav className="navigation-expanded">
            <ul className="navigation-expanded-list">
              <Link to="/home">
                <img src={logo} className="logo-expanded"/>
              </Link>
              <Link to="/contact">
                <li className="navigation-expanded-list-item">
                  CONTACT
                </li>
              </Link>

              <Link to="/projects">
                <li className="navigation-expanded-list-item">
                PROJECTS
                </li>
              </Link>

              <Link to="/about">
                <li className="navigation-expanded-list-item">
                  ABOUT
                </li>
              </Link>


              <Link to="/home">
                <li className="navigation-expanded-list-item">
                  HOME
                </li>
              </Link>

            </ul>
          </nav>

          <nav className="navigation-collapsed">
            <Link to="/home">
              <img src={logo} className="logo-collapsed"/>
            </Link>
            <button className="navigation-button" onClick={this.showMenu}>
              MENU
            </button>
            {
              this.state.showMenu ?
              (
                <div className="navigation-menu"
                  ref={(element) => {
                    this.dropdownMenu = element;
                  }}
                >
                  <ul className="navigation-collapsed-list">

                    <Link to="/home">
                      <li className="navigation-collapsed-list-item">
                        HOME
                      </li>
                    </Link>

                    <Link to="/about">
                      <li className="navigation-collapsed-list-item">
                        ABOUT
                      </li>
                    </Link>

                    <Link to="/projects">
                    <li className="navigation-collapsed-list-item">
                      PROJECTS
                    </li>
                    </Link>

                    <Link to="/contact">
                      <li className="navigation-collapsed-list-item">
                        CONTACT
                      </li>
                    </Link>

                  </ul>
                </div>
              ) :
              ( null)
            }
          </nav>
        </div>



      );
    }

  }

export default NavigationBar
