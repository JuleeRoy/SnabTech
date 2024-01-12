import React from 'react'
import "../styles/style.css"
import { GoNorthStar } from "react-icons/go";
import { NavLink } from 'react-router-dom';
const MobileNavbar = () => {
  return (
     <div id='mobile-navbar'>
      <ul>
         <li>
         <NavLink className="d-block fw-bold">Créer un compte</NavLink>
         </li>
         <li>
         
            <NavLink className="d-block fw-bold">Se connecter</NavLink>
         </li>
         <li>
            <GoNorthStar className='header-text-star' />
         </li>
         <li> Missions de PANDA</li>
         <li> Fonctionnalités</li>
         <li>experts</li>
         <li>Organisations  en Afrique</li>
         <li>Offres d’emploi</li>
         <li>Evénements à venir</li>
         <li> Témoignages</li>
         <li>Fondateurs</li>
         
      </ul>
     </div>
  )
}

export default MobileNavbar