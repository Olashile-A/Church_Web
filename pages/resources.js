import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import ResourcesLayout from "../src/containers/Resources";

class Resources extends Component {

 
  render() {
    return (
      <MainLayout>
        <ResourcesLayout />
      </MainLayout>
    );
  }
}

export default Resources;
