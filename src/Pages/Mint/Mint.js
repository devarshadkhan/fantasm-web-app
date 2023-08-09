import React from "react";
import Img3 from "../../Image/img3.png";
import Img4 from "../../Image/img4.png";
import Img15 from "../../Image/img15.svg";

export default function Mint() {
  return (
    <>
      <div className="wrap-6">
        <div className="container">
          <div className="row">
            <div className="col-md-12  bag-47">
              <div className="bag-41">
                <h2>Mint</h2>
              </div>
              <div className="bag-45">
                <div className="bag-42">
                  <div className="bag-43">
                    <h3>FTM</h3>
                    <p>Balance:-FTM</p>
                  </div>
                  <div className="bag-44">
                    <img src={Img4} alt="" className="bag-24" />
                    <input type="number" name="" id="" placeholder="0.0" />
                  </div>
                </div>
                <div className="bag-46 bag">
                  <img src={Img15} alt="" />
                </div>
                <div className="bag-48">
                  <div className="bag-43">
                    <h3>FTM</h3>
                    <p>Balance:-FTM</p>
                  </div>
                  <div className="bag-44">
                    <img src={Img3} alt="" className="bag-24" />
                    <input type="number" name="" id="" placeholder="0.0" />
                  </div>
                </div>

                <div className="bag-49">
                  <div className="bag-50">
                    <table class="table table-borderless">
                      <tbody>
                        <tr>
                          <td>Mint Fee</td>
                          <td className="bag-51">0.3%</td>
                        </tr>
                        <tr>
                          <td>Minimum Received</td>
                          <td className="bag-51">0 FTMX</td>
                        </tr>
                        <tr>
                          <td>Slippage</td>
                          <td className="bag-51">
                            <button>0.5%</button>
                            <button>0.5%</button>
                            <button>0.5%</button>
                            <button className="bag-52">0.5%</button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="header-button bag-1 bag-2">
                  <button>
                    <span className="bag-4">Connect Wallet</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};