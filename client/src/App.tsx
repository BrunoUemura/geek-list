import React, { FC } from "react";
import { Navbar } from "./components";
import "./styles/App.css";

const App: FC = () => {
  return (
    <div className="app">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main"></div>
      <div className="footer"></div>
    </div>
  );
};

export default App;