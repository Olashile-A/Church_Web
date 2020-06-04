import { LINK_ROUTE, LINK_DETAILS, RESET } from "../../types";

const initialstate = {
  route: "details",
  detail: {}
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case LINK_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    case LINK_DETAILS:
      return Object.assign({}, state, {
        detail: action.payload
      });
    case RESET:

    return initialstate
    default:
      return state;
  }
}