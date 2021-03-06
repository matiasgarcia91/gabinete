export const addToCart = id => dispatch => {
  dispatch({
    type: "ADD_TO_CART",
    payload: id
  });
};

export const deleteFromCart = id => dispatch => {
  dispatch({
    type: "DELETE_FROM_CART",
    payload: id
  });
};

export const updateQuantity = (id, quantity) => dispatch => {
  dispatch({
    type: "UPDATE_QUANTITY",
    payload: { id, quantity }
  });
};
