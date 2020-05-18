import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import LiveStreamLayout from "../src/containers/LiveStream";

class LiveStream extends Component {

 
  render() {
    return (
      <MainLayout>
        <LiveStreamLayout />
      </MainLayout>
    );
  }
}

export default LiveStream;
