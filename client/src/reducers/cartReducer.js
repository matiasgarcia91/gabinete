const initialState = {
  items: [{ id: "1", quantity: 2 }, { id: "3", quantity: 1 }]
};

export default (state = initialState, action) => {
  let filteredItems;
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        items: [...state.items, { id: action.payload, quantity: 1 }]
      };
    case "DELETE_FROM_CART":
      filteredItems = state.items.filter(i => i.id !== action.payload);
      return { items: filteredItems };
    case "UPDATE_QUANTITY":
      filteredItems = state.items.filter(i => i.id !== action.payload.id);
      return {
        items: [
          ...filteredItems,
          { id: action.payload.id, quantity: action.payload.quantity }
        ]
      };
    default:
      return state;
  }
};
