import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css';
import Cart from './Components/Cart/Cart';
import AllCategories from './Components/Filter/AllCategories';
import Items from './Components/Products/Items';
import Navigation from "./Components/Cart/Navigation";

function App() {
  return (
    <div>
      <div className="nav">
        <AllCategories />
        <Router>
          <Navigation/>
    
          <Routes>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </Router>

      </div>
      <div className='main'>
        <Items />

      </div>


    </div>
  );
}

export default App;
