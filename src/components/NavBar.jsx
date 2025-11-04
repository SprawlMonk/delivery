import logo from "../assets/logo.png"
import CartWidget from "./CartWidget";
import Nav from "react-bootstrap/Nav";
import DropdownMenu from "./Dropdown";
import { Link } from "react-router-dom";
const NavBar = () => {

  return (
    <Nav variant="underline">
      <Nav.Item>
        <Link to="/">
          <img src={logo} alt="company logo" />
        </Link>
      </Nav.Item>
      <div className="NavBar">
       <DropdownMenu />   
       <Nav.Item>
         <Link to="/cart">
           <CartWidget />
         </Link>
       </Nav.Item>
      </div>
    </Nav>
  );
  
 

  

 

};

export default NavBar;