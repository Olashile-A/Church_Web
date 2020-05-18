import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import EventPlannerLayout from "../src/containers/EventPlanner";

class EventPlanner extends Component {

 
  render() {
    return (
      <MainLayout>
        <EventPlannerLayout />
      </MainLayout>
    );
  }
}

export default EventPlanner;
