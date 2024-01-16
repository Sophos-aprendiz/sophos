/* eslint-disable react/prop-types */
import { useMsal } from "@azure/msal-react";
import logo from "../../assets/logo-violet.png";
import user from "../../assets/user.png";
import "./Header.css";
import logOut from "../../assets/logout.png";
import { useState } from "react";
const Header = ({ email }) => {
  const { instance } = useMsal();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogOut = () => {
    window.localStorage.clear();
    instance.logout().catch((error) => console.log(error));
  };
  return (
    <header>
      <img src={logo} />

      <div className="header-content">
        <img src={user} />
        <div className="user-email" onClick={toggleMenu}>
          {email}
        </div>

        {isMenuOpen && (
          <div className="dropdown-menu">
            <ul>
              <li onClick={handleLogOut}>
                <img src={logOut} />
                Cerrar Sesión
              </li>
            </ul>
          </div>
        )}
      </div>
      <div className="line-header"></div>
    </header>
  );
};

export default Header;
