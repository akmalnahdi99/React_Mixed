import React from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import { AppContext } from "../../context/settings";

export default function LeftMenu() {
  const menuExpandedClass = "menu-expanded";
  const menuCollapsedClass = "menu-collapsed";
  const appContext = React.useContext(AppContext);
  const forceShow = appContext.settings.leftMenu || "";

  const [leftMenuClass, set_leftMenuClass] = React.useState(["navbar-default navbar-static-side"]);
  const [expanded, set_expanded] = React.useState(appContext.settings.leftMenuExpanded || false);
  function toggle() {
    console.log("in  left menu toggle");
    var n = !expanded;
    set_expanded(n);
    updateMenuClass(n);
    appContext.updateAppContext({ leftMenuExpanded: n });
  }

  function updateLeftMenu() {
    console.log("in update left menu to hide");
    appContext.updateAppContext({ leftMenu: "", leftMenuExpanded: false });
     set_expanded(false);
  }

  function updateMenuClass(menuExpanded) {
    console.log("in update menu class");
    var index = -1;
    if (menuExpanded !== false && forceShow === "show") {
      set_leftMenuClass([leftMenuClass.push("menu-show")]);
    } else {
    }

    if (menuExpanded === true) {
      index = leftMenuClass.indexOf(menuCollapsedClass);
      if (index !== -1) {
        leftMenuClass.splice(index, 1);
      }
      leftMenuClass.push(menuExpandedClass);
    } else {
      index = leftMenuClass.indexOf("menu-show");
      if (index !== -1) {
        leftMenuClass.splice(index, 1);

        appContext.updateAppContext({ leftMenu: "" });
      }

      index = leftMenuClass.indexOf(menuExpandedClass);
      if (index !== -1) {
        leftMenuClass.splice(index, 1);
      }
      leftMenuClass.push(menuCollapsedClass);
    }
    set_leftMenuClass(leftMenuClass);
  }

  React.useEffect(() => {
    console.log("in  left menu use Effect");
    updateMenuClass(expanded);
    // eslint-disable-next-line
  }, [expanded]);

  console.log("lmc1:", leftMenuClass);
  return (
    <React.Fragment>
      <div>
        <nav className={leftMenuClass.join(" ")}>
          <div className="sidebar-collapse">
            <ul className="nav metismenu" id="side-menu">
              <li className="nav-header">
                <div className="profile-element">
                  <div className="navbar-minimalize float-right" onClick={() => toggle()} style={{ cursor: "pointer" }}>
                    <FaIcons.FaBars />
                  </div>
                </div>
                <div className="logo-element">
                  <div className="navbar-minimalize menuburger2" id="show" onClick={() => toggle()} style={{ cursor: "pointer" }}>
                    <FaIcons.FaBars />
                  </div>
                </div>
              </li>
              <li>
                <Link to="/landlord/activity" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaUserClock />
                  <span className="nav-label">Activity</span>
                </Link>
              </li>
              <li>
                <Link to="/landlord/dashboard" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaGripHorizontal />
                  <span className="nav-label">Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/landlord/maintenance" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaToolbox />
                  <span className="nav-label">Maintenance</span>
                </Link>
              </li>
              {/* <li>
                <Link to="/landlord/financials" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaFileInvoiceDollar />
                  <span className="nav-label">Financial</span>
                </Link>
              </li> */}
              <li>
                <Link to="/landlord/payables" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaHandHoldingUsd />
                  <span className="nav-label">Payables</span>
                </Link>
              </li>

              <li>
                <Link to="/landlord/bills">
                  <i class="fas fa-file-invoice-dollar"></i>
                  <span className="nav-label">Bills</span>
                </Link>
              </li>
              <li>
                <Link to="/landlord/propertyInfo" onClick={() => updateLeftMenu()}>
                  <FaIcons.FaInfoCircle />
                  <span className="nav-label">Property Info</span>
                </Link>
              </li>
              <li>
                <Link to="appointment">
                  <FaIcons.FaCalendarCheck />
                  <span className="nav-label">Appointment</span>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </React.Fragment>
  );
}
