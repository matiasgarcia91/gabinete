const initialState = {
  shop: [],
  studio: []
};

export default (state = {}, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION_PRODUCTS":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
