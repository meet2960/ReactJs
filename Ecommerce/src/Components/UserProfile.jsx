import React from "react";
import userImg from "../assets/images/user.png";
const UserProfile = () => {
  return (
    <div className="container mt-3">
      <h2 className="text-center">Welcome Admin</h2>
      <div className="row shadow p-4 rounded-3 justify-content-evenly">
        <div className="col-lg-2">
          <div>
            <img src={userImg} alt="user-img" className="img-fluid" />
            <h5 className="my-3 text-center">Admin</h5>
          </div>
        </div>
        <div className="col-lg-6 p-3">
          <div className="row g-4">
            <div className="col-lg-6">
              <h5>Name</h5>
            </div>
            <div className="col-lg-6">
              <div>Admin</div>
            </div>
            <div className="col-lg-6">
              <h5>Username</h5>
            </div>
            <div className="col-lg-6">
              <div>Admin123</div>
            </div>
            <div className="col-lg-6">
              <h5>Email</h5>
            </div>
            <div className="col-lg-6">
              <div>admin123@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
