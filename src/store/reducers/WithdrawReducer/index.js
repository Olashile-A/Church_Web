import { WITHDRAW_ROUTE, WITHDRAW_RESET } from "../../types";

const initialstate = {
  route: "detail",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case WITHDRAW_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    case WITHDRAW_RESET:

    return initialstate
    default:
      return state;
  }
}