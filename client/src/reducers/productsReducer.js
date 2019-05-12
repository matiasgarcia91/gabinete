import testImg from "../components/shop-page/a.jpg";

const mockProducts = [
  {
    id: "1",
    name: "Remera",
    price: 250,
    sizes: ["S", "M", "L"],
    image: testImg
  },
  { id: "2", name: "Buzo", price: 400, sizes: ["S", "M", "L"], image: testImg },
  { id: "3", name: "Poster", price: 50, sizes: [], image: testImg },
  { id: "4", name: "Mueble", price: 950, sizes: [], image: testImg },
  { id: "5", name: "Disco", price: 250, sizes: [], image: testImg }
];

const initialState = {
  shop: mockProducts,
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
