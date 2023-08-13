import React from "react";
import { useDispatch } from "react-redux";
import {
  Col,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Row,
} from "reactstrap";
import { updateUserData } from "../../store/auth/authSlice";
import { CustomToast } from "../../utils/customToast";

const EditProfileModal = ({
  profileModal,
  profileForm,
  setProfileForm,
  toggleProfileModal,
}) => {
  const dispatch = useDispatch();

  const handleModalData = (e) => {
    setProfileForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSaveFromData = () => {
    dispatch(updateUserData(profileForm));
    toggleProfileModal();
    CustomToast({
      title: "Profile Updated",
      icon: "success",
      timer: 2000,
    });
  };
  return (
    <div>
      <Modal
        isOpen={profileModal}
        toggle={toggleProfileModal}
        backdrop={"static"}
        centered={true}
      >
        <ModalHeader tag={"h3"} toggle={toggleProfileModal}>
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
                value={profileForm.name}
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
                value={profileForm.username}
                className="form-control"
                onChange={(e) => handleModalData(e)}
              />
            </Col>
            <Col xs={6}>
              <label htmlFor="memail">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                value={profileForm.email}
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
                value={profileForm.phone}
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
          <button
            type="button"
            className="btn btn-dark"
            onClick={toggleProfileModal}
          >
            Cancel
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default EditProfileModal;
