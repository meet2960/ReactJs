import React, { useEffect, useRef, useState } from "react";
import { Col, Container, Row } from "reactstrap";

const LoginWithOTP = () => {
  const [userOTP, setUserOtp] = useState(new Array(4).fill(""));
  const [activeOTPIndex, setActiveOTPIndex] = useState(0);
  const [generatedOTP, setGeneratedOTP] = useState("");
  const inputFieldRef = useRef(null);
  const handleChange = (e, index) => {
    const value = e.target.value;
    const getOtp = [...userOTP];
    getOtp[index] = value.substring(value.length - 1);
    if (value.length >= 1) {
      setActiveOTPIndex(activeOTPIndex + 1);
    }
    setUserOtp(getOtp);
  };
  const handleKeyChange = (e, index) => {
    if (e.key === "Backspace") {
      setActiveOTPIndex(activeOTPIndex - 1);
    }
  };

  const generateOTP = () => {
    let OTP = "";
    const otpLength = 4;
    for (let i = 0; i < otpLength; i++) {
      OTP += Math.floor(Math.random() * 10);
    }
    setGeneratedOTP(OTP);
    return OTP;
  };
  const handleButtonClick = () => {
    let newOTP = userOTP.join("");
    console.log("newOtp is ", newOTP);
    if (generateOTP === newOTP) {
      alert("Success");
    } else {
      alert("fails");
    }
  };
  useEffect(() => {
    console.log("Unique OTP is ", generateOTP());
    console.log("UserOTP is ", userOTP);
    inputFieldRef.current?.focus();
  }, [userOTP, activeOTPIndex]);
  return (
    <React.Fragment>
      <Container className="otplogin px-0">
        <div className="d-flex flex-column align-items-center justify-content-center">
          <h5 className="my-3">Enter OTP Code</h5>
          <Row className="justify-content-center">
            <Col lg={"auto"}>
              <form>
                <div className="d-flex justify-content-center otp-field">
                  {userOTP &&
                    userOTP.map((items, index) => {
                      return (
                        <React.Fragment key={index}>
                          <input
                            ref={
                              index === activeOTPIndex ? inputFieldRef : null
                            }
                            type="number"
                            value={items}
                            onChange={(e) => handleChange(e, index)}
                            onKeyDown={(e) => handleKeyChange(e, index)}
                          />
                        </React.Fragment>
                      );
                    })}
                </div>
                <button
                  type="button"
                  className="btn w-100 btn-primary mt-4"
                  onClick={() => handleButtonClick()}
                >
                  Verify OTP
                </button>
                <div className="text-center"></div>
              </form>
            </Col>
          </Row>
        </div>
      </Container>
    </React.Fragment>
  );
};

export default LoginWithOTP;
