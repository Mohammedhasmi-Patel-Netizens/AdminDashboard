import React from "react";
import CardComponent from "../components/CardComponent";
import FeatureCard from "../components/FeatureCard";
import CardData from "../common/CardData.js";
import FeatureCardData from "../common/FeatureCardData.js";

const Home = () => {
  return (
    // <!-- Main content -->
    <div className="content">
      <div className="container-fluid">
        <div className="row">
          {
            // cardTitle,cardPara,currentCardValue,anotherCardValue,cardLink,anotherCardLink
            CardData.map((item) => {
              return (
                <CardComponent
                  key={item.cardLink}
                  cardTitle={item.cardTitle}
                  cardPara={item.cardPara}
                  currentCardValue={item.currentCardValue}
                  anotherCardValue={item.anotherCardValue}
                  cardLink={item.cardLink}
                  anotherCardLink={item.anotherCardLink}
                />
              );
            })
          }
            {FeatureCardData.map((item) => {
              return (
                <FeatureCard
                  key={item.href}
                  CardHeading={item.CardHeading}
                  CardTitle={item.CardTitle}
                  CardPara={item.CardPara}
                  btnClassName={item.btnClassName}
                  href={item.href}
                  hrefValue={item.hrefValue}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Home;

