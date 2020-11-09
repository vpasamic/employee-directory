import React, { Component } from "react";
import API from "../utils/API";
import TableContents from "./TableContents"
import TableHeaders from "./TableHeaders";

class Mainpage extends Component {
    state = {
        sortBy: "firstName",
        order: "descending",
        search: this.props.query,
        employees: []
      };
    
   componentDidMount = () =>{
        API.getUsers()
        .then((res) => {
            this.setState({employees:res.data.results})
            console.log(this.state.employees)
        });
    }
    static getDerivedStateFromProps(nextProps) {
        return {
          search: nextProps.query,
        };
      }
    handleBtnClick = event => {
        (this.state.sortBy !== event.target.name) || (this.state.order === "ascending") ? this.setState({ order: "descending" }) : this.setState({ order: "ascending" });
        this.setState({ sortBy: event.target.name })
      }
    
    searchEmployees() {
    let employees = this.state.employees;
        if (employees.length === 0) {
          return employees;
        } else if (this.state.search !== "") {
          employees = employees.filter(employee => {
            return (
              employee.name.first.toLowerCase().includes(this.state.search.toLowerCase()) ||
              employee.name.last.toLowerCase().includes(this.state.search.toLowerCase()) ||
              employee.dob.date.includes(this.state.search) ||
              employee.location.city.toLowerCase().includes(this.state.search.toLowerCase()) ||
              employee.phone.includes(this.state.search) ||
              employee.email.toLowerCase().includes(this.state.search.toLowerCase())
            );
          })
        }
        return employees;
      }

    render(){
       return(
        <div>
            <TableHeaders
            handleleBtnClick={this.handleBtnClick}
            sortBy={this.state.sortBy}
            order={this.state.order}
            />
           <TableContents 
            employees= {this.searchEmployees()}
            />
        
        </div>
       )
    }

}

export default Mainpage