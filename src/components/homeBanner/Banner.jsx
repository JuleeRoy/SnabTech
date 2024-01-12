import React from 'react'
import banner1 from "../../assets/banner1.png"
import banner2 from "../../assets/banner2.jpg"
const Banner = () => {
  return (
    <div className="container">
      <p className='text-center h2 title'>
      Nous réunissons experts du monde entier et organisations en Afrique
      </p>
       <div className="row" id='home-banner'>

        <div className="col-md-4">
        <p className="h3">Organisations en Afrique</p>
        Vous êtes une entreprise privée ou publique basée en Afrique et vous avez du mal à recruter des profils expérimentés? Vous êtes une start-up africaine et vous souhaitez faire appel aux services d'un prestataire externe? Vous recherchez une expertise spécifique pour réaliser un futur projet? 
        <p className='mt-3'>
        Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!
        </p>


        </div>
        <div className="col-md-4" id='img-container'>
          <img className='img-fluid' src={banner1} alt="banner1" />
            <img className='img-fluid' src={banner2} alt="banner2" />
          
         </div>
        <div className="col-md-4">
        <p className="h3">Experts </p>
        Vous êtes un professionnel expérimenté et vous planifiez de partir travailler en Afrique? Vous vous rendez souvent sur le continent africain pour des raisons professionnelles et vous souhaitez étendre votre réseau? Vous souhaitez partager votre expertise avec des organisations africaines sans vous déplacer?

        <p className='mt-3'>
        Grâce à son réseau, PANDA vous aide à trouver les experts dont vous avez besoin!
        </p>
          </div>
       </div>
    </div>
  )
}

export default Banner