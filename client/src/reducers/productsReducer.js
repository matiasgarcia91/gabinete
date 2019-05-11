const initialState = {
  shop: [],
  studio: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "SIMPLE_ACTION_PRODUCTS":
      return {
        result: action.payload
      };
    default:
      return state;
  }
};
