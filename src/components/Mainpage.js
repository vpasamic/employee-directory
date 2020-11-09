import React, { Component } from "react";
import API from "../utils/API";

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

    dragon(){
    console.log(this.state.employees);
    }

    render(){
       return(
        <div>
            <p>hi</p>
        </div>
       )
    }

}

export default Mainpage