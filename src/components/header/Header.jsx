import React from 'react'
import { NavLink } from 'react-router-dom'
import { useState } from 'react'
import A from "../../assets/star1.png"
import { GiHamburgerMenu } from "react-icons/gi";
import { GoNorthStar } from "react-icons/go";
import Navbar from './Navbar'
import MobileNavbar from './MobileNavbar';

const Header = () => {
 const [open, setopen] = useState(false);
      
  const handleopen = () => {
    setopen(!open);
    console.log(open)
  };
  return (
      <>
      <nav className='d-flex justify-content-between p-4 align-items-center'>
        <div className="brand">
          <NavLink to="/">EN-FR</NavLink>
        </div>

        <div className="header-text h3 d-md-flex d-none bg-light">
           <span> Bienvenue sur P</span>
            <span className='A'>
              <GoNorthStar className='header-text-star'/>
              </span>
             <span>NDA</span>
        </div>

        <div className="header-text d-md-none d-block fs-6 text-center fw-bold">
         Bienvenue sur PANDA
        </div>

        <div className="auth d-sm-block d-none">
            <div>
            <NavLink className="d-block" to="/sign">Créer un compte</NavLink>
            <NavLink className="d-block">Se connecter</NavLink>
            </div>
        </div>

        <div className='d-sm-none fs-4' onClick={handleopen}>
           <GiHamburgerMenu/>
        </div>
     </nav>
     <Navbar />
    {
      open ? <MobileNavbar/>:""
    }
      </>
  )
}

export default Header