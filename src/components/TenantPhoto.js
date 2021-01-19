import React from "react";
// import Empty from "./Empty";
// import NotificationItem from "./NotificationItem";

const TenantPhotoCard = () => {
  var User = {
    id: 0,
    urlThumb: "/imgs/drsharon.jpg",
    verifiedStatus: "Active",
    name: "new Happy Landlord ", //TASK please don't put any real data here source code can be leaked and and cause problems
  };

  return (
    <div className="ibox">
      <div className="ibox-content minhigh450px">
        <div className="profile-sidebar paddingontop">
          <div className="profile-userpic text-center">
            <img src={User.urlThumb} className="rounded-circle boxshadow align-self-center " alt="profile" />
          </div>
          <div className="profile-usertitle mb-5">
            <div className="profile-usertitle-name">{User.name}</div>
            <div className="badge badge-primary">{User.verifiedStatus}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TenantPhotoCard;
