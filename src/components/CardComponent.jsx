import React from 'react'

const CardComponent = ({title,para,cardLink,anotherCardLink}) => {
  return (
    <div className="card card-primary card-outline">
    <div className="card-body">
      <h5 className="card-title">{title}</h5>

      <p className="card-text">
       {para}
      </p>

      <a href="#" className="card-link">{cardLink}</a>
      <a href="#" className="card-link">{anotherCardLink}</a>
    </div>
  </div>
  )
}

export default CardComponent

