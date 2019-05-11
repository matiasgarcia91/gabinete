export const addToCart = id => dispatch => {
  dispatch({
    type: "ADD_TO_CART",
    payload: id
  });
};
