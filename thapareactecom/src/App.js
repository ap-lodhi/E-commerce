import React from "react";

import {BrowserRouter as Router, Routes , Route} from "react-router-dom"
import { About } from "./About";
import { Home } from "./Home";

const App = () => {
  return (
    <Router>

      <Routes>
        <Route   path="/" element={<Home/>}></Route>
        <Route   path="/about" element={<About/>}></Route>
      </Routes>
    </Router>
  )
};

export default App;
