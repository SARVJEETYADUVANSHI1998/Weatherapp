import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className="container1">

                   <nav className="navbar"> 
              
                     <div className="container-fluid">
                           <div id="div">
                            <input type="text" placeholder="search" id="text"/> 
                           </div>
                            <div className="div1">
                              < NavLink className="nav-link"
                               aria-current="page"
                               to="/"
                              >
                            About
                              </NavLink>
                          
                         
                              <NavLink className="nav-link"
                               to="/Help"
                              >
                                Help
                              </NavLink>
                          
                          
                              < NavLink className="nav-link"
                               to="/Weather"
                              >
                                Weather
                              </NavLink>
                        
                          
                              <NavLink className="nav-link "
                               to="/Contect"
                              >
                                  Contect
                              </NavLink>
                          </div>
                      
                  </div>
           </nav> 
           
        </div>
    )
}

export default Navbar;
