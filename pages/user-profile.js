import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import UserProfileLayout from "../src/containers/UserProfile";

class UserProfile extends Component {

 
  render() {
    return (
      <MainLayout>
        <UserProfileLayout />
      </MainLayout>
    );
  }
}

export default UserProfile;
