
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import PictureOTD from "./components/PictureOTD";

function App() {
  return (
    <>
      <div className="navbar-container">
        <NavBar />
      </div>
      <div className="title-container">
        <h1>Space Drifter</h1>
      </div>
      <div className="content-container" style={{ flex: 1 }}>
        <PictureOTD />
      </div>
    </>
  );
}

export default App;
