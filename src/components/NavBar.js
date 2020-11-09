import React from 'react';

function NavBar(props) {
  return (
    <nav className="navbar navbar-light bg-info d-flex justify-content-center position-fixed"  onSubmit={e => e.preventDefault()}>
      <form className="form-inline position-relative" >
        <input className="form-control" style={{ width: "500px" }} name="search" onChange={props.handleSearch} type="search" placeholder="Search Directory" autoComplete="off" aria-label="Search" />
        <button className="btn-primary" onClick={props.clearSearch} style={{right: 0}}>Search</button>
      </form>
    </nav>
  )
}

export default NavBar;