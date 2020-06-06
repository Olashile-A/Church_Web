import { TRANSFER_ROUTE, TRANSFER_RESET } from "../../types";

const initialstate = {
  route: "",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case TRANSFER_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    case TRANSFER_RESET:

    return initialstate
    default:
      return state;
  }
}