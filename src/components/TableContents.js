import React from "react";

function TableContents(props) {
    let employees=props.employees
    let sortOrder = (props.order === "descending" ? 1 : -1)
    switch (props.sortBy) {
        case ("firstName"):
            employees = employees.sort((a, b) => (a.name.first > b.name.first) ? sortOrder : -sortOrder);
            break;
        case ("lastName"):
            employees = employees.sort((a, b) => (a.name.last > b.name.last) ? sortOrder : -sortOrder);
            break;
        case ("Birth"):
            employees = employees.sort((a, b) => (a.dob.date < b.dob.date) ? sortOrder : -sortOrder);
            break;
        case ("city"):
            employees = employees.sort((a, b) => (a.location.city > b.location.city) ? sortOrder : -sortOrder);
            break;
        case ("Num"):
            employees = employees.sort((a, b) => (a.phone > b.phone) ? sortOrder : -sortOrder);
            break;
        case ("email"):
            employees = employees.sort((a, b) => (a.email > b.email) ? sortOrder : -sortOrder);
            break;
        default:
            break;
    }


    return (
        <div>
            {employees.map(employee => (
                <div className="row d-flex align-items-center" key={employee.email}>
                    <div className="col-1"><img src={employee.picture.medium} alt="Emp Img" /></div>
                    <div className="col-1 border-right">{employee.name.first}</div>
                    <div className="col-1 border-right">{employee.name.last}</div>
                    <div className="col-2 border-right">{employee.dob.date.split("T")[0]}</div>
                    <div className="col-2 border-right">{employee.location.city}</div>
                    <div className="col-2 border-right">{employee.phone}</div>
                    <div className="col-3 border-right">{employee.email}</div>
                </div>
            ))}
        </div>

    )
}





export default TableContents;