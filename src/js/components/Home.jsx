
import React from "react";
import TrafficLight from "./TrafficLight.jsx";
import backgroundImg from "../../img/traffic light.jpg";


const Home = () => {
  return (
<div
  style={{
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  }}
>
  <div
    style={{
      transform: "translate(-197px, -274px)",
    }}
  >
    <TrafficLight />
  </div>
</div>

  );
};

export default Home;
