import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import NotificationLayout from "../src/containers/Notification";

class Notification extends Component {

 
  render() {
    return (
      <MainLayout>
        <NotificationLayout />
      </MainLayout>
    );
  }
}

export default Notification;
