import React from "react";

const MessageUserComponent = ({
  src,
  alt,
  imgClass,
  headingClass,
  userName,
  spanClass,
  msg,
  timeIcon: Icon,
  timeStamsMessage
}) => {
  return (
    <>
      <div class="media">
        <img src={src} alt={alt} class={`${imgClass}`} />
        <div class="media-body">
          <h3 className={`${headingClass}`}>
            {userName}
            <span className={`${spanClass}`}>
              <i class="fas fa-star"></i>
            </span>
          </h3>
          <p class="text-sm">{msg}</p>
          <p class="text-sm text-muted">
            <Icon />
            {timeStamsMessage}
          </p>
        </div>
      </div>
      ;
    </>
  );
};

export default MessageUserComponent;
