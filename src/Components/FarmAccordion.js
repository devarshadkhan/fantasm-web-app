import React from "react";
import { Link } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export const FarmAccordion = (props) => {
  return (
    <>
       
            <div className="bag-57" key={props.data.id}>
              <div className="bag-58">
                <Accordion>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                  >
                    <Typography>
                      <div className="bag-59">
                        <img src={props.data.image} alt="" />
                        <img src={props.data.image1} alt="" />
                        <div className="bag-60">
                          <span>{props.data.title}</span>
                          <button className="bag-61">
                            <i className="fa fa-bolt"></i>zap
                          </button>
                          <p>{props.data.content2}</p>
                        </div>
                        <div className="bag-62">
                          <div className="bag-63">TVL</div>
                          <div className="bag-64">{props.data.content1}</div>
                        </div>
                        <div className="bag-62">
                          <div className="bag-63" 
                        //   style={{color: props.data.color}}
                          >{props.data.content}</div>
                          <div className="bag-64">-</div>
                        </div>
                        <div className="bag-62">
                          <div className="bag-63">Earn</div>
                          <div className="bag-64">-</div>
                        </div>
                        <div className="bag-62">
                          <div className="bag-63">APR</div>
                          <div className="bag-64">{props.data.content3}</div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography>
                      <div className="bag-65">
                        <div className="row">
                          <div className="col-md-4 col-sm-12">
                            <div className="bag-66">
                              <div className="bag-67">Deposit</div>
                              <div className="bag-68">
                                Balance:
                                <button>-</button>
                              </div>
                              <div className="bag-69">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="0.0"
                                />
                              </div>
                              <div className="bag-70">
                                <button className="btn btn-primary">
                                  Deposit
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="bag-66">
                              <div className="bag-67">Withdraw</div>
                              <div className="bag-68">
                                Deposited:
                                <button>-</button>
                              </div>
                              <div className="bag-69">
                                <input
                                  type="text"
                                  className="form-control"
                                  placeholder="0.0"
                                />
                              </div>
                              <div className="bag-71">
                                <button className="btn btn-primary bag-72">
                                  Withdraw all
                                </button>
                                <button className="btn btn-primary">
                                  Withdraw
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-12">
                            <div className="bag-66">
                              <div className="bag-67">Reward</div>
                              {/* <div className="bag-68">
                                                        Balance:
                                                        <button>-</button>
                                                    </div> */}
                              <div className="bag-73">
                                <img src={props.data.image} alt="" />- FXM
                                <button className="bag-61">Claim</button>
                              </div>
                              <div className="bag-74">
                                <Link to="/">Add LP</Link>
                                <Link to="/" className="bag-75">
                                  Remove LP
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </div>
            </div>
          </>
        
  );
};
