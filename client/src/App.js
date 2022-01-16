import React, { Fragment } from "react";
import './App.css';

//components

import InputRegister from "./components/InputRegister";
import ListRegisters from "./components/ListRegisters";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputRegister />
        <ListRegisters />
      </div>
    </Fragment>
  );
}

export default App;
