import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import InboxViewLayout from "../src/containers/PrayerRequest/components/InboxView";

class InboxView extends Component {

 
  render() {
    return (
      <MainLayout>
        <InboxViewLayout />
      </MainLayout>
    );
  }
}

export default InboxView;
