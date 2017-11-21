import React from 'react'

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>

    <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a className="navbar-brand" href="/">MyPath</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <a className="nav-link" href="/">Home</a>
        </li>
          <li className="nav-item">
            <a className="nav-link" href="/plan">Plan</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/register">Register</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/track">Track</a>
          </li>
        </ul>
        <div className="navbar-nav my-2 my-lg-0">
            <a className="nav-link" href="/">Sign in</a>
        </div>
      </div>
    </nav>

  </header>
)

export default Header
