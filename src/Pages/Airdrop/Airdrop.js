import React from 'react'
// import Header from '../../Header'
import Img20 from '../../Image/img20.png'
export default function Airdrop() {
  return (
    <>
      {/* <Header/> */}
      <div className="wrap-10">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-102">
                <div className="bag-103">
                  <img src={Img20} alt="" />
                  <h2>Please connect your wallet</h2>
                  <p>Please connect your wallet</p>
                </div>
                <div className="bag-70">
                  <button className="btn btn-primary">Connect Wallet</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
