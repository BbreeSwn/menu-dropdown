import "./App.css";
import Dropdown from "./components/Dropdown";
import Food from "./components/Food";
import MenuData from "./data/MenuData";
import { useState } from "react";

function App() {
  const [foods, setFoods] = useState(MenuData);

  const changeFoodData = (e) => {
    console.log(e.target.value);
  }

  return (
    <div className="container">
      <Dropdown changeFoodData={changeFoodData} />
      <div className="content">
        {foods.map((data, index) => {
          return <Food key={index} {...data} />;
        })}
      </div>
    </div>
  );
}

export default App;
