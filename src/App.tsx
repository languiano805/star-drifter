import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <div className="navbar-container">
        <div className="col">
          <NavBar />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Space Drifter</h1>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <h1>Content</h1>
        </div>
      </div>
    </>
  );
}

export default App;
