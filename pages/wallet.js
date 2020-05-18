import React, { Component } from "react";
import MainLayout from "../src/layout/Main";
import WalletLayout from "../src/containers/Wallet";

class Wallet extends Component {

 
  render() {
    return (
      <MainLayout>
        <WalletLayout />
      </MainLayout>
    );
  }
}

export default Wallet;
