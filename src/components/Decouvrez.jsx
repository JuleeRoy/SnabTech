import React from 'react'
import { NavLink } from 'react-router-dom'

const Decouvrez = () => {
  return (
    <div className="container decouvrez-part mt-2">
       <div className="row">
        <div className="col-md-4">
            <div className="lines d-flex gap-2">
              <div className="line">.</div>
              <div className="line">.</div>
              <div className="line">.</div>
            </div>
        <p className="h2 title">Découvrez les experts</p>
        <p className='d-block  d-md-none fw-normal'>
        Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   
        </p>
        </div>
        <div className="col-md-8">
        <p className='content text-justify'>
        “ Mon rêve était d’aller vivre en Afrique. j'ai postulé à une offre d'emploi pour le poste de web developer publiée sur PANDA et le mois suivant je commençais à travailler à Dakar! ”
        </p>
        <p className="text-end px-5 Omar-Ndiaye">Omar Ndiaye</p>
        </div>
       </div>
    </div>
  )
}

export default Decouvrez