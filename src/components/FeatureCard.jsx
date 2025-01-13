import React from 'react'
import { Link } from 'react-router-dom'

const FeatureCard = ({CardHeading,CardTitle,CardPara,btnClassName,href,hrefValue}) => {
  return <>
    {/* <!-- /.col-md-6 --> */}
    <div className="col-lg-6">
    <div className="card">
      <div className="card-header">
        <h5 className="m-0">{CardHeading}</h5>
      </div>
      <div className="card-body">
        <h6 className="card-title">{CardTitle}</h6>

        <p className="card-text">{CardPara}</p>
        <Link to={`/${href}`} className={`${btnClassName}`}>{hrefValue}</Link>
      </div>
    </div>

   
  </div>
  {/* <!-- /.col-md-6 --> */}
  </>
}

export default FeatureCard


/*
      => identify dynamic value here

      -> CardHeading
      -> CardTitle
      ->CardPara
      -> btnClassName
      -> href (Link for another oute)
      -> link value 














*/