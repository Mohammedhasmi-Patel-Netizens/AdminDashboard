import React from "react";

const MessageNotification = ({ iconClass, message, timeDuration }) => {
  return (
    <>
      <div className="dropdown-divider"></div>
      <a href="#" className="dropdown-item">
        <i className={`${iconClass}`}></i> {message}
        <span className="float-right text-muted text-sm">{timeDuration}</span>
      </a>
    </>
  );
};

export default MessageNotification;
