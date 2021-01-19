import React from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/settings";
import { allQuickLinks as allQuickLinkss } from "../utils/landlordHelper";
// import Loading from "./static/Loading";

export default function Quicklinks({ title }) {
  var appContext = React.useContext(AppContext);

  // eslint-disable-next-line
  const [allQuickLinks, set_allQuickLinks] = React.useState(allQuickLinkss);
  const [datalist, set_datalist] = React.useState([]);
  // const [userLinks, set_userLinks] = React.useState([]);
  // const [isLoading, setIsLoading] = React.useState([]);


  // React.useEffect(() => {
  //   async function loadUserInfoAndTenancyDetails() {
  //     setIsLoading(true);

  //     var response = await apiCall("/units/getQuickLinks");
  //     if (response.status) {
  //       set_userLinks(response.data);
  //       var result = response.data;
  //       var a = Object.keys(result).map((i) => {
  //         var value = result[i];
  //         return value === null ? null : allQuickLinks[value];
  //       });
  //       set_datalist(a);
  //     }
  //     setIsLoading(false);
  //   }
  //   loadUserInfoAndTenancyDetails();
  //   // eslint-disable-next-line
  // }, []);



  
  React.useEffect(() => {
    async function loadUserInfoAndTenancyDetails() {
      var result = appContext.settings.quickAccessList;
      var Selections = Object.keys(result).map((i) => {
        var value = result[i];
        return value === null ? null : allQuickLinks[value];
      });
      set_datalist(Selections);
    }
    loadUserInfoAndTenancyDetails();
    // eslint-disable-next-line
  }, []);

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/quicklinks">{title}</Link>
        </h5>
      </div>
      <div className="ibox-tools">
        {/* <Link to="/landlord/quicklinks">
          <i className="fas fa-arrow-right"></i>
        </Link> */}
      </div>
      <div className="ibox-content pt-0">
        <React.Fragment>
          <div className="row text-center">
            {datalist.map((item, index) => {
              if (item) {
                return (
                  <div key={index} className="col-md-4 col-sm-4 col-4 p-2">
                    <Link to={item.link} className="btn btn-default btn-dashboardicon btn-block text-truncate">
                      <img src={item.img} alt={item.label} width="24px" />
                      <br />
                      {item.label}
                    </Link>
                  </div>
                );
              } else {
                return (
                  <div key={index} className="col-md-4 col-sm-4 col-4 p-2">
                    <Link to={"/landlord/quicklinks/" + index} className="btn btn-shortcut btn-block text-truncate">
                      <i className={"fas fa-plus"}></i>
                      <br />
                      Add Shortcut
                    </Link>
                  </div>
                );
              }
            })}
          </div>
        </React.Fragment>
      </div>
    </div>
  );
}
