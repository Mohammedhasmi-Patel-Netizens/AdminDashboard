import React, { useState } from "react";
import NavItem from "./NavItem";
import { FaClock } from "react-icons/fa";
import { Link } from "react-router-dom";
import MessageNotificationData from "../common/MessageNotificationData.js";
import CommentUser from "../common/CommentUser";
import NavItemsValue from "../common/NavItemsValue";
import MessageNotification from "./MessageNotification";

const Header = () => {
  const [notification, setNotification] = useState(false);
  return (
    <>
      {/* // <!-- Navbar --> */}
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* <!-- Left navbar links --> */}
        <ul className="navbar-nav">
          {NavItemsValue.map((item) => (
            <NavItem
              key={item.href}
              listClass={item.listClass}
              anchorClass={item.anchorClass}
              name={item.name}
              href={item.href}
              icon={item?.icon}
              dataWidget={item?.["data-widget"]}
            />
          ))}
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
          <li
            className={`${
              notification ? "nav-item dropdown show" : "nav-item dropdown"
            }`}
          >
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i
                onClick={() => setNotification(!notification)}
                className="far fa-comments"
              ></i>
              <span className="badge badge-danger navbar-badge">3</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <a href="#" className={`dropdown-item`}>
                {/* <!-- Message Start --> */}
                <CommentUser
                  src="/dist/img/user1-128x128.jpg"
                  alt="User Avatar"
                  imgClass="img-size-50 mr-3 img-circle"
                  headingClass="dropdown-item-title"
                  userName="Bhavik Sir"
                  spanClass="float-right text-sm text-danger"
                  msg="Just amazing website"
                  timeStamsMessage="9 hours ago"
                  timeIcon={FaClock}
                />
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                {/* <!-- Message Start --> */}

                <CommentUser
                  src="/dist/img/user8-128x128.jpg"
                  alt="User Avatar"
                  imgClass="img-size-50 mr-3 img-circle mr-3"
                  headingClass="dropdown-item-title"
                  userName="John Pierce"
                  spanClass="float-right text-sm text-muted"
                  msg="I got your message bro"
                  timeStamsMessage="5 hours ago"
                  timeIcon={FaClock}
                />
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item">
                {/* <!-- Message Start --> */}
                <div className="media">
                  <img
                    src="dist/img/user3-128x128.jpg"
                    alt="User Avatar"
                    class="img-size-50 img-circle mr-3"
                  />
                  <div className="media-body">
                    <h3 className="dropdown-item-title">
                      Nora Silvester
                      <span className="float-right text-sm text-warning">
                        <i class="fas fa-star"></i>
                      </span>
                    </h3>
                    <p className="text-sm">The subject goes here</p>
                    <p className="text-sm text-muted">
                      <i class="far fa-clock mr-1"></i> 4 Hours Ago
                    </p>
                  </div>
                </div>
                {/* <!-- Message End --> */}
              </a>
              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Messages
              </a>
            </div>
          </li>
          {/* <!-- Notifications Dropdown Menu --> */}
          <li className="nav-item dropdown">
            <a className="nav-link" data-toggle="dropdown" href="#">
              <i className="far fa-bell"></i>
              <span className="badge badge-warning navbar-badge">15</span>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              <span className="dropdown-item dropdown-header">
                15 Notifications
              </span>

              <div>
                {MessageNotificationData.map((item) => (
                  <MessageNotification
                    key={item.id}
                    iconClass={item.iconClass}
                    message={item.message}
                    timeDuration={item.timeDuration}
                  />
                ))}
              </div>

              <div className="dropdown-divider"></div>
              <a href="#" className="dropdown-item dropdown-footer">
                See All Notifications
              </a>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="fullscreen"
              href="#"
              role="button"
            >
              <i className="fas fa-expand-arrows-alt"></i>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="control-sidebar"
              data-controlsidebar-slide="true"
              href="#"
              role="button"
            >
              <i className="fas fa-th-large"></i>
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
  {
    /* <!-- /.navbar --> */
  }
};

export default Header;
