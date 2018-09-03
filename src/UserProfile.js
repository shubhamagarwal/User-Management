import React, { Component } from "react";
import PropTypes from 'prop-types';

export class UserProfile extends Component {
    render() {
        return(
            <div className="column" key={this.props.userData.id}>
                <img src={this.props.userData.avatar} alt="Avatar"/>
                <h2 className="user-name">{this.props.userData.first_name} {this.props.userData.last_name}</h2>
                <a href="" onClick={(e) => this.props.deleteUserById(e,this.props.userData.id)} className="delete-user">Delete</a>
            </div>
        )
    }

}

UserProfile.propTypes = {
  userData: PropTypes.object
};