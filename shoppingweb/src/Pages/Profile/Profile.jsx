import React, { useEffect, useState } from "react";
import userImg from "../../assets/images/userImg.png";
import { Col, Container, Row } from "reactstrap";
import { useSelector } from "react-redux";
import { Skeleton } from "antd";
const Profile = () => {
  document.title = "My Profile | Ecommerce";
  const [imgLoading, setImgLoading] = useState(true); // For Image Loading
  useEffect(() => {
    return () => {
      setImgLoading(true);
    };
  }, []);
  const userEmail = useSelector((state) => state.auth.user.email);
  return (
    <section className="my-4 profile">
      <Container>
        <div className="card">
          <div className="card-body p-5">
            <h2 className="text-center">Welcome Back {"User"}</h2>
            <Row className="justify-content-center mt-4">
              <Col xs={4} md={3} lg={3} xl={2}>
                {imgLoading && (
                  <Skeleton.Image active={true} className="card-skeleton" />
                )}
                <img
                  src={userImg}
                  alt="userlogo"
                  className={`img-fluid ${imgLoading ? "d-none" : "d-block"}`}
                  onLoad={() => setImgLoading(false)}
                />
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
        </div>
      </Container>
    </section>
  );
};

export default Profile;
