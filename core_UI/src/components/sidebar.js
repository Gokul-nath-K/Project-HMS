import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <>  
        <div className="min-height-300 bg-primary position-absolute w-100"></div>
        <aside className="sidenav bg-white navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-4 " id="sidenav-main">
        <div className="sidenav-header mt-5">
            <i className="fas fa-times p-3 cursor-pointer text-secondary opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
            <img src="https://ik.imagekit.io/gokul/hms/logo-ct-dark.png?updatedAt=1679381622878" className="navbar-brand-img h-100" alt="main_logo" />
            <span className="ms-1 font-weight-bold">HMS Dashboard</span>
        </div>
        <hr className="horizontal dark mt-0" />
        <div className="collapse navbar-collapse  w-auto " id="sidenav-collapse-main">
            <ul className="navbar-nav">
            <li className="nav-item">
                <Link to="/dashboard" className="nav-link active">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-tv-2 text-primary text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Dashboard</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/attendance" className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-calendar-grid-58 text-warning text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Attendance</span>
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/profile" className="nav-link ">
                <div className="icon icon-shape icon-sm border-radius-md text-center me-2 d-flex align-items-center justify-content-center">
                    <i className="ni ni-single-02 text-dark text-sm opacity-10" />
                </div>
                <span className="nav-link-text ms-1">Profile</span>
                </Link>
            </li>
            </ul>
        </div>
        <div className="sidenav-footer mx-3 ">
            <div className="card card-plain shadow-none" id="sidenavCard">
                <img className="w-50 mx-auto brx-img mt-2 img-shadowx" src="https://ik.imagekit.io/gokul/hms/marie.jpg?updatedAt=1679381623884" alt="sidebar_illustration" />
                <div className="card-body text-center p-3 w-100 pt-0">
                    <div className="docs-info">
                    </div>
                </div>
            </div>
            <Link to="/" className="btn btn-danger btn-sm w-50 mb-3">Logout</Link>
        </div>
        </aside>

    
    </>
  )
}
