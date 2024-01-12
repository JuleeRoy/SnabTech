import React from "react";
import founder1 from "../../assets/founder1.png";
import founder2 from "../../assets/founder2.png";
const Founder = () => {
  return (
    <div className="container mt-5 bg-light" id="founder-part">
      <p className="h2 title">Les fondateurs</p>

      <div className="row">
        <div className="col-md-6 col-12">
          <div className="row mt-5">
            <div className="col-6">
              <figure>
                <img src={founder1} alt="" className="img-fluid" />
              </figure>
              <p className="p-0 m-0 name-title">Co-founder-Panda</p>
              <p className="founder-name m-0 p-0">Lorem, ipsum.</p>
            </div>
            <div className="col-6">
              <figure>
                <img src={founder2} alt="" className="img-fluid" />
              </figure>
              <p className="p-0 m-0 name-title">Co-founder-Panda</p>
              <p className="founder-name p-0 m-0">Lorem, ipsum.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-12 d-flex">
          <div className="row mt-3">
            <div className="col-12  col-md-6 flex-column mt-auto d-flex">
              <div className="mb-5 border founder-content d-flex">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Architecto rerum eum nesciunt recusandae consequuntur ex quos
                eius facilis in! Veritatis!
               
              </div>
            </div>

            <div className="col-12  col-md-6 d-flex flex-column mt-auto ">
              <div className="mb-5 border d-flex founder-content">
                julee ipsum dolor sit amet consectetur adipisicing elit.
                Ajrchitecto rerum eum nesciunt recusandae consequuntur ex quos
                eius facilis in! Veritatis!
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founder;
