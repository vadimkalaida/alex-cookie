import { orderConstants } from "../constants";

export function order(state = [], { type, payload }) {
  switch(type) {
    case orderConstants.SET_NEW_ORDER:
      return payload;
    default:
      return state;
  }
}