import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import LiveStreamViewLayout from "../src/containers/LiveStream/LiveStreamView";

class LiveStreamView extends Component {

 
  render() {
    return (
      <MainLayout>
        <LiveStreamViewLayout />
      </MainLayout>
    );
  }
}

export default LiveStreamView;
