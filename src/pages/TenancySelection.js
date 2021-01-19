import React from "react";
import * as RiIcons from "react-icons/ri";

function TenancySelection() {
    
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };

    return (
        <div className="loginbg doorcasedark-bg">
            <div className="tenantdiv">
                <div className="tenantlogo">
                    <img alt="dr-logo" src="/imgs/doorcase-logo.png" className="img-fluid" width="70px" />
                </div>

                <div className="container">
                    <div className="text-center animated fadeInDown centeredbox">
                        <div className="row">
                            <div className="col-6 p-0 align-self-center mt-4">
                                <a href="property-selection.html" className="btn text-white">
                                    <RiIcons.RiHomeSmileFill className="icon-8x" />
                                    <br /><br />
                                    <span className="text-white mt-5 font-light">
                                        Landlord
                            </span>
                                </a>
                            </div>
                            <div className="col-6 p-0 align-self-center mt-4">
                                <a href="property-selection.html" className="btn text-white">
                                    <RiIcons.RiShieldUserFill className="icon-8x" />
                                    <br /><br />
                                    <span className="text-white mt-5 font-light">
                                        Tenant
                            </span>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="copyright-footer">
                    <p className="m-t text-center text-white">
                      <small>
                            &copy; <span className="ml-2">{getCurrentYear()} </span> 
                     <span className="ml-2">Copyright by Jann Properties</span>
                     </small>
                    </p>
                </div>
            </div>
        </div>
    
    )
}

export default TenancySelection

