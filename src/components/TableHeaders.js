import React from "react";

function TableHeaders(props) {
    let Arrow = props.order === "descending" ? "fa fa-angle-down" : "fa fa-angle-up";
 return(
    <div>
    <div className="row d-flex align-items-center tableHeader">
        <div className="col-md-1"></div>
        <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="firstName">First Name <i className={props.sortBy === "firstName" ? Arrow : ""}></i></button>
        <button className="btn btn-sm col-md-1" onClick={props.handleBtnClick} name="lastName">Last Name <i className={props.sortBy === "lastName" ? Arrow : ""}></i></button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="Birth">Date of Birth <i className={props.sortBy === "Birth" ? Arrow : ""}></i></button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="city">City <i className={props.sortBy === "city" ? Arrow : ""}></i></button>
        <button className="btn btn-sm col-md-2" onClick={props.handleBtnClick} name="Num">Phone <i className={props.sortBy === "Num" ? Arrow : ""}></i></button>
        <button className="btn btn-sm col-md-3" onClick={props.handleBtnClick} name="email">Email <i className={props.sortBy === "email" ? Arrow : ""}></i></button>
    </div>
</div>
 )

}



export default TableHeaders;