import React from "react";
import NavItem from "./NavItem";
import { FaBars, FaClock,  FaComment,  FaRegComments } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { Link } from "react-router-dom";
import MessageUserComponent from "../common/MessageUserComponent";
const Header = () => {
  return (
    <nav className="main-header navbar navbar-expand navbar-white navbar-light">
      {/* <!-- Left navbar links --> */}
      <ul className="navbar-nav">
        <NavItem
          listClass="nav-item"
          anchorClass="nav-link"
          icon={FaBars}
          href="/"
          role="button"
        />

        <NavItem
          listClass="nav-item d-none d-sm-inline-block"
          anchorClass="nav-link"
          name="Home"
          href="/home"
        />

        <NavItem
          listClass="nav-item d-none d-sm-inline-block"
          anchorClass="nav-link"
          name="Contact"
          href="/contact"
        />
      </ul>

      {/* <!-- Right navbar links --> */}
      <ul className="navbar-nav ml-auto">
        {/* <!-- Navbar Search --> */}
        <li className="nav-item">
          <Link
            className="nav-link"
            data-widget="navbar-search"
            to="/"
            role="button"
          >
            <i className="fas fa-search"></i>
          </Link>
          <div className="navbar-search-block">
            <form className="form-inline">
              <div className="input-group input-group-sm">
                <input
                  className="form-control form-control-navbar"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <div className="input-group-append">
                  <button className="btn btn-navbar" type="submit">
                    <i className="fas fa-search"></i>
                  </button>
                  <button
                    className="btn btn-navbar"
                    type="button"
                    data-widget="navbar-search"
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </li>

        {/* <!-- Messages Dropdown Menu --> */}
        <li className="nav-item dropdown">
          <Link className="nav-link" data-toggle="dropdown" to="/">
            <FaComment />
          <span className="badge badge-success navbar-badge">3</span>
          </Link>
          <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <Link href="#" class="dropdown-item">
              <MessageUserComponent
                src="/dist/img/user1-128x128.jpg"
                alt="User Avatar"
                imgClass="img-size-50 mr-3 img-circle"
                headingClass="dropdown-item-title"
                userName="Brad Diesel"
                spanClass="float-right text-sm text-danger"
                starIcon={CiStar}
                msg="Call me whenever you can..."
                timeIcon={FaClock}
                timeStamsMessage="4 hours ago"
              />
              {/* <!-- Message End --> */}
            </Link>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              <MessageUserComponent
                src="/dist/img/user8-128x128.jpg"
                alt="User Avatar"
                imgClass="img-size-50 mr-3 img-circle"
                headingClass="dropdown-item-title"
                userName="Brad Diesel"
                spanClass="float-right text-sm text-success"
                starIcon={CiStar}
                msg="Call me whenever you can..."
                timeIcon={FaClock}
                timeStamsMessage="6 hours ago"
              />
              {/* <!-- Message End --> */}
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item">
              {/* <!-- Message Start --> */}
              {/* <div class="media">
                <img
                  src="dist/img/user3-128x128.jpg"
                  alt="User Avatar"
                  class="img-size-50 img-circle mr-3"
                />
                <div class="media-body">
                  <h3 class="dropdown-item-title">
                    Nora Silvester
                    <span class="float-right text-sm text-warning">
                      <i class="fas fa-star"></i>
                    </span>
                  </h3>
                  <p class="text-sm">The subject goes here</p>
                  <p class="text-sm text-muted">
                    <i class="far fa-clock mr-1"></i> 4 Hours Ago
                  </p>
                </div>
              </div> */}

              <MessageUserComponent
                src="/dist/img/user3-128x128.jpg"
                alt="User Avatar"
                imgClass="img-size-50 mr-3 img-circle"
                headingClass="dropdown-item-title"
                userName="Nora Silvester"
                spanClass="float-right text-sm text-warning"
                starIcon={CiStar}
                msg="The subject goes here"
                timeIcon={FaClock}
                timeStamsMessage="6 hours ago"
              />

              {/* <!-- Message End --> */}
            </a>
            <div class="dropdown-divider"></div>
            <a href="#" class="dropdown-item dropdown-footer">
              See All Messages
            </a>
          </div>
        </li>
        {/* <!-- Notifications Dropdown Menu --> */}
        <li class="nav-item dropdown">
          <a class="nav-link" data-toggle="dropdown" href="#">
            <i class="far fa-bell"></i>
            <span class="badge badge-warning navbar-badge">15</span>
          </a>
          <div class="dropdown-menu dropdown-menu-lg dropdown-menu-right">
            <span class="dropdown-header">15 Notifications</span>
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
            <a href="#" class="dropdown-item dropdown-footer">
              See All Notifications
            </a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-widget="fullscreen" href="#" role="button">
            <i class="fas fa-expand-arrows-alt"></i>
          </a>
        </li>
        <li class="nav-item">
          <a
            class="nav-link"
            data-widget="control-sidebar"
            data-slide="true"
            href="#"
            role="button"
          >
            <i class="fas fa-th-large"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
