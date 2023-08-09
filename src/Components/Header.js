import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../Image/logo.png";
import Img2 from "../Image/img2.png";
import Img3 from "../Image/img3.png";
import Img4 from "../Image/img4.png";
import Img5 from "../Image/img5.svg";

export default function Header() {
 
  return (
    <>
      <div className="wrap-1">
        {/* <div className="row"> */}
          <nav class="navbar navbar-expand-lg ">
            <div class="container">
              {/* <div className="col-md-3"> */}
              <Link class="navbar-brand" to="/">
                <img src={Logo} alt="" />
              </Link>
              {/* </div> */}
              <button
                class="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
                <span class="navbar-toggler-icon fa fa-bars"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ">
                  <li class="nav-item">
                    <Link class="nav-link active" aria-current="page" to="/">
                      Dashboard
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/mint">
                      Mint
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/radeem">
                      Redeem
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/farm">
                      farms
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/staking">
                      Staking
                    </Link>
                  </li>
                  <li class="nav-item">
                    <Link class="nav-link" to="/airdrop">
                      Airdrop
                    </Link>
                  </li>
                  <div className="header-button">
                    <button>
                      <img src={Img2} alt="" width={30} height={30} />
                      <span> $0.002</span>
                    </button>
                  </div>
                  <div className="header-button">
                    <button>
                      <img src={Img3} alt="" width={30} height={30} />
                      <span> 0.994 FTM</span>
                    </button>
                  </div>
                  <div className="header-button">
                    <button>
                      <img src={Img4} alt="" width={30} height={30} />
                      <span> $0.216</span>
                    </button>
                  </div>
                  <div className="header-button bag-1 bag-2">
                    <button>
                      <img src={Img5} alt="" width={21} className="bag-3" />
                      <span className="bag-4">
                        Connect<br />Wallet
                      </span>
                    </button>
                  </div>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      {/* </div> */}
      <Outlet />
    </>
  );
};