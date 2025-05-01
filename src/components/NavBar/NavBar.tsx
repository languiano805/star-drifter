
import Logo from "./Logo";
import  "./Navbar.css";
import "./NavBar.css";


const NavBar = () => {
  return (
    <div className="navbar hstack">
      <Logo />
      <h1 flex-direction="left">Navbar</h1>
    </div>
  );
};

export default NavBar;
