import { LINK_ROUTE, RESET } from "../../types";

const initialstate = {
  route: "details",
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case LINK_ROUTE:
      return Object.assign({}, state, {
        route: action.payload
      });
    case RESET:

    return initialstate
    default:
      return state;
  }
}