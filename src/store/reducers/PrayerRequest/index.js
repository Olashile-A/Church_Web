import { PRAYER_REQUEST } from "../../types";

const initialstate = {
  requestDetail: {},
}

export default (state = initialstate, action) => {
  switch (action.type) {
    case PRAYER_REQUEST:
      return Object.assign({}, state, {
        requestDetail: action.payload
      });
    default:
      return state;
  }
}