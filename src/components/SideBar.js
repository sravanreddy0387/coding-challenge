import React, { Component } from 'react';
import logo from '../images/ff_logo.png';

export default class SideBar extends Component {
    render() {
        return (
            <div className="collapse d-lg-flex min-vh-100 sidebar-container" id="sidebar">
                <ul className="nav flex-column flex-nowrap">
                    <li className="nav-item-brand"> <a className="navbar-brand" href="/">
                        <img src={logo} width="20" height="20" className="d-inline-block align-top" alt="" />
                        <span className="brand-title">DataDashboard</span>
                    </a></li>
                    <li className="nav-item selected"><a className="nav-link" href="#">Overview</a></li>
                    <li className="nav-item">
                        <a className="nav-link collapsed" href="#submenu1" data-toggle="collapse" data-target="#submenu1">Animals</a>
                    </li>
                    <li className="nav-item"><a className="nav-link" href="#">Food</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Music</a></li>
                </ul>

                <ul className="logout_sidebar_button nav" >
                    <hr />
                    <li className="nav-item"><a className="nav-link" href="#">Settings</a></li>
                    <li className="nav-item"><a className="nav-link" href="#">Logout</a></li>
                </ul>
            </div>
        )
    }
}
