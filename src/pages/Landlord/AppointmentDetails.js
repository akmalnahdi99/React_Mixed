// #newPage
//TASK under Review
import React from "react";
import Footer from "../../components/static/Footer";
import Header from "../../components/Header";
import SiteMap from "../../components/SiteMap";
import AppointmentDetailsList from "../../components/AppointmentDetailsList";


export default function Offers() {
  // const { alert, hideAlert } = React.useContext(UserContext);

  return (
     

      <div className="wrapper wrapper-content animated fadeInRight py-3 pb-5 ">
        <div className="container container-xs pb-5 px-0">
        <div className="row justify-content-center">
            <div className="col-lg-9 mb-3">
          <AppointmentDetailsList />
          </div>
          </div>
        </div>
      </div>
 
  );
}
