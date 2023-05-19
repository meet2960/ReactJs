import React, { useState } from "react";
import {
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
} from "reactstrap";

const DynamicDropDown = () => {
  const [isDropDown, setIsDropDown] = useState(false);
  const toggleDropDown = () => {
    setIsDropDown(!isDropDown);
  };
  return (
    <Container>
      <div>
        <h3>Dynamic DropDwon below</h3>
        <label htmlFor="">Size</label>
        <Dropdown isOpen={isDropDown} toggle={toggleDropDown}>
          <DropdownToggle
            tag="button"
            type="button"
            className="btn btn-ghost-primary"
          >
            Please Select
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>Hello</DropdownItem>
            <DropdownItem>HII</DropdownItem>
            <DropdownItem>WORLD</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </div>
    </Container>
  );
};

export default DynamicDropDown;
