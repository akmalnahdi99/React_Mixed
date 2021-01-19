import React from "react";

export default  function CheckInLeafletData() {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8 p-0">
        <div className="ibox">
          <div className="ibox-title mt-3">
            <h3><img src="/imgs/write-letter.svg" width="30px" className="utilityIconTitle" alt="" />Information Leaflet</h3>
            <hr />
          </div>
          <div className="ibox-content forum-container">
            <h4>Dear Tenant</h4>
            <br />

            <p style={{ "line-height": "1.8" }}>
              
              Doorcares would like to welcome you into our new home. You are required to scan the QR code provided by the agent to acknowledge that you have checked in and have received the check in
              Kit containing the following:
            </p>
            <p>Items</p>
            <div className="forum-item">
              <div className="forum-sub-title">
                <p className="text-newtask ml-2">1. Information Leaflet</p>
                <p className="text-newtask ml-2">2. Keys</p>
                <p className="text-newtask ml-2">3. Access Cards</p>
                <p className="text-newtask ml-2">4. Remote Controls</p>
                <p className="text-newtask ml-2">5. Car Sticker</p>
              </div>
              <br />

              <p style={{ "line-height": "1.8" }}>
               
                After you check in we request you to self check the following item. If you find anything missing from the list then you are required to inform us within days 2 after check in.
              </p>

              <br />
              <div className="forum-sub-title">
                <p className="text-newtask ml-2">1. Inventory List</p>
                <p className="text-newtask ml-2">2. Property Condition</p>
              </div>

              <br />
              <p style={{ "line-height": "1.8" }}>
                
                You can find the above memtioned items in the Doorcares tenant platform under <strong>Property Info Tenancy.</strong> We wish you a plesant stay.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

 