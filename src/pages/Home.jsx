import React from "react";
import CardComponent from "../components/CardComponent";
import Card2Component from "../components/Card2Component";

const Home = () => {
  return (
    <div>
      <CardComponent 
      title="Hello World"
      para = "My Name is Mo.Hasmi Patel"
      cardLink = "This is My card Link"
      anotherCardLink = "this is another card link"
      />
      <Card2Component
      mainHeading = "javascript"
      subHeading = "Learning Js"
      para = "Hello i am learning js indepth "
      anchorLinkValue = "lets go to another link value"
      btnclass = "btn btn-danger"
  
      />
    </div>
  );
};

export default Home;
