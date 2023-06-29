import React from "react";
import userImg from "../../assets/images/userImg.png";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";

const Profile = () => {
  document.title = "My Profile | Ecommerce";
  const userEmail = useSelector((state) => state.auth.user.email);
  return (
    <section className="my-4 profile">
      <Container>
        <div className="shadow p-3 p-md-4 p-lg-5 rounded-3">
          <h2 className="text-center">Welcome Back {"User"}</h2>
          <Row className="justify-content-center mt-4">
            <Col xs={4} md={3} lg={3} xl={2}>
              <img src={userImg} alt="userlogo" className="img-fluid" />
            </Col>
          </Row>
          <Row>
            <Col xs={12} xl={8} className="mx-auto">
              <Row className="gy-4 mt-2">
                <Col xs={6}>
                  <label htmlFor="fname">First Name</label>
                  <input
                    type="text"
                    name="fname"
                    id="fname"
                    value={"Meet"}
                    className="form-control"
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="lname">Last Name</label>
                  <input
                    type="text"
                    name="lname"
                    id="lname"
                    value={"Ghelani"}
                    className="form-control"
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={userEmail}
                    className="form-control"
                  />
                </Col>
                <Col xs={6}>
                  <label htmlFor="mobile">Phone Number</label>
                  <input
                    type="text"
                    name="mobile"
                    id="mobile"
                    value={"9725582557"}
                    className="form-control"
                  />
                </Col>
                <Col xs={12} className="text-center">
                  <button type="button" className="btn btn-primary me-3">
                    Edit
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default Profile;
