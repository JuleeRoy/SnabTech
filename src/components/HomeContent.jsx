import React from 'react'

const HomeContent = () => {
  return (
     <div className="container mt-5">
        <div className="home-content col-md-8 m-auto h5">
      <p className='text-center fw-bold'>Rejoignez notre communauté et aidez-nous à construire la première plateforme de networking en ligne à destination du marché africain!</p>

      <div className="btn-box d-flex  gap-2 justify-content-center flex-wrap">
        <button className='btn border rounded-pill px-5'>Se connecter</button><button className='btn border rounded-pill px-3'>Créer un compte</button>
      </div>
        </div>
     </div>
  )
}

export default HomeContent