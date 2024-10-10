import './App.css';
import Dropdown from './components/Dropdown';
import Food from './components/Food';
import MenuData from './data/MenuData';
import { useState } from 'react';

function App() {
const [food , setFood] = useState(MenuData)

  return (
    <div className="container">
      <Dropdown />
      <Food food={food} setFood={setFood} />
    </div>
  );
}

export default App;
