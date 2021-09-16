import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom';
import $ from 'jquery';
// import sideImage from '../images/'

class sidenav extends Component {
     constructor(props) {
          super(props);
          this.closeNav = this.closeNav.bind(this);
     }
     
     // mobile menu
     closeNav = async (e) => {
          var size = $(window).width();
          if (size < 800) { $("#wrapper").toggleClass("toggled"); }
     }
     componentDidMount = async (e) => {
          $("#menu-toggle").click(function (e) {
               e.preventDefault();
               $("#wrapper").toggleClass("toggled");
               $(".dashbord").toggleClass("toggledSeries");
          });
     }

     render() {
          
          return (
               <Router>
               <div id="">
                    <div className="force-overflow"></div><button className="btn menu-btn" id="menu-toggle">Interface</button>
                    <div className="force-overflow"></div>
                    <div id="wrapper" >
                       
                         <div id="sidebar-wrapper" >
                        
                              <div className="sidebar-nav" style={{ marginBottom: '5%' }}>

                                   <div className="sidenav-top">
                                        <i className="far fa-window-close close" onClick={this.closeNav}></i>
                                        
                                   </div>
                              
                                   <div className="accordion" id="accordionExample">
                                   
                                   <ul>
                                   {/* <h5 >Interface</h5> */}
                                        <li>
                                             <NavLink  to="/" onClick={this.closeNav}>Dashboard</NavLink>
                                        </li>
                                        <li>
                                             <NavLink  to="/" onClick={this.closeNav}>Profile'</NavLink>
                                        </li>
                                        <li>
                                             <NavLink  to="/" onClick={this.closeNav}>Setting</NavLink>
                                        </li>
                                        <li>
                                             <NavLink  to="/" onClick={this.closeNav}>Cloud</NavLink>
                                        </li>
                                        <li>
                                             <NavLink  to="/" onClick={this.closeNav}>Message</NavLink>
                                        </li>
                                    </ul>
                                         </div>
                               </div>
                               <div className="side_Bottom col-lg-12 col-md-12 col-sm-12 col-12" >
                                   <div className="side_content">
                                        <div className="add_btn">
                                             new Item
                                        </div>
                                        <p>Click + to create your new items</p>
                                   </div>
                                   <div className="image_position">
                                        <div className="side_bottom_image"></div>
                                   </div>
                              
                              </div>
                         </div>

                         <Switch>
                              <div id="page-content-wrapper">
                                   <div class="container">
                                   
                                   </div>
                              </div>
                         </Switch>
                    </div>
               </div>
               </Router>
               

          )}
}

export default sidenav;
