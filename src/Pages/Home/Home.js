import React from "react";
import Img2 from "../../Image/img2.png";
import Img3 from '../../Image/img3.png'
import Img10 from "../../Image/img10.png";
import Img11 from "../../Image/img11.png";
import Img12 from "../../Image/img12.png";
import Img13 from "../../Image/img13.png";
import Img14 from "../../Image/img14.png";
// import Img2 from './Image/img2.png'
// import Img3 from './Image/img3.png'
import Img4 from '../../Image/img4.png'
import Img9 from "../../Image/img9.svg";
import { Link } from "react-router-dom";
import Data2 from "../../Components/Data2";
export default function home() {
  return (
    <>
     {
      Data2.map((element => {
        console.log("Get-Data",Data2)
        return (
          <>
          <div key={element.id3}>
          <div className="wrap-2" >
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div className="bag-6">
                <h1>Welcome to Fantasm</h1>
              </div>
              <div className="bag-7">
                <p>
                  Fractional-Algorithmic Synthetic Token pegged to the value of
                  1 FTM on Fantom Opera
                </p>
              </div>

              <div className="bag-8" >
                <p>
                  Total Value Locked
              <span>{element.desc}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
         
      <div className="wrap-3">
        <div className="container">
          <div className="row bag-33">
            <div className="col-md-6 col-sm-12">
              <div className="bag-9">
                <div className="bag-10">
                  <img src={Img2} alt="" className="bag-24"/>
                  <div className="bag-11">
                    <p>FXM</p>
                    <br />
                    <Link to="/">
                      View contract
                      <img src={Img9} alt="" />
                    </Link>
                  </div>
                  <div className="bag-12">
                    <div className="bag-13">
                      <p>
                        Price:
                        <span>{element.content1}</span>
                      </p>
                      <h6>{element.content2}</h6>
                    </div>
                  </div>
                </div>

                <div className="bag-14">
                  <div className="bag-15">
                    <div className="bag-16">
                      <p>Circulating supply</p>
                    </div>
                    <div className="line"></div>
                    <div className="bag-19">
                      <span>{element.content3}</span>
                    </div>
                  </div>
                  <div className="bag-15 bag-20">
                    <div className="bag-16">
                      <p>Market Cap</p>
                    </div>
                    <div className="line"></div>
                    <div className="bag-19">
                      <span>{element.content4}</span>
                    </div>
                  </div>
                </div>
                <div className="bag-21">
                  <button>
                    +
                    <img src={Img10} alt="" />
                  </button>
                </div>
                <div className="bag-23">
                 <Link to="/">BUY FXM</Link>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="bag-9">
                <div className="bag-10">
                  <img src={Img3} alt="" className="bag-24"/>
                  <div className="bag-11">
                    <p>FXMX</p>
                    <br />
                    <Link to="/">
                      View contract
                      <img src={Img9} alt="" />
                    </Link>
                  </div>
                  <div className="bag-12">
                    <div className="bag-13">
                      <p>
                        Price:
                        <span>{element.content5}</span>
                      </p>
                      <h6>{element.content6}</h6>
                    </div>
                  </div>
                </div>

                <div className="bag-14">
                  <div className="bag-15">
                    <div className="bag-16">
                      <p>Circulating supply</p>
                    </div>
                    <div className="line"></div>
                    <div className="bag-19">
                      <span>{element.content7}</span>
                    </div>
                  </div>
                  <div className="bag-15 bag-20">
                    <div className="bag-16">
                      <p>Market Cap</p>
                    </div>
                    <div className="line"></div>
                    <div className="bag-19">
                      <span>{element.content8}</span>
                    </div>
                  </div>
                </div>
                <div className="bag-21">
                  <button>
                    +
                    <img src={Img10} alt="" />
                  </button>
                </div>
                <div className="bag-23">
                 <Link to="/">BUY FXM</Link>
                </div>
                <div className="bag-22">
                 <Link to="/">MINT</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wrap-4">
        <div className="container">
            <div className="row bag-33">
                <div className="col-md-3 col-sm-12">
                    <div className="bag-23">
                        <img src={Img11} alt="" />
                        <div className="content bag-36" >
                            <span>STAKE FXM</span>
                        </div>
                        <br />
                        <div className="value bag-34 bag-37">
                        <p>APR:</p>
                        <span>0%</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="bag-23">
                        <img src={Img12} alt="" className="bag-35"/>
                        <div className="content">
                            <span>LOKE FXM</span>
                        </div>
                        <br />
                        <div className="value bag-26">
                        <p>APR:</p>
                        <span>59%</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="bag-23 bag-28">
                        <img src={Img2} alt="" className="bag-27"/>
                        <img src={Img4} alt="" className="bag-27"/>
                        <div className="content">
                            <span>FXM/FTM</span>
                        </div>
                        <br />
                        <div className="value bag-25">
                        <p>APR:</p>
                        <span>203%</span>
                        </div>
                    </div>
                </div>
                <div className="col-md-3 col-sm-12">
                    <div className="bag-23 bag-28">
                        <img src={Img3} alt="" className="bag-27"/>
                        <img src={Img4} alt="" className="bag-27"/>
                        <div className="content">
                            <span>FTMX/FTM</span>
                        </div>
                        <br />
                        <div className="value bag-25">
                        <p>APR:</p>
                        <span>101%</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>

      <div className="wrap-5">
        <div className="container">
          <div className="row bag-33">
            <div className="col-md-6 col-sm-12">
              <div className="bag-31">
                <img src={Img13} alt="" />
                <div className="bag-32">
                <h4>COLLATERAL RATIO</h4>
                <p>Last update: 16/06/2022 09:26:32 GMT+5:30</p>
                <h2>100%</h2>
              </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="bag-31 bag-38">
                <img src={Img14} alt="" />
                <div className="bag-32">
                <h4>FTMX 60-MIN TWAP</h4>
                <p>Last update: 16/06/2022 09:26:32 GMT+5:30</p>
                <h2>0.984 FTM</h2>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
      </>
        )
      }))
     }

    </>
  );
}
