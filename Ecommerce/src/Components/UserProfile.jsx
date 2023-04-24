import React from "react";

const UserProfile = () => {
  return (
    <div className="container">
      <h2 className="text-center">Welcome Admin</h2>
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <div className="row g-4">
            <div className="col-lg-6">
              <div>Name</div>
            </div>
            <div className="col-lg-6">Admin</div>
            <div className="col-lg-6">Username</div>
            <div className="col-lg-6">Admin123</div>
            <div className="col-lg-6">Email</div>
            <div className="col-lg-6">admin123@gmail.com</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
