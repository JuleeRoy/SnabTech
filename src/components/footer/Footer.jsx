import React from "react";
import { GoNorthStar } from "react-icons/go";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="container mt-4 footer">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-6">
                <li className="footer-title">Page d'accueil</li>
                <li>Missions de PANDA</li>
                <li>Fonctionnalités</li>
                <li>Découvrez les experts</li>
                <li>Découvrez les organisations en Afrique</li>
                <li>Offres d'emploi</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>lorem lorem</li>
                <li>Offres d'emploi</li>
              </div>
              <dic className="col-6">
                <li className="footer-title">pour les EXPERTS</li>
                <li>lorem</li>
                <li>Offres d'emploi</li>
                <li>lorem</li>
                <li>lOffres d'emploi</li>
              </dic>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="row">
              <div className="col-6">
                <li className="footer-title">pour les organisations en afrique</li>
                <li>lorem lrem</li>
                <li>lorem lrem</li>
                <li>lorem lrem</li>
                <li>lorem lrem</li>
                <li>lorem lrem</li>
                <li>lorem lrem</li>
              </div>

              <div className="col-6">
                <li className="footer-title">Contact</li>
                <li>lorem</li>
              </div>
            </div>
          </div>
        </div>


        {/* footer */}
        <div className="container-fluid d-none d-md-flex  flex-wrap justify-content-between align-items-center">
          <div className="fw-bold">
            <span className="px-1"> P</span>
            <span className="A px-1">
              <GoNorthStar className="header-text-star" />
            </span>
            <span>NDA</span>
          </div>
          <div>© 2022 Tous droits réservés</div>
          <div>
            <span className="px-2">
              <FaLinkedin />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
          </div>
        </div>


        <div className="container-fluid d-flex d-md-none justify-content-between">
        <div className="fw-bold">
            <span className="px-1"> P</span>
            <span className="A px-1">
              <GoNorthStar className="header-text-star" />
            </span>
            <span>NDA</span>
          </div>
          <div>
            <span className="px-2">
              <FaLinkedin />
            </span>
            <span>
              <FaTwitter />
            </span>
            <span>
              <FaFacebookF />
            </span>
          </div>
        </div>
        <div className="container text-center d-block d-md-none">
        © 2022 Tous droits réservés
        </div>
      </div>
    </>
  );
};

export default Footer;
