import React from "react";
import { NavLink } from "react-router-dom";

export default function Toggle() {
  return (
    <div className='card shadow-sm ctm-border-radius'>
      <div className='card-body align-center'>
        <div className='d-flex'>
          <NavLink
            to={"/customer"}
            className='list-group-item text-center button-6 flex-grow-1 rounded-0'
            activeClassName='active'
            exact>
            {"All Clients"}
          </NavLink>
          <NavLink
            to={"/client-active"}
            className='list-group-item text-center button-6 flex-grow-1 rounded-0'
            activeClassName='active'
            exact>
            {"Active Clients"}
          </NavLink>
          <NavLink
            to={"/customer-add"}
            className='list-group-item text-center button-6 flex-grow-1 rounded-0'
            activeClassName='active'
            exact>
            {"Add Client"}
          </NavLink>
        </div>
      </div>
    </div>
  );
};
