import React from 'react'
import { Link } from 'react-router-dom' 

const Navbar = () => {
  return (
    <nav className="navbar container p-3" role="navigation" aria-label="main navigation">
        <div className="navbar-brand mr-5">
            <a className="navbar-item" href="https://bulma.io">
            <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" alt="Logo"/>
            </a>

            <div role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            </div>
        </div>
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                <div className="navbar-item mx-2">
                    <Link to="/">Home</Link>
                </div>
                <div className="navbar-item mx-2">
                    <Link to="/ViewData">View Data</Link>
                </div>
                <div className="navbar-item mx-2 has-dropdown is-hoverable">
                        <div className="navbar-link">
                        More
                        </div>
                        <div className="navbar-dropdown">
                        <div className="navbar-item">
                            <Link to="/AddData">Add Data</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <div className="button is-link mx-2">
                            <strong>Sign up</strong>
                        </div>
                        <div className="button is-light mx-2">
                            Log in
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar