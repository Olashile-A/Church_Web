import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import PrayerRequestLayout from "../src/containers/PrayerRequest";

class PrayerRequest extends Component {

 
  render() {
    return (
      <MainLayout>
        <PrayerRequestLayout />
      </MainLayout>
    );
  }
}

export default PrayerRequest;
