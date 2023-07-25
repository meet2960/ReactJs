import React, { useState } from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import usePasswordGenerator from "../hooks/use-Password-Generator";
import StrengthChecker from "./StrengthChecker";
import Checkbox from "./Checkbox";
import { Slider } from "antd";

const PasswordGenerator = () => {
  const { password, errorMsg, generatePassword } = usePasswordGenerator();
  const [length, setLength] = useState(4);
  const [checkBoxData, setCheckBoxData] = useState([
    {
      title: "Include Uppercase Letters",
      state: false,
    },
    {
      title: "Include Lowercase Letters",
      state: false,
    },
    {
      title: "Include Numbers",
      state: false,
    },
    {
      title: "Include Symbols",
      state: false,
    },
  ]);
  const handleCheckBoxChange = (i) => {
    const updatedCheckBox = [...checkBoxData];
    updatedCheckBox[i].state = !updatedCheckBox[i].state;
    setCheckBoxData(updatedCheckBox);
  };
  const [copied, setCopied] = useState(false);
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 4000);
  };
  return (
    <Container>
      <Row>
        <Col lg={8} className="mx-auto">
          <Card>
            <CardBody className="p-md-5">
              <Container>
                {password && (
                  <Row className="align-items-center justify-content-between mb-4">
                    <Col>
                      <h2 className="mb-0 password">{password}</h2>
                    </Col>
                    <Col xs={"auto"}>
                      <button
                        type="button"
                        className="btn btn-primary"
                        onClick={() => handleCopyPassword()}
                      >
                        {copied ? "Copied" : "Copy"}
                      </button>
                    </Col>
                  </Row>
                )}
                <Row className="mb-4 align-items-center">
                  <Col>
                    <span className="fs-20">Password Length</span>
                  </Col>
                  <Col xs={"auto"}>
                    <span className="fs-20">{length}</span>
                  </Col>
                  <Col xs={12} className="mt-2">
                    {/*              <input
                      type="range"
                      className="form-range"
                      id="customRange1"
                      min="4"
                      max="20"
                      value={length}
                      onChange={(e) => setLength(e.target.value)}
                    /> */}
                    <Slider
                      min={4}
                      max={20}
                      value={length}
                      onChange={(value) => setLength(value)}
                      railStyle={{
                        backgroundColor: "#f2f6f7",
                        height: "8px",
                        borderRadius: "50px",
                      }}
                      trackStyle={{
                        backgroundColor: "#2a8b8b",
                        height: "8px",
                        borderRadius: "50px",
                      }}
                    />
                  </Col>
                </Row>
                <Row className="gy-4">
                  {checkBoxData &&
                    checkBoxData.map((items, index) => (
                      <Checkbox
                        key={index}
                        items={items}
                        index={index}
                        onChange={handleCheckBoxChange}
                      />
                    ))}
                </Row>
                <StrengthChecker password={password} />
                {errorMsg && (
                  <div className="text-center text-danger my-4">
                    <h3>{errorMsg}</h3>
                  </div>
                )}
                <Row className="mt-4">
                  <Col className="d-flex justify-content-center">
                    <button
                      type="button"
                      className="btn btn-primary"
                      onClick={() => generatePassword(checkBoxData, length)}
                    >
                      Generate Password
                    </button>
                  </Col>
                </Row>
              </Container>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordGenerator;
