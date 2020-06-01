import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import PushNotificationLayout from "../src/containers/PushNotification";

class PushNotification extends Component {

 
  render() {
    return (
      <MainLayout>
        <PushNotificationLayout />
      </MainLayout>
    );
  }
}

export default PushNotification;
