import React from "react";
import { NavLink } from "react-router-dom";

const SideBar = () => {
  return (
    <div>
      <div class="border-end bg-white" id="sidebar-wrapper">
        <div class="sidebar-heading border-bottom bg-light">
          Start Bootstrap
        </div>
        <div class="list-group list-group-flush">
          <NavLink
            to="/dashboard"
            class="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Dashboard
          </NavLink>
          <NavLink
            to={"/userlist"}
            class="list-group-item list-group-item-action list-group-item-light p-3"
          >
            Shortcuts
          </NavLink>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Overview
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Events
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Profile
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
          <a
            class="list-group-item list-group-item-action list-group-item-light p-3"
            href="#!"
          >
            Status
          </a>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
