import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import RegisterUserViewLayout from "../src/containers/RegisteredUser/ViewRegisterdUser";

class RegisterUserView extends Component {

 
  render() {
    return (
      <MainLayout>
        <RegisterUserViewLayout />
      </MainLayout>
    );
  }
}

export default RegisterUserView;
