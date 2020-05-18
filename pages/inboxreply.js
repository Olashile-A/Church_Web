import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import InboxReplyLayout from "../src/containers/PrayerRequest/components/InboxReply";

class InboxReply extends Component {

 
  render() {
    return (
      <MainLayout>
        <InboxReplyLayout />
      </MainLayout>
    );
  }
}

export default InboxReply;
