import React from "react";

function Header(props) {
  return (
    <div class="jumbotron">
      <h1 class="display-4">Employee Tracker</h1>
      <p class="lead"></p>
      <div class="row">
        <div class="col"></div>
        <div class="col">
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
        <div class="col"></div>
      </div>
    </div>
  );
}

export default Header;
