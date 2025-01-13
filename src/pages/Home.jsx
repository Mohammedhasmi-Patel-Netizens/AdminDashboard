import React from "react";
import CardComponent from "../components/CardComponent";
import FeatureCard from "../components/FeatureCard";
import CardData from "../common/CardData.js";

const Home = () => {
  return (
    // <!-- Main content -->
    <div class="content ">
      <div class="container-fluid">
        <div class="row">
          {
            // cardTitle,cardPara,currentCardValue,anotherCardValue,cardLink,anotherCardLink
            CardData.map((item)=>{
              return <CardComponent
                      cardTitle = {item.cardTitle}
                      cardPara = {item.cardPara}
                      currentCardValue = {item.currentCardValue}
                      anotherCardValue = {item.anotherCardValue}
                      cardLink = {item.cardLink}
                      anotherCardLink = {item.anotherCardLink}
              />
            })
          }
          <div className="col-lg-6">
            <FeatureCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
