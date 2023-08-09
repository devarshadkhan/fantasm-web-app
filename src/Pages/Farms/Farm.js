import React from "react";
import Img2 from "../../Image/img2.png";
import { FarmAccordion } from "../../Components/FarmAccordion";
import Data from "../../Components/Data";

const Farm = () => {
  return (
    <>
      <div className="wrap-7">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
            <div className="bag-53" >
                      <div className="bag-54">
                        <div className="bag-55">
                          <h2>Farms</h2>
                          <div className="bag-56">
                            <p>Rewards:</p>
                            <img src={Img2} alt="" />
                            <span>0 FXM</span>
                            <button className="bag-61">Claim All</button>
                          </div>
                        </div>
                      </div>
                    </div>
                    {
                        Data.map((element) => {
                        return  (
                            <FarmAccordion data={element}/>
                        )
                    })
                    }

            </div>
          </div>
        </div>
      </div>

     
    </>
  );
};

export default Farm;
