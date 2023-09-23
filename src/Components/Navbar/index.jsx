import { memo } from "react"
import "./style.css";
import logo from "../../images/logoiim-removebg-preview.png"
import { Link } from "react-router-dom";

const NavComponent = () => {
  return <>
    <div className="nav-container">
      <div className="logo-container">
        <img src={logo} alt="logo" />
      </div>
      <div className="menu-container">
        <Link className="links" to="/home">Home</Link>
        <Link className="links" to="/home">About</Link>
        <Link className="links" to="/home">Contact</Link>
        <Link className="links" to="/home">Carrers</Link>
      </div>
    </div>
  </>
}


export default memo(NavComponent);

