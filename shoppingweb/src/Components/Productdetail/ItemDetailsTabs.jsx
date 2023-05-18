import React, { useState } from "react";
import {
  Col,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
} from "reactstrap";

const ItemDetailsTabs = () => {
  const [activeTab, setActiveTab] = useState("1");
  const toggleTab = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <React.Fragment>
      <Nav tabs className="justify-content-center">
        <NavItem>
          <NavLink
            href="#"
            className={activeTab === "1" ? "active" : " "}
            onClick={() => {
              toggleTab("1");
            }}
          >
            Description
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            href="#"
            className={activeTab === "2" ? "active" : " "}
            onClick={() => {
              toggleTab("2");
            }}
          >
            Additional Information
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
            Reviews
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab} className="mt-3">
        <TabPane tabId="1">
          <div>
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
            <p>
              It has survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release.
            </p>
            <div></div>
          </div>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col>Additional Information</Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col>Reviews(4)</Col>
          </Row>
        </TabPane>
      </TabContent>
    </React.Fragment>
  );
};

export default ItemDetailsTabs;
