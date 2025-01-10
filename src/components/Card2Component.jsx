import React from 'react'

const Card2Component = ({mainHeading,subHeading,para,anchorLinkValue,btnclass}) => {
  return (
    <div className="card">
    <div className="card-header">
      <h5 className="m-0">{mainHeading}</h5>
    </div>
    <div className="card-body">
      <h6 className="card-title">{subHeading}</h6>

      <p className="card-text">{para}</p>
      <a href="#" className={`${btnclass}`}>{anchorLinkValue}</a>
    </div>
  </div>

  )
}

export default Card2Component
