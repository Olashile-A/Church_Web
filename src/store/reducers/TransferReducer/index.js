import { TRANSFER_ROUTE } from "../../types";

const initialstate = {
  route: "",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case TRANSFER_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    default:
      return state;
  }
}