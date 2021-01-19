// #newPage
import React from "react";
import * as ReactBootstrap from "react-bootstrap";

const RentalTable = () => {
    const info = [
        {SI: "1", Itemsdesc: "October Rental", amount: "2,0000.00"},
        {SI: "2", Itemsdesc: "Additional Fees", amount: "1,800.00"},
        {SI: "3", Itemsdesc: "", amount: ""},
        {SI: "4", Itemsdesc: "", amount: ""},
        {SI: "5", Itemsdesc: "", amount: ""},
        {SItotal: "Total", total: "", amounttotal: "3,800.00"},
    ]

    const renderInfo = (table, index) => {
        return(
            <tr key={index}>
                <td>{table.SI}
                <strong>{table.SItotal}</strong>
                </td>
                <td>{table.Itemsdesc}
                <strong>{table.total}</strong>
                </td>
                <td>{table.amount}
                <strong>{table.amounttotal}</strong>
                </td>
            </tr>
        )
    }

    return(

        <div>
            <br/>
        <ReactBootstrap.Table striped bordered hover>
            <thead>
                <tr>
                    <th className="text-doorcase3">SI.No</th>
                    <th className="text-doorcase3">Items and Description</th>
                    <th className="text-doorcase3">Amount</th>
                </tr>
            </thead>
            <tbody>
                {info.map(renderInfo)}
            </tbody>
        </ReactBootstrap.Table>
        </div>
    );
}

export default RentalTable;