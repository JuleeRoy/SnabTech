import React from 'react'
import { NavLink } from 'react-router-dom'
import risk from "../../assets/Risk-Analyst.png"
import Soft_Engi from "../../assets/Software-Enginner.png"
const Offres = () => {
  return (
    <div className="container offres-part mt-5">
        <div className="row align-items-center">
            <div className="col-md-3">
            <p className="h2 title">Offres d'emploi</p>
            <p className='d-block  d-md-none fw-normal'>
        Connectez-vous avec des organisations africaines, postulez au job de vos rêves en Afrique ou partagez votre expertise même à distance!   
        </p>
            </div>

            <div className="col-md-9">
                  <div className="d-md-flex gap-3">
                    <div className="soft_engi border mb-3">
                          <p className="fw-bolder h5 text-wrap px-3" style={{width: "100%"}}> Lead Software engineer</p>
                           <p className='p-0 m-0 madagascar'>Madagascar </p>
                            <div className="inner-div d-flex">
                                <div>
                                <p className='p-0 m-0 madagascar'>Full-Time</p>
                                <NavLink >
                                +Favorites</NavLink>
                                </div>
                                <div>
                                   <figure className='mt-3'>
                                   <img src={Soft_Engi} alt="" className="img-fluid" />
                                   </figure>
                                   <p className='p-0 m-0 fw-bolder'>Tubik Studio</p>
                                </div>
                                <div>
                                <p>1 day ago</p>
                                </div>
                            </div>
                            <button className='btn rounded-pill px-5 border'>Voir</button>
                    </div>

                    <div className="risk_analyst border mb-3">
                            <p className="fw-bolder h5 " style={{width: "100%"}}>Risk Analyst</p>
                            <p className='text-ccenter madagascar'>Madagascar </p>
                            <div className="inner-div d-flex">
                                <div>
                                <p className='p-0 m-0 madagascar'>Full-Time</p>
                                <NavLink>
                                +Favorites</NavLink>
                                </div>
                                <div>
                                   <figure>
                                   <img src={risk} alt="" className="img-fluid" />
                                   </figure>
                                   <p className='p-0 m-0 fw-bolder'>Bumba Gumb</p>
                                </div>
                                <div>
                                <p>1 day ago</p>
                                </div>
                            </div>
                            <button className='btn rounded-pill px-5 border'>Voir</button>
                    </div>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Offres