import React from "react";
import Navbar from "./component/layout/navigation/Navbar";
import { Route, Routes } from "react-router-dom";

import Associazione from "./component/pages/Associazione";
import Congressi from "./component/pages/Congressi";
import Articoli from "./component/pages/Articoli";
import Contatti from "./component/pages/Contatti";
import Home from "./component/pages/Home";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/associazione" element={<Associazione />} />
        <Route path="/congressi" element={<Congressi />} />
        <Route path="/articoli" element={<Articoli />} />
        <Route path="/contatti" element={<Contatti />} />
      </Routes>
    </div>
  );
}

export default App;
