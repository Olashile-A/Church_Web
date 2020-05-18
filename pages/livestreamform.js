import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import LiveStreamFormLayout from "../src/containers/LiveStream/LiveStreamForm";

class LiveStreamForm extends Component {

 
  render() {
    return (
      <MainLayout>
        <LiveStreamFormLayout />
      </MainLayout>
    );
  }
}

export default LiveStreamForm;
