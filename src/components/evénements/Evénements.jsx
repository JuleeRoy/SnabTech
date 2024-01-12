import React from 'react'
import event from "../../assets/events.png"
import event2 from "../../assets/event2.png"
import { NavLink } from 'react-router-dom'
const Evénements = () => {
  return (
    <div className="container mt-5">
      <div className="row align-items-center">
       <div className="col-md-4  col-6">
          <div className="row">

            <div className="col-md-12">
            <div className="lines d-flex gap-2 mb-3">
              <div className="line">.</div>
              <div className="line">.</div>
              <div className="line">.</div>
            </div>
            <p className="h2 title d-none d-md-block">Evénements à venir</p>
            <p className="h5 fw-bold d-block d-md-none">Evénements à venir</p>
            <p>Publié par: Pablo Diahuno</p>
            <figure>
              <img src={event2} alt=""  className='img-fluid rounded-circle'/>
            </figure>
            </div>
              <div className="col-md-12">
                <p className='fw-bold'>Sortez votre carnet d'adresses! Restez informés de tous les événements à venir autour du business en Afrique organisés en Afrique ou à l'étranger.</p>
       
            </div>
          </div>

       </div>

       <div className="col-md-8 col-6">
         <div className="row">
          <div className="col-md-7 col-12">
             <img src={event} alt="" className='img-fluid rounded-circle' />
          </div>
          <div className="col-md-5 col-12 event-details">
             <li>
             <span>L'événement:</span>  <span>The Nancy party’s </span>
             </li>
             <li>
              <span>date:</span><span>1/12/2024</span>
             </li>
             <li>
              <span>Lieu:</span> <span>Senegal</span>
             </li>
          </div>
         </div>
       </div>
      </div>
      <button className="btn border rounded-pill col-12 col-md-6">
                Publier ou voir les événements 
      </button>
    </div>
  )
}

export default Evénements