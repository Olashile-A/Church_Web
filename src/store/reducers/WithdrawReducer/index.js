import { WITHDRAW_ROUTE } from "../../types";

const initialstate = {
  route: "detail",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case WITHDRAW_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    default:
      return state;
  }
}