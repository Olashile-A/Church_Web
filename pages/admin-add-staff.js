import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import AdminAddUserLayout from "../src/containers/AdminUser/AdminAddUser";

class AdminAddUser extends Component {

 
  render() {
    return (
      <MainLayout>
        <AdminAddUserLayout />
      </MainLayout>
    );
  }
}

export default AdminAddUser;
