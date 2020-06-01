import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import RegisterUserLayout from "../src/containers/RegisteredUser";

class RegisterUser extends Component {

 
  render() {
    return (
      <MainLayout>
        <RegisterUserLayout />
      </MainLayout>
    );
  }
}

export default RegisterUser;
