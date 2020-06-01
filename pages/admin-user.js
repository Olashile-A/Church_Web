import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import AdminUserLayout from "../src/containers/AdminUser";

class AdminUser extends Component {

 
  render() {
    return (
      <MainLayout>
        <AdminUserLayout />
      </MainLayout>
    );
  }
}

export default AdminUser;
