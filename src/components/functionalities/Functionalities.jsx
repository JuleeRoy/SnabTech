import React from "react";

import { GoNorthStar } from "react-icons/go";
import GlobePart from "./GlobePart";
const Functionalities = () => {
  return (
    <div className="container  function-part mb-5">
        <p className="h2 py-3 title">Fonctionnalités</p>
      <div className="row">
        <div className="col-md-6 col-lg-7 func-item-container">
           <div>
           <div className='func-items'>
             <GoNorthStar className="mt-3"/>
              <div>
                <p className="h4">headings</p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus nisi maiores </p>
              </div>
            </div>
            <div className='func-items'>
             <GoNorthStar/>
              <div>
                <p className="h4">headings</p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus nisi maiores </p>
              </div>
            </div>
            <div className='func-items'>
             <GoNorthStar/>
              <div>
                <p className="h4">headings</p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus nisi maiores </p>
              </div>
            </div>
            <div className='func-items'>
             <GoNorthStar/>
              <div>
                <p className="h4">headings</p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus nisi maiores </p>
              </div>
            </div>
            <div className='func-items'>
             <GoNorthStar/>
              <div>
                <p className="h4">headings</p>
                <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis possimus nisi maiores </p>
              </div>
            </div>
         
           </div>
        </div>
        <div className="col-md-6 col-lg-5 text-center d-flex flex-column justify-content-center">
           <GlobePart/>
        </div>
     </div>

    
    </div>
  );
};

export default Functionalities;
