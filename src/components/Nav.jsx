import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export class Nav extends Component {
  render() {
    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <div className="container">
                <a className="navbar-brand" href="."><i class="fa-solid fa-bars-staggered me-2"></i> All Departments</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link "  to=".">Home</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link "  to="products">Products</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link "  to="contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link "  to="about">About</NavLink>
                    </li>
                    
                  </ul>
                </div>
              </div>
            </nav>

    )
  }
}

export default Nav