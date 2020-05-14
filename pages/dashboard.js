import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import DashboardLayout from "../src/containers/Dashboard";

class Dashboard extends Component {

 
  render() {
    return (
      <MainLayout>
        <DashboardLayout />
      </MainLayout>
    );
  }
}

export default Dashboard;
