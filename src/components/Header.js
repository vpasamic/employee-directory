import React from "react";

function Header(props) {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Employee Tracker</h1>
      <p className="lead"></p>
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <nav
          className="navbar"
          onSubmit={(e) => e.preventDefault()}
        >
          <form className="form-inline position-relative">
            <input
              className="form-control"
              style={{ width: "500px" }}
              name="search"
              onChange={props.handleSearch}
              type="search"
              placeholder="Search Directory"
              autoComplete="off"
              aria-label="Search"
            />
            <button
              className="btn-primary"
              onClick={props.clearSearchBar}
            >
              Clear Searchbar
            </button>
          </form>
        </nav>
        </div>
        <div className="col"></div>
      </div>
    </div>
  );
}

export default Header;
