import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import UploadFormLayout from "../src/containers/Podcasts/UploadForm";

class UploadForm extends Component {

 
  render() {
    return (
      <MainLayout>
        <UploadFormLayout />
      </MainLayout>
    );
  }
}

export default UploadForm;
