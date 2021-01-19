import React from "react";
import UnitCheckInOutDetailsCard from "../../components/UnitCheckInOutDetails";
  
export default function CheckInCheckOut() {
  return (
    <div className="wrapper wrapper-content animated fadeInRight py-5 pb-5">
      <div className="container container-xs pb-5">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <UnitCheckInOutDetailsCard link="/landlord/unitKitsCats/CheckIn" title="Check In" dateTime="1/1/2020 02:09PM" buttonLabel="Check In Kit " desc="Tenant received check in Kit from Agent" />
          </div>
          <div className="col-sm-4">
            <UnitCheckInOutDetailsCard link="/landlord/unitKitsCats/CheckOut" disabled="disabled" title="Check Out" dateTime="1/1/2020 02:09PM" buttonLabel="Check Out Kit " desc="...." />
          </div>
        </div>
      </div>
    </div>
  );
}
