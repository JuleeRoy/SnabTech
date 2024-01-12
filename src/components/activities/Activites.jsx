import React from "react";
import agri from "../../assets/agri.png";
import { GoNorthStar } from "react-icons/go";
const Activites = () => {
  return (
    <div className="container mt-5   activities-part">
      <div className="row align-items-center">
        <div className="col-6">
          <p className="h2 title d-none d-md-block">
            Top 5 des domaines d’activités porteurs en Afrique{" "}
          </p>
          <p className="h5 fw-bold d-block d-md-none">
            Top 5 des domaines d’activités porteurs en Afrique{" "}
          </p>
        </div>

        <div className="col-6">
          <div className="lines d-flex gap-2 mb-3">
            <div className="line">.</div>
            <div className="line">.</div>
            <div className="line">.</div>
          </div>
        </div>
      </div>

      <div className="row align-items-center justify-content-between bg-light p-1">
        <div className="col-12 col-md-4 col-lg-4">
          <figure>
            <img src={agri} alt="" className="img-fluid rounded-circle" />
          </figure>
        </div>

        <div className="col-12 col-md-8 col-lg-5">
          <ul>
            <li>
              <GoNorthStar/>
              <span> Les énergies renouvelables</span>
            </li>
            <li>
              <GoNorthStar />
              <span> Les énergies renouvelables</span>
            </li>
            <li>
              <GoNorthStar />
              <span> Les énergies renouvelables</span>
            </li>
            <li>
              <GoNorthStar />
              <span> Les énergies renouvelables</span>
            </li>
            <li>
              <GoNorthStar />
              <span> Les énergies renouvelables</span>
            </li>
          </ul>
          <button className="btn border rounded-pill  self-end">
                Publier ou voir les événements 
      </button>
        </div>
      </div>
     
    </div>
  );
};

export default Activites;
