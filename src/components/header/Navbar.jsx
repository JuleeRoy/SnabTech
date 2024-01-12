import React from 'react'

const Navbar = () => {
  return (
    <div id='navbar-container' className="d-sm-block d-none">
        <ul className='d-flex justify-content-around'>
            <li className='nav-links'>Missions de PANDA</li>
            <li className='nav-links'>Fonctionnalités</li>
            <li className='nav-links'>experts</li>
            <li className='nav-links'>Organisations</li>
            <li className='nav-links'>fOffresive</li>
            <li className='nav-links'>Evénements</li>
            <li className='nav-links'>Témoignages</li>
            <li className='nav-links'>Fondateurs</li>
        </ul>
    </div>
  )
}

export default Navbar