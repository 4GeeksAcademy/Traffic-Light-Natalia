import React, { useState } from "react";

const TrafficLight = () => {
  const [colors, setColors] = useState(["red", "yellow", "green"]);
  const [color, setColor] = useState("red");

  const isActive = (lightColor) => color === lightColor;

  return (
    <div style={{ textAlign: "center" }}>
      {colors.map((lightColor) => (
        <div
          key={lightColor}
          onClick={() => setColor(lightColor)}
          style={{
            height: "70px",
            width: "70px",
            backgroundColor: lightColor,
            borderRadius: "50%",
            margin: "10px auto",
            boxShadow: isActive(lightColor)
              ? `0 0 20px 5px ${lightColor}`
              : "none",
            cursor: "pointer",
          }}
        ></div>
      ))}


      <button onClick={() => {
        const index = colors.indexOf(color);
        setColor(colors[(index + 1) % colors.length]);
      }}className="dark-button">
        Change Color
      </button>

      <button onClick={() => {
        if (!colors.includes("purple")) {
          setColors([...colors, "purple"]);
        }
      }}className="dark-buttonpurpule">
        Add Purple
      </button>
    </div>
  );
};

export default TrafficLight;
