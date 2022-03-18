import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class
  extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-md mb-2" style={{ backgroundColor: "#0E1D30" }}>
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item active">
                  <h3>SurveyApp</h3>
                </li>
                <li className="nav-item">
                  <Link to={"/"}>Home</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Creator</a>
                </li>
              </ul>
            </div>
          </div>
        </nav >
      </div >
    )
  }
}
