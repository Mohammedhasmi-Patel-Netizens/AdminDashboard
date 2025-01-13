import React from "react";
import NavItem from "./NavItem";
import { FaBars, FaClock,  FaComment,  FaRegComments } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";

import CommentUser from "../common/CommentUser";
import NavItemsValue from "../common/NavItemsValue";
const Header = () => {
  return <>
  {/* // <!-- Navbar --> */}
  <nav className="main-header navbar navbar-expand navbar-white navbar-light">
    {/* <!-- Left navbar links --> */}
    <ul className="navbar-nav">
     {
       NavItemsValue.map((item)=>(
         <NavItem
        key = {item.href}
        listClass = {item.listClass}
        anchorClass = {item.anchorClass}
        name = {item.name}
        href = {item.href}
        icon = {item?.icon}
        dataWidget={item?.["data-widget"]}
        
        />
       ))
     }
    </ul>

    {/* <!-- Right navbar links --> */}
    <ul className="navbar-nav ml-auto">
      {/* <!-- Navbar Search --> */}
      <li className="nav-item">
        <Link className="nav-link" data-widget="navbar-search" to="/" role="button">
          <i className="fas fa-search"></i>
        </Link>
        <div className="navbar-search-block">
          <form className="form-inline">
            <div className="input-group input-group-sm">
              <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
              <div className="input-group-append">
                <button className="btn btn-navbar" type="submit">
                  <i className="fas fa-search"></i>
                </button>
                <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
      </li>

      {/* <!-- Messages Dropdown Menu --> */}
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-comments"></i>
          <span class="badge badge-danger navbar-badge">3</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <a href="#" class="dropdown-item">
            {/* <!-- Message Start --> */}
            <CommentUser
            src="/dist/img/user1-128x128.jpg"
            alt="User Avatar"
            imgClass="img-size-50 mr-3 img-circle"
            headingClass = "dropdown-item-title"
            userName = "Bhavik Sir"
            spanClass = "float-right text-sm text-danger"
            msg = "Just amazing website"
            timeStamsMessage = "9 hours ago"
            timeIcon = {FaClock}
            />
            {/* <!-- Message End --> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            {/* <!-- Message Start --> */}
            {/* <div class="media">
              <img src="dist/img/user8-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  John Pierce
                  <span class="float-right text-sm text-muted"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">I got your message bro</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div> */}
            <CommentUser 
            src="/dist/img/user8-128x128.jpg"
            alt="User Avatar"
            imgClass="img-size-50 mr-3 img-circle mr-3"
            headingClass = "dropdown-item-title"
            userName = "John Pierce"
            spanClass = "float-right text-sm text-muted"
            msg = "I got your message bro"
            timeStamsMessage = "5 hours ago"
            timeIcon = {FaClock}
            />
            {/* <!-- Message End --> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            {/* <!-- Message Start --> */}
            <div class="media">
              <img src="dist/img/user3-128x128.jpg" alt="User Avatar" class="img-size-50 img-circle mr-3"/>
              <div class="media-body">
                <h3 class="dropdown-item-title">
                  Nora Silvester
                  <span class="float-right text-sm text-warning"><i class="fas fa-star"></i></span>
                </h3>
                <p class="text-sm">The subject goes here</p>
                <p class="text-sm text-muted"><i class="far fa-clock mr-1"></i> 4 Hours Ago</p>
              </div>
            </div>
            {/* <!-- Message End --> */}
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Messages</a>
        </div>
      </li>
      {/* <!-- Notifications Dropdown Menu --> */}
      <li class="nav-item dropdown">
        <a class="nav-link" data-toggle="dropdown" href="#">
          <i class="far fa-bell"></i>
          <span class="badge badge-warning navbar-badge">15</span>
        </a>
        <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
          <span class="dropdown-item dropdown-header">15 Notifications</span>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-envelope mr-2"></i> 4 new messages
            <span class="float-right text-muted text-sm">3 mins</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-users mr-2"></i> 8 friend requests
            <span class="float-right text-muted text-sm">12 hours</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item">
            <i class="fas fa-file mr-2"></i> 3 new reports
            <span class="float-right text-muted text-sm">2 days</span>
          </a>
          <div class="dropdown-divider"></div>
          <a href="#" class="dropdown-item dropdown-footer">See All Notifications</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="fullscreen" href="#" role="button">
          <i class="fas fa-expand-arrows-alt"></i>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="#" role="button">
          <i class="fas fa-th-large"></i>
        </a>
      </li>
    </ul>
  </nav>
  </>
  {/* <!-- /.navbar --> */}
  
};

export default Header;
