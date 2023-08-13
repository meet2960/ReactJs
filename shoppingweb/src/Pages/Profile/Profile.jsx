import React, { useEffect, useState } from "react";
import userImg from "../../assets/images/userImg.png";
import {
  Col,
  Container,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { Skeleton } from "antd";
import { updateUserData } from "../../store/auth/authSlice";
import { CustomToast } from "../../utils/customToast";

const Profile = () => {
  document.title = "My Profile | Ecommerce";
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.auth.user);
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [modalForm, setModalForm] = useState(userProfile);
  const [imgLoading, setImgLoading] = useState(true); // For Image Loading
  useEffect(() => {
    console.log("modalForm", modalForm);
    return () => {
      setImgLoading(true);
    };
  }, [modalForm]);
  const handleModalData = (e) => {
    setModalForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSaveFromData = () => {
    dispatch(updateUserData(modalForm));
    toggle();
    CustomToast({
      title: "Profile Updated",
      icon: "success",
      timer: 2000,
    });
  };
  const handleUploadImage = (e) => {
    dispatch(updateUserData(modalForm));
    alert("File Uploaded Successfully");
  };
  return (
    <section className="my-4 profile">
      <Container>
        <div className="card">
          <div className="card-body p-5">
            <h2 className="text-center">Welcome Back {"User"}</h2>
            <Row className="justify-content-center mt-4">
              <Col xs={4} md={3} lg={3} xl={2}>
                <div className="d-flex justify-content-center align-items-center">
                  {imgLoading && (
                    <Skeleton.Image active={true} className="card-skeleton" />
                  )}
                  <img
                    src={
                      !modalForm?.profileImg ? modalForm?.profileImg : userImg
                    }
                    alt="userlogo"
                    className={`img-fluid ${imgLoading ? "d-none" : "d-block"}`}
                    onLoad={() => setImgLoading(false)}
                  />
                </div>
              </Col>
            </Row>
            <Row className="justify-content-center mt-4">
              <Col xs={4}>
                <div className="input-group">
                  <input
                    type="file"
                    name="userimg"
                    className="form-control"
                    onChange={(e) => {
                      const file = e.target.files[0];
                      const imageUrl = URL.createObjectURL(file);
                      setModalForm((prev) => ({
                        ...prev,
                        profileImg: imageUrl,
                      }));
                    }}
                  />
                  <button
                    type="button"
                    className="btn btn-primary me-3"
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
                  <Col xs={6}>
                    <label htmlFor="fname">Name</label>
                    <input
                      type="text"
                      name="fname"
                      id="fname"
                      value={userProfile.name}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={6}>
                    <label htmlFor="username">Username</label>
                    <input
                      type="text"
                      name="username"
                      id="username"
                      value={userProfile.username}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={6}>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={userProfile.email}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={6}>
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={userProfile.phone}
                      className="form-control"
                    />
                  </Col>
                  <Col xs={12} className="text-center">
                    <Row className="justify-content-center">
                      <Col xs={"auto"}>
                        <button
                          type="button"
                          className="btn btn-primary me-3"
                          onClick={toggle}
                        >
                          Edit
                        </button>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </div>
        </div>
        {/* // *  Modal Here  */}
        <div>
          <Modal
            isOpen={modal}
            toggle={toggle}
            backdrop={"static"}
            centered={true}
          >
            <ModalHeader tag={"h3"} toggle={toggle}>
              Edit Information
            </ModalHeader>
            <ModalBody>
              <Row className="gy-3">
                <Col xs={6}>
                  <label htmlFor="mname">Name</label>
                  <input
                    type="text"
                    name="name"
                    id="mname"
                    value={modalForm.name}
                    className="form-control"
                    onChange={(e) => handleModalData(e)}
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="musername">Username</label>
                  <input
                    type="text"
                    name="username"
                    id="musername"
                    value={modalForm.username}
                    className="form-control"
                    onChange={(e) => handleModalData(e)}
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="memail">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="memail"
                    value={modalForm.email}
                    className="form-control"
                    onChange={(e) => handleModalData(e)}
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="mphone">Phone Number</label>
                  <input
                    type="text"
                    name="phone"
                    id="mphone"
                    value={modalForm.phone}
                    className="form-control"
                    onChange={(e) => handleModalData(e)}
                  />
                </Col>
              </Row>
            </ModalBody>
            <ModalFooter>
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => handleSaveFromData()}
              >
                Save
              </button>
              <button type="button" className="btn btn-dark" onClick={toggle}>
                Cancel
              </button>
            </ModalFooter>
          </Modal>
        </div>
      </Container>
    </section>
  );
};

export default Profile;