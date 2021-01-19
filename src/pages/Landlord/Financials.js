import React from "react";
import FinancialTable from "../../components/FinancialTable";



import FinancialTableFilter from "../../components/FinancialTableFilter";
 
import { AppContext } from "../../context/settings";

export default function LandLordFinancials() {
    const appContext = React.useContext(AppContext);
  
  const [selectedMonth, set_selectedMonth] = React.useState(appContext.settings.financialMonth);
 
  var financialMonth =  appContext.settings.financialMonth;
  var financialData = appContext.settings.unitFinancials;
 
  function filterSelection(month) {
    appContext.updateAppContext({   financialMonth: month });
    set_selectedMonth(month);
  }

  return (
    

      <div className="wrapper wrapper-content animated fadeInRight py-3 mb-0 gray-bg" style={{ borderBottom: "1px solid #fff" }}>
        <div className="container-fluid">
          <div className="row p-0 justify-content-center">
            <div className="col-lg-8 px-2">
              <FinancialTableFilter selectedMonth={selectedMonth} callBack={filterSelection} />
            </div>
          </div>
        </div>
        <div className="wrapper wrapper-content animated fadeInRight">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-9">
                <div className="ibox ">
                  <FinancialTable title="Financial" financialMonth={financialMonth} financialData={financialData}  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
  );
}
