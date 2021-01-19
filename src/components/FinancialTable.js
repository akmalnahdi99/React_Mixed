import React from "react";
import * as ReactBootstrap from "react-bootstrap";
import { getFinancialValueRoot, role_tenant, role_landlord, calculate_3_financials_per_month } from "./../utils/landlordHelper";
import { LoadingSmall } from "./static/Loading";

export default function FinancialTable  ({ isLoading, financialData, financialMonth })   {
  function getFinancialValue(userRole, paymentOf) {
    return getFinancialValueRoot(financialData, financialMonth, userRole, paymentOf);
  }

  // calculate Total income, expenses, profit,
  const { ...c } = calculate_3_financials_per_month(financialData, financialMonth);

  const info = [
    { categorytotal: "Income", amount: " " },
    { category: "+ Apartment Rental", amount: "RM " + getFinancialValue(role_tenant, "Rental") },
    { category: "+ Parking Lot Rental", amount: "RM " + getFinancialValue(role_tenant, "Rental") * 0 },
    { category: "+ Storage Rental", amount: "RM " + getFinancialValue(role_tenant, "Rental") * 0 },
    { categorytotal: "Total Income", total: "RM " + c.totalIncome },
    { categorytotal: "Expenses", amount: " " },
    { category: "- Service Charge", amount: "RM " + getFinancialValue(role_landlord, "ServiceCharges") },
    { category: "- Sinking Fund", amount: "RM " + getFinancialValue(role_landlord, "SinkingFunds") },
    { category: "- Assesment Fees", amount: "RM " + getFinancialValue(role_landlord, "AssessmentRate") },
    { category: "- Quit Rent", amount: "RM " + getFinancialValue(role_landlord, "QuitRent") },
    { category: "- Subscription Fees", amount: "RM " + getFinancialValue(role_landlord, "Subscription") },
    { category: "- Maintenance", amount: "RM " + getFinancialValue(role_landlord, "Maintenance") },
    { category: "- Insurance", amount: "RM " + getFinancialValue(role_landlord, "Insurance") },
    { categorytotal: "Total Expenses", total: "RM " + c.totalExpenses },
    { categorytotal: "Net Profit", total: "RM " + c.netProfit },
  ];

  const renderInfo = (table, index) => {
    return (
      <tr key={index}>
        <td>
          {table.category}
          <strong>{table.categorytotal}</strong>
        </td>
        <td>
          {isLoading === true ? (
            <LoadingSmall />
          ) : (
            <React.Fragment>
              {table.amount}
              <strong>{table.total}</strong>
            </React.Fragment>
          )}
        </td>
      </tr>
    );
  };

  return (
    <div className="ibox-content forum-container">
      <br />

      <ReactBootstrap.Table striped bordered hover>
        <thead>
          <tr>
            <th className="text-doorcase3">Category</th>
            <th className="text-doorcase3">Amount</th>
          </tr>
        </thead>

        <tbody>{info.map(renderInfo)}</tbody>
      </ReactBootstrap.Table>
      <br />
    </div>
  );
}; 
