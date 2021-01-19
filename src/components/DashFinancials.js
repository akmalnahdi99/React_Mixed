import React from "react";
import { Link } from "react-router-dom";
import FinancialChart from "../components/FinancialChart";
import { AppContext } from "../context/settings";
import { calculate_3_financials_per_month } from "../utils/landlordHelper";
 
export default function DashFinancials() {
  const appContext = React.useContext(AppContext);
 
  var financialData = appContext.settings.unitFinancials;

  var labels = [...Array(12).keys()].map((x) => new Date(2020, x, 1).toLocaleString("default", { month: "short" }));
  var netProfit = [...Array(12).keys()].map((x) => calculate_3_financials_per_month(financialData, x + 1).netProfit);
  var Incomes = [...Array(12).keys()].map((x) => calculate_3_financials_per_month(financialData, x + 1).totalIncome);
  var Expenses = [...Array(12).keys()].map((x) => calculate_3_financials_per_month(financialData, x + 1).totalExpenses);
 

  const data = [
    {
      className: "fa fa-circle text-newtask",
      text: "Income",
    },
    {
      className: "fa fa-circle text-danger",
      text: "Expenses",
    },
    {
      className: "fa fa-circle text-completedtask",
      text: "Net",
    },
  ];

  return (
    <div className="ibox">
      <div className="ibox-title">
        <h5>
          <Link to="/landlord/financials">Financials</Link>
        </h5>
        <div className="ibox-tools">
          <Link to="/landlord/financials">
            <i className="fas fa-arrow-right"></i>
          </Link>
        </div>
      </div>
      <div className="ibox-content">
        <div className="row">
          <div className="col-12">
            <FinancialChart labels={labels} netProfit={netProfit} Incomes={Incomes} Expenses={Expenses} />
          </div>
        </div>
        <div className="container">
          <div className="row mt-3 text-center">
            {data.map((item, index) => {
              return (
                <div key={index} className="col-4 px-2">
                  <ul className="dashlist">
                    <li className=" text-truncate">
                      <i className={item.className}></i>
                      <span className="ml-2">{item.text}</span>
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
