import React from "react"
import Header from "../components/Header"

import "../App.css";

function HomePage(props) {
  const {nasaData} = props
  return (
    <div className="App">
      <Header nasaData={nasaData}/>


      
    </div>
  );
}

export default HomePage;
  