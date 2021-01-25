// #newPage
import React from "react";
 
import  { LoadingSmall } from "../components/static/Loading";
import { AppContext } from "../context/settings";
import { apiCall    } from "../utils/landlordHelper";

export default function BillsUnpaid({ title, updateAfterUpload, ...payableData }) {
  console.log("in unpaid", payableData);
  var status = "Unpaid";
  const appContext = React.useContext(AppContext);
  const formData = React.useRef({});
  const [errorMsg, setErrorMsg] = React.useState(null);
  const [isLoading, set_isloading] = React.useState(false);

  const hidden_fileinput_bill = React.useRef(null);
  const hidden_fileinput_receipt = React.useRef(null);
  const proofType = React.useRef(null);

  const activeUnitId = appContext.settings.activeUnitId;

  function handleClick(event, type) {
    if (type === "bill") {
      proofType.current = "bill";
      hidden_fileinput_bill.current.click();
    } else if (type === "receipt") {
      proofType.current = "receipt";
      hidden_fileinput_receipt.current.click();
    }
  }

  function handleChange(e) {
    var name = e.target.name;
    var value = e.target.value;

    if (e.target.files[0] != null) value = e.target.files[0];

    var newData = { [name]: value };
    formData.current.value = newData;
    handleSubmit();
  }

  async function handleSubmit() {
    // e.preventDefault();

    if (formData !== null && formData.current.value !== null) {
      const mydata = new FormData();
      mydata.append("file", formData.current.value.file);

      set_isloading(true);
      var result = await apiCall("/units/tenantUploadPayableDocument/?unitId=" + activeUnitId + "&paymentFor=" + payableData.paymentOf + "&proofType=" + proofType.current + "&payableId=" + payableData.payableId, "POST", mydata, false); //
      if (result.status) {
        console.log("call the update func");

        updateAfterUpload();
      }

      set_isloading(false);
    } else {
      setErrorMsg("...");
    }
  }

  var button_bill_text = "Upload Bill";
  var button_receipt_text = "Upload Receipt";
  var button_bill_status = "";
  var button_receipt_status = "";
  if (payableData.canUploadBill === false) {
    button_bill_text = "Uploaded";
    button_bill_status = "disabled";
    status = "In Review";
  }
  if (payableData.canUploadReceipt === false) {
    button_receipt_text = "Uploaded";
    button_receipt_status = "disabled";
    status = "In Review";
  }

  return (
    <div className="ibox">
      <div className="ibox-bill minhigh pt-0">
        <div className="row justify-content-center">
          <div className="col-sm-7 pt-3">
            <h3 className="text-doorcase4">{title}</h3>
            <p>
              Status : <span className="text-danger">{status}</span>
            </p>
          </div>
          <div className="btn-res pt-2">
            <br />

            <form onSubmit={handleSubmit}>
              <input type="file" name="file" ref={hidden_fileinput_bill} onChange={(e) => handleChange(e)} className="d-none" />
              <input type="file" name="file" ref={hidden_fileinput_receipt} onChange={(e) => handleChange(e)} className="d-none" />

              {isLoading === true ? (
                <LoadingSmall />
              ) : (
                <React.Fragment>
                  <button type="button" className="btn btn-primary width140 mr-2 mb-2" onClick={(e) => handleClick(e, "bill")} disabled={button_bill_status}>
                    {button_bill_text}
                  </button>
                  <button type="button" className="btn btn-success width140 mb-2" onClick={(e) => handleClick(e, "receipt")} disabled={button_receipt_status}>
                    {button_receipt_text}
                  </button>
                </React.Fragment>
              )}

              {errorMsg !== null ? <p style={{ color: "red" }}>{errorMsg}</p> : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
