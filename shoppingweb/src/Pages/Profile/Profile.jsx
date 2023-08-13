import React, { useEffect, useState } from "react";
import userImg from "../../assets/images/userImg.png";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { updateUserData } from "../../store/auth/authSlice";
import EditProfileModal from "../../components/Profile/EditProfileModal";
import { CustomToast } from "../../utils/customToast";

const Profile = () => {
  document.title = "My Profile | Ecommerce";
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.user);
  const [imgLoading, setImgLoading] = useState(true); // For Image Loading

  // * For Profile Editing
  const [profileForm, setProfileForm] = useState(userProfile);

  // * For Edit Profile Modal
  const [profileModal, setProfileModal] = useState(false);
  const toggleProfileModal = () => setProfileModal(!profileModal);

  useEffect(() => {
    return () => {
      setImgLoading(true);
    };
  }, []);

  const handleUploadImage = (e) => {
    if (profileForm.profileImg !== "") {
      dispatch(updateUserData(profileForm));
      CustomToast({
        title: "Profile Updated Successfully",
        icon: "success",
        timer: 3000,
      });
    } else {
      CustomToast({
        title: "Please Upload Profile Image",
        icon: "info",
        timer: 3000,
      });
    }
  };
  return (
    <section className="my-4 profile">
      <Container>
        <Card>
          <CardBody className="p-5">
            <h2 className="text-center fw-semibold">Welcome Back {"User"}</h2>
            <Row className="justify-content-center mt-4">
              <Col xs={"auto"}>
                <div className="d-flex justify-content-center align-items-center mx-auto overflow-hidden rounded-circle object-fit-contain avatar-xl">
                  {imgLoading && (
                    <Skeleton.Image active={true} className="card-skeleton" />
                  )}
                  <img
                    src={
                      profileForm.profileImg ? profileForm.profileImg : userImg
                    }
                    alt="userlogo"
                    className={`img-fluid ${imgLoading ? "d-none" : "d-block"}`}
                    onLoad={() => setImgLoading(false)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs={12} md={4}>
                <div className="input-group custom-file-button">
                  <label class="input-group-text" for="inputGroupFile">
                    Choose File
                  </label>
                  <input
                    id="inputGroupFile"
                    type="file"
                    name="userimg"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const imageUrl = URL.createObjectURL(file);
                      console.log("ImgUrl", imageUrl);
                      setProfileForm((prev) => ({
                        ...prev,
                        profileImg: imageUrl,
                      }));
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={(e) => handleUploadImage(e)}
                  >
                    Upload
                  </button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col xs={12} xl={8} className="mx-auto">
                <Row className="gy-4 mt-2">
                  <Col md={6}>
                    <label htmlFor="name" className="fw-medium">
                      Name
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      name="name"
                      id="name"
                      value={userProfile.name}
                      className="form-control"
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="username" className="fw-medium">
                      Username
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      name="username"
                      id="username"
                      value={userProfile.username}
                      className="form-control"
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="email" className="fw-medium">
                      Email
                    </label>
                    <input
                      disabled={true}
                      type="email"
                      name="email"
                      id="email"
                      value={userProfile.email}
                      className="form-control"
                    />
                  </Col>
                  <Col md={6}>
                    <label htmlFor="phone" className="fw-medium">
                      Phone Number
                    </label>
                    <input
                      disabled={true}
                      type="text"
                      name="phone"
                      id="phone"
                      value={userProfile.phone}
                      className="form-control"
                    />
                  </Col>
                  <Col md={12} className="text-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={toggleProfileModal}
                    >
                      Edit
                    </button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </CardBody>
        </Card>

        <EditProfileModal
          profileForm={profileForm}
          setProfileForm={setProfileForm}
          profileModal={profileModal}
          toggleProfileModal={toggleProfileModal}
        />
      </Container>
    </section>
  );
};

export default Profile;