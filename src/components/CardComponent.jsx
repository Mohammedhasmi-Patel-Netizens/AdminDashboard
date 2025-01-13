import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({
  cardTitle,
  cardPara,
  currentCardValue,
  anotherCardValue,
  cardLink,
  anotherCardLink,
}) => {
  return (
    <div className="wrapper">
      <div className="card ml-auto">
        <div className="card-body">
          <h5 className="card-title">{cardTitle}</h5>
          <p className="card-text">{cardPara}</p>
          <Link to={`/${cardLink}`} className="card-link">
            {currentCardValue}
          </Link>
          <Link to={`/${anotherCardLink}`} className="card-link">
            {anotherCardValue}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
