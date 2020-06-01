import { WALLET } from "../../types";

const initialstate = {
  walletDetail: {},
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case WALLET:
      return Object.assign({}, state, {
        walletDetail: action.payload
      });
    default:
      return state;
  }
}