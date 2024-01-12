import React from "react";
import v1 from "../assets/v-img-1.png";
import v2 from "../assets/v-img-2.png";
import v3 from "../assets/v-img-3.png";
const Voir_tout = () => {
  return (
    <div className="container voir-part">
      <div className="row">
        <div className="col-md-4 d-md-flex d-none">
          <div className="d-flex flex-column mt-auto">
            <p className="content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit
              perferendis nesciunt eius dolorum repellendus maiores quos dicta
              ad quam iure!
            </p>
            <button
              className="btn rounded-pill px-5 border mb-5"
              style={{ width: "100%" }}
            >
              Voir Tout
            </button>
          </div>
        </div>

        <div className="col-md-8 d-flex">
          <div className="img-container d-flex justify-content-around">
            <div className="d-flex flex-column">
              <figure className="img-1 mt-auto">
                <img src={v1} alt="" className="img-fluid" />
              </figure>
              .
            </div>
            <div className="d-flex flex-column mt-auto">
              <figure className="img-2 mt-auto">
                <img src={v2} alt="" className="img-fluid" />
              </figure>
            </div>
            <div className="d-flex flex-column mt-auto">
              <figure className="img-3 mt-auto">
                <img src={v3} alt="" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
        <button
          className="btn rounded-pill px-5 border d-md-none d-block"
          style={{ width: "100%" }}
        >
          Voir Tout
        </button>
      </div>
    </div>
  );
};

export default Voir_tout;
