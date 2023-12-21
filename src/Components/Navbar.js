import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar w-100 p-0 m-0 ">
      <nav className="navbar navbar-expand-lg navbar-light bg-light w-100 navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand">Yahoo-Finance</Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active" aria-current="page">
                  Recommendations
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to={"/listByTicker"}
                  className="nav-link "
                  aria-current="page"
                >
                  ListByTicker
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/trendingTickers"} className="nav-link" href="#">
                  TrendingTickers
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/popularWatchlists"} className="nav-link" href="#">
                  PopularWatchlists
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
