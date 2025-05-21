import Logo from "./Logo";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar hstack">
      <Logo />
      <div className="APOTD nav-item">
        <a href="#PictureOTD" className="nav-link active text-uppercase">
          APOTD
        </a>
      </div>
      <div className="CloseEarthObjects nav-item">
        <a href="#CloseEarthObjects" className="nav-link active text-uppercase">
          NEO
        </a>
      </div>
      <div className="MarsPhotos nav-item">
        <a href="#PhotosFromMars" className="nav-link active text-uppercase">
          Mars Rover
        </a>
      </div>
    </div>
  );
};

export default NavBar;
