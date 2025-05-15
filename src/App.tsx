import "./App.css";
import MarsRoverPhotos from "./components/MarsRoverPhotos";
import NavBar from "./components/NavBar/NavBar";
import PictureOTD from "./components/PictureOTD";
import Title from "./components/Title";

function App() {
  return (
    <>
      <div className="app-container">
        <div className="navbar-container">
          <NavBar />
        </div>
        <div className="title-container">
          <Title />
        </div>
        <div className="content-container" style={{ flex: 1 }}>
          <PictureOTD />
          <MarsRoverPhotos />
        </div>
      </div>
    </>
  );
}

export default App;
