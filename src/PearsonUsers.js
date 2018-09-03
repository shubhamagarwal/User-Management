import React, { Component } from "react";
import axios from "axios";
import { UserProfile } from "./UserProfile";

export class PearsonUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: []
    };
  }

  componentDidMount() {
    axios.get("https://reqres.in/api/users?page=1&per_page=10")
            .then( (response) => {
                       this.setState({users: response.data.data});
                    });
  };

  deleteUserById(e,userId){
    let updatedUsersList = this.state.users.filter(data => data.id !== userId);
    this.setState({users: updatedUsersList});
    e.preventDefault();
  }

  deleteDuplicateUsers(e){
    const updatedUsersList = this.state.users.reduce((x, y) => x.findIndex(e=>e.first_name===y.first_name)<0 ? [...x, y]: x, []);
    this.setState({users: updatedUsersList});
    e.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <div className="pearon-users">
          <h1 className="heading">Pearson User Management</h1>
          
          {this.state.users.length ? 
            (<div className="row">
              {this.state.users.map((data,i) => {
                return(
                  <UserProfile userData={data} key={i} deleteUserById={(e) => this.deleteUserById(e,data.id)}/>
                  )
              })}
            
            </div>) : <div className="empty-list">Fetching data from api........</div>}
          
        </div>
        <div className="delete-duplicate"><a href="" onClick={(e) => this.deleteDuplicateUsers(e)} >Delete Duplicate</a></div>
      </React.Fragment>
    );
  }
}
