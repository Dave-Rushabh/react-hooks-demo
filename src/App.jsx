import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [number, counter] = useState(100);
  const [comment, statement] = useState("No Action Performed");
  const [div_color, magic] = useState("white");
  const [intro, change_my_intro] = useState("React Hooks Demo");

  const count_up = () => {
    console.log("count_up");
    counter(number + 1);
    statement("Number Incremented by 1");
    magic("#edf2f4");
    change_my_intro("Hooks Worked !");
  };

  const count_down = () => {
    console.log("count_down");
    counter(number - 1);
    statement("Number Decremented by 1");
    magic("#e9edc9");
    change_my_intro("Hooks Worked Again !");
  };
  return (
    <>
      <div className="navi">{intro}</div>
      <div className="main_div" style={{ backgroundColor: div_color }}>
        <div className="number"> {number}</div>
        <div className="btn_layout">
          <div>
            <button className="btn" onClick={count_up}>
              Count Up
            </button>
          </div>
          <div>
            <button className="btn" onClick={count_down}>
              Count Down
            </button>
          </div>
        </div>
        <div className="statement">{comment}</div>
      </div>
    </>
  );
};

export default App;
