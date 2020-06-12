import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import PodcastsLayout from "../src/containers/Podcasts";

class Podcasts extends Component {

 
  render() {
    return (
      <MainLayout>
        <PodcastsLayout />
      </MainLayout>
    );
  }
}

export default Podcasts;
