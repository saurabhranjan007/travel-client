import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Routes, Link } from "react-router-dom";

import Home from "./components/Home/Home";
import Form from "./components/Form/Form";
import TravelDetails from "./components/TravelDetails/TravelDetails";


function App() {

  const [dataId, setDataId] = useState('')
  console.log("dataId ", dataId);

  return (
    <div>
      <Home />

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Form setDataId={setDataId} />}></Route>
          <Route exact path ="/trip/details" element={<TravelDetails dataId={dataId} />}></Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
