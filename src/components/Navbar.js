import React from 'react'
import img1 from './images/Back_1.jpg'

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.Home}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/">Galary</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">About Us</a>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Services
            </a>
            <ul className="dropdown-menu">
              <li><a className="dropdown-item" href="/">TELP</a></li>
              <li><a className="dropdown-item" href="/">Student Marks</a></li>
              <li><hr className="dropdown-divider"/>Attendance</li>
              <li><a className="dropdown-item" href="/">Faculty Feedback</a></li>
            </ul> 
          </li>
          <li className="nav-item">
            <a className="nav-link disabled">Admission Enquiry</a>
          </li>
        </ul>
        <img src={img1} height={50} width={50} class="img-thumbnail" alt="..."></img>
      </div>
    </div>
  </nav>
  )
}
