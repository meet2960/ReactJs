import React, { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  Table,
  TabPane,
} from "reactstrap";
import { reviewList } from "../../utils/reviewsList";
import RatingsStars from "../Common/RatingsStars";

const ItemDetailsTabs = ({ selectedProduct }) => {
  // ? State for Tabs Toggle and function to Toggle the State
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };

  return (
    <React.Fragment>
      <div className="custom-tabs">
        <Nav tabs className="justify-content-center justify-content-md-evenly">
          <NavItem>
            <NavLink
              href="#"
              className={activeTab === "1" ? "active" : ""}
              onClick={() => {
                toggleTab("1");
              }}
            >
              <h5
                className={`mb-0 title ${
                  activeTab === "1" ? "active-title" : ""
                }`}
              >
                Description
              </h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={activeTab === "2" ? "active" : ""}
              onClick={() => {
                toggleTab("2");
              }}
            >
              <h5
                className={`mb-0 title ${
                  activeTab === "2" ? "active-title" : ""
                }`}
              >
                Additional Information
              </h5>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              href="#"
              className={activeTab === "3" ? "active" : " "}
              onClick={() => {
                toggleTab("3");
              }}
            >
              <h5
                className={`mb-0 title ${
                  activeTab === "3" ? "active-title" : " "
                }`}
              >
                Reviews
              </h5>
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent activeTab={activeTab} className="mt-4 fs-16">
          <TabPane tabId="1">
            <p className="justify-paragraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consequatur fugit est fuga amet incidunt. Debitis, est nisi illo
              doloribus eligendi autem soluta fuga, ex obcaecati eum ab libero.
              Libero, voluptatem dignissimos totam ipsa cumque sequi illum
              mollitia exercitationem culpa, animi minus voluptatibus eveniet!
              Ex nihil, modi sit consequuntur ipsum accusamus.
            </p>
            <ul className="list-unstyled list-description">
              <li>
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing.
                </span>
              </li>
              <li>
                <span>Qui sequitur mutationem consuetudium lectorum.</span>
              </li>
              <li>
                <span>Claritas est etiam processus dynamicus.</span>
              </li>
              <li>
                <span>Qui sequitur mutationem consuetudium lectorum.</span>
              </li>
              <li>
                <span>Claritas est etiam processus dynamicus.</span>
              </li>
              <li>
                <span>Qui sequitur mutationem consuetudium lectorum.</span>
              </li>
            </ul>
            <p className="justify-paragraph">
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
          </TabPane>
          <TabPane tabId="2">
            <Row className="justify-content-center">
              <Col lg={10}>
                <Table>
                  <tbody>
                    <tr>
                      <td>Model</td>
                      <td>{selectedProduct?.title}</td>
                    </tr>
                    <tr>
                      <td>Category</td>
                      <td>{selectedProduct?.category.toUpperCase()}</td>
                    </tr>
                    <tr>
                      <td>Color</td>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <td>Weight</td>
                      <td>.25kg</td>
                    </tr>
                    <tr>
                      <td>Dimensions</td>
                      <td>62 x 56 x 12 cm</td>
                    </tr>
                    <tr>
                      <td>Size</td>
                      <td>XL, XXL, LG, SM, MD</td>
                    </tr>
                    <tr>
                      <td>Gurantee</td>
                      <td>1 Year</td>
                    </tr>
                    <tr>
                      <td>Series</td>
                      <td>{selectedProduct?.title}</td>
                    </tr>
                    <tr>
                      <td>Discount</td>
                      <td>{selectedProduct?.discountPercentage}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="3">
            <h5 className="mb-4">
              Reviews ({reviewList && reviewList.length})
            </h5>
            <div>
              <Row className="gy-4">
                {reviewList &&
                  reviewList.length !== 0 &&
                  reviewList.map((items, index) => (
                    <React.Fragment key={index}>
                      <Col xs={2} lg={2} xl={1}>
                        <div className="rounded-circle overflow-hidden">
                          <img
                            src={items.image}
                            alt="user-img"
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                      <Col xs={10} lg={10} xl={11}>
                        <div>
                          <div className="d-flex justify-content-between">
                            <div>
                              <p className="fw-semibold mb-0 d-inline-block">
                                {items.name}
                              </p>
                              <span className="fs-12"> - {items.duration}</span>
                              <p className="fs-14 mb-0">
                                <RatingsStars
                                  getRatings={reviewList[1].rating}
                                />
                              </p>
                            </div>
                            <div className="fs-12">
                              <span className="cursor-pointer">
                                Leave Reply
                              </span>
                            </div>
                          </div>
                          <p className="my-3">{items.title}</p>
                          <Row className="align-items-center">
                            <Col xs={"auto"} className="">
                              <span>
                                <i className="bi bi-hand-thumbs-up-fill"></i>
                              </span>
                              <span className="mx-2">Helpful</span>
                              <span>(3)</span>
                            </Col>
                            <Col xs={"auto"}>
                              <span>
                                <i className="bi bi-hand-thumbs-down"></i>
                              </span>
                              <span className="mx-2">Unhelpful</span>
                              <span>(1)</span>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </React.Fragment>
                  ))}
              </Row>
            </div>
          </TabPane>
        </TabContent>
      </div>
    </React.Fragment>
  );
};

export default ItemDetailsTabs;
