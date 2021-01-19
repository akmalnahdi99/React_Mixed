// #newPage
import React from "react";
import Empty from "../components/Empty";
import InvoiceUtilities from "./InvoiceUtilities";



const InvoiceSeawage = () => {
  var invoice = [
  {
    id: 0,
    month: "April",
    status: "Overdue",
}
  ];

  return (
    <div>
                {invoice.length > 0 ? (
                    invoice.map((item, index) => {
                    return <InvoiceUtilities key={index} {...  item} />;
                    })
                ) : (
                    <Empty />
                )}
    </div>
  );
};

export default InvoiceSeawage;
