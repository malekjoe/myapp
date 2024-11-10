import CodeIcon from "@mui/icons-material/Code";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { HiX } from "react-icons/hi";
import { useState } from "react";
import './NavBar.scss';

const data = [
  { label: "HOME", to: "/" },
  { label: "SKILLS", to: "/skills" },
  { label: "ABOUT ME", to: "/about" },
  { label: "PORTFOLIO", to: "/portfolio" },
  { label: "RESUME", to: "/resume" },
  { label: "CONTACT ME", to: "/contact" },
];

const NavBar = () => {
  const [ToogleIcon, setToogleIcon] = useState(false);

  const handleToogleIcon = (close = false) => {
    setToogleIcon(close ? false : !ToogleIcon);
  };

  return (
    <div>
      <nav className="navBar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo">
            <CodeIcon fontSize="large" />
          </Link>
        </div>
        <ul className={`navbar__container__menu ${ToogleIcon ? 'active' : ''}`}>
          {data.map((item, key) => (
            <li key={key} className="navbar__container__menu__item">
              <Link
                className="navbar__container__menu__item__links"
                to={item.to}
                onClick={() => handleToogleIcon(true)} // Close menu on item click
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav_icon" onClick={() => handleToogleIcon()}>
          {ToogleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
