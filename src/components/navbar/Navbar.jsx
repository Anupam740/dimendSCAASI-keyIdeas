import React, { useState } from 'react';
import { GoSearch } from 'react-icons/go';
import { AiOutlineHeart } from 'react-icons/ai';
import { CgProfile } from 'react-icons/cg';
import { Link, Element, animateScroll as scroll } from 'react-scroll';
import { FaBars } from 'react-icons/fa';
import { AiFillCloseCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import './navbar.css';

function NavBar() {
  const [menuIcon, setMenuIcon] = useState(false);
  const handleLogoIcon = () => {
    setMenuIcon(!menuIcon);
  };
  const navigate = useNavigate();

  function handleLogo() {
    navigate('/');
  }

  return (
    <nav className="navbarItems">
      <p className="logo" onClick={handleLogo}>
        dimend<span>SCAASI</span>
      </p>
      <div className="menu-icons" onClick={handleLogoIcon}>
        {menuIcon ? (
          <AiFillCloseCircle className="AiFillCloseCircle" />
        ) : (
          <FaBars className="FaBars" />
        )}
      </div>
      <ul className={menuIcon ? 'nav-menu active' : 'nav-menu'}>
        <li>
          <Link to="/" className="nav-links">
            Diamonds
          </Link>
        </li>
        <li>
          <Link to="accessories" className="nav-links">
            Accessories
          </Link>
        </li>
        <li>
          <Link to="finejewelry" className="nav-links">
            Fine Jewelry
          </Link>
        </li>
        <li>
          <Link to="watches" className="nav-links">
            Watches
          </Link>
        </li>
      </ul>
      <div className="navbar-rightpart">
        <GoSearch className='icon' />
        <AiOutlineHeart className='icon' />
        <CgProfile className='icon' />
      </div>
     
    </nav>
  );
}

export default NavBar;
