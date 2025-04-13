import React from "react";
import { Link } from "react-router-dom";

export default function Breadcumb3({ category }) {
  return (
    <div
      style={{ marginTop: "80px" }}
      className="breadcrumbs panel z-1 py-2 bg-secondary dark:bg-gray-100 dark:bg-opacity-5 dark:text-white"
    >
      <div className="container max-w-xl">
        <ul className="breadcrumb nav-x justify-center items-center gap-1 fs-7 m-0 fw-bold">
          <li>
            <img
              alt="icon"
              className="me-1"
              src="/assets/images/common/icons/home.svg"
              width="18"
              height="18"
            />
          </li>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
          </li>
          <li>
            <Link to={`/shop`}>Shop</Link>
          </li>
          <li>
            <i className="unicon-chevron-right fw-medium opacity-50 rtl:rotate-180" />
          </li>

          <li>
            <span className="opacity-50">{category}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
