import React from "react";
import { Link } from "react-router-dom";

const CardComponent = ({cardTitle,cardPara,currentCardValue,anotherCardValue,cardLink,anotherCardLink}) => {
  return (
    <div>
      <div class="card ml-auto">
        <div class="card-body">
          <h5 class="card-title">{cardTitle}</h5>

          <p class="card-text">
            {cardPara}
          </p>

          <Link to={`/${cardLink}`} class="card-link">
          {currentCardValue}
          </Link>
          <Link to={`/${anotherCardLink}`}  class="card-link">
          {
            anotherCardValue
          }
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;
