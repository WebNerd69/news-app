import React, { Component } from 'react'

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary ">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> <strong style={{fontSize:"2rem"}}>webNews69</strong></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/general" disabled>General</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/business" disabled>Business</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/entertainment" disabled>Entertainment</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/health" disabled>Health</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/science" disabled>Science</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/sports" disabled>Sports</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/technology" disabled>Technology</a>
              </li>
              
            </ul>
          </div> */}
        </div>
      </nav>
    )
  }
}
