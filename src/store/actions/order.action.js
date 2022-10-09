import { orderConstants } from "../constants";

const setNewOrder = (newOrder) => {
  return (dispatch) => {
    dispatch({
      type: orderConstants.SET_NEW_ORDER,
      payload: newOrder
    });
  };
};

export const orderActions = {
  setNewOrder
};
