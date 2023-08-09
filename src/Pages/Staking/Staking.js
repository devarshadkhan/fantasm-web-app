import React from "react";
import Img16 from "../../Image/img16.png";
import Img17 from "../../Image/img17.png";
import Img18 from "../../Image/img18.png";
import Img19 from "../../Image/img19.svg";
import Img2 from "../../Image/img2.png";
export default function Staking() {
  return (
    <>
      <div className="wrap-8">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="bag-76">
                <h2>Staking</h2>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-9">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <div className="bag-77">
                <div className="bag-78">
                  <img src={Img16} alt="" />
                  <p>Total FXM Staked</p>
                  <div className="bag-79">
                    <span>787,007</span>
                    FXM
                  </div>
                </div>
                <div className="bag-78">
                  <img src={Img17} alt="" />
                  <p>Total FXM Locked</p>
                  <div className="bag-79">
                    <span>787,007</span>
                    FXM
                  </div>
                </div>
                <div className="bag-78">
                  <img src={Img18} alt="" />
                  <p>Accumulated Fees</p>
                  <div className="bag-79">
                    <span>787,007</span>
                    FXM
                  </div>
                </div>
              </div>

              <div className="bag-77">
                <div className="bag-80">
                  <h2>STAKE FXM</h2>
                  <p>
                    APR:<span>54%</span>
                  </p>
                </div>
                <p>Stake FXM and earn platform fees with no lockup period.</p>
                <div className="bag-66">
                  <div className="bag-67">Amount</div>
                  <div className="bag-68">
                    Wallet Balance: - FXM:
                    {/* <button>-</button> */}
                  </div>

                  <div className="bag-69">
                    <img src={Img2} alt="" className="bag-81" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0.0"
                    />
                  </div>
                </div>
                <div className="bag-70">
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>

              <div className="bag-77">
                <div className="bag-80">
                  <h2>LOCK FXM</h2>
                  <p>
                    APR:<span>54%</span>
                  </p>
                </div>
                <p className="bag-120">
                  Lock FXM and earn platform fees and penalty fees in unlocked
                  FXM
                </p>
                <p className="bag-120">
                  {" "}
                  The lock date are grouped by the week. Any lock between
                  Thursday 00:00 UTC to Wednesday 23:59 UTC are grouped in the
                  same week group, and will release at the same time eight (8)
                  weeks later.
                </p>
                <p className="bag-120">
                  {" "}
                  Locked FXM will continue to earn fees after the locks expire
                  if you do not withdraw.
                </p>
                <div className="bag-66">
                  <div className="bag-67">Amount</div>
                  <div className="bag-68">
                    Wallet Balance: - FXM:
                    {/* <button>-</button> */}
                  </div>

                  <div className="bag-69">
                    <img src={Img2} alt="" className="bag-81" />
                    <input
                      type="text"
                      className="form-control"
                      placeholder="0.0"
                    />
                  </div>
                </div>
                <div className="bag-70">
                  <button className="btn btn-primary">Connect</button>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="bag-90">
                <div className="bag-91">
                  <h6>Claimable FXM</h6>
                  <div className="bag-92">
                    <img src={Img2} alt="" className="bag-81" />
                    <span>-</span>
                    FXM
                  </div>
                  <br />
                  <div className="bag-93">
                    Include staked FXM and vested FXM
                  </div>
                  <button disabled className="bag-95">
                    Claim
                  </button>
                </div>
                <div className="bag-91">
                  <h6>FXM in Vesting</h6>
                  <div className="bag-92">
                    <img src={Img2} alt="" className="bag-81" />
                    <span>-</span>
                    FXM
                  </div>
                  <br />
                  <div className="bag-93">
                    FXM amount that can be claimed with a 50% penalty
                  </div>
                  {/* <button disabled>Claim</button> */}
                </div>
                <div className="bag-91">
                  <h6>Claim all FXM above</h6>
                  <div className="bag-92">
                    <img src={Img2} alt="" className="bag-81" />
                    <span>-</span>
                    FXM
                  </div>
                  <br />
                  <div className="bag-93">Early Exit Penalty</div>
                  <button disabled className="bag-95">
                    Claim with penalty
                  </button>
                </div>
                <div className="bag-91">
                  <h6>Claim with penalty</h6>
                  <div className="bag-92">
                    <img src={Img2} alt="" className="bag-81" />
                    <span>-</span>
                    FXM
                  </div>
                  <br />
                  {/* <div className="bag-93">
                  Include staked FXM and vested FXM
                 </div>
                 <button disabled>Claim</button> */}
                </div>
              </div>
              <div className="bag-97">
                <div className="bag-98">
                  <h6>FXM Vests</h6>
                </div>
                <div className="bag-99">
                  <span className="title">Total:</span>
                  <span className="value">-</span>
                  <span className="symbol">FXM</span>
                </div>
                <div className="bag-100">
                  <div className="bag-101">
                    <img src={Img19} alt="" />
                    <p>No vesting found</p>
                  </div>
                </div>
              </div>
              <div className="bag-97">
                <div className="bag-98">
                  <h6>FXM Locks</h6>
                </div>
                <div className="bag-99">
                  <span className="title">Total:</span>
                  <span className="value">-</span>
                  <span className="symbol">FXM</span>
                </div>
                <div className="bag-100">
                  <div className="bag-101">
                    <img src={Img19} alt="" />
                    <p>No vesting found</p>
                  </div>
                </div>
              </div>
              <div className="bag-97">
                <div className="bag-98">
                  <h6>Claimable Fees</h6>
                </div>
                <div className="bag-99">
                  <span className="title">Total:</span>
                  <span className="value">-</span>
                  <span className="symbol">FXM</span>
                </div>
                <div className="bag-100">
                  <div className="bag-101">
                    <img src={Img19} alt="" />
                    <p>You don't have any claimable fee yet</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
