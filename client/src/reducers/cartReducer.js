const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, action.payload]
      };
    default:
      return state;
  }
};
