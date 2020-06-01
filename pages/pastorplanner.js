import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import PastorPlannerLayout from "../src/containers/PastorPlanner";

class PastorPlanner extends Component {

 
  render() {
    return (
      <MainLayout>
        <PastorPlannerLayout />
      </MainLayout>
    );
  }
}

export default PastorPlanner;
