import React from "react";
 
export default function UserPhotoCard ({canUpload, ...userInfo})  {
  
  return (
    <div className="ibox">
      <div className="ibox-content minhigh450px">
        <div className="profile-sidebar paddingontop">
          <div className="profile-userpic text-center">
            <img src={userInfo.urlThumb} className="rounded-circle boxshadow align-self-center " alt="profile" />
          </div>
          <div className="profile-usertitle mb-5">
            <div className="profile-usertitle-name">{userInfo.userName}</div>
            <div className={"badge " + (userInfo.verified === true ? "badge-primary" : "badge-danger")}>{userInfo.verified === true ? "verified" : "not verified"}</div>
          </div>
        </div>
      </div>
    </div>
  );
};