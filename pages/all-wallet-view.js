import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import AllWalletYiewLayout from "../src/containers/Wallet/AllWalletView";

class AllWalletYiew extends Component {

 
  render() {
    return (
      <MainLayout>
        <AllWalletYiewLayout />
      </MainLayout>
    );
  }
}

export default AllWalletYiew;
