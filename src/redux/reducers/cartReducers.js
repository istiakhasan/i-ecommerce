const initialValue = {
  cart: [],
};

const cartReducers = (state = initialValue, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const isExist = state.cart.find((v) => v.id === action.payload.id);
      let newProduct = [];
      if (!isExist) {
        newProduct = [...state.cart, action.payload];
      } else {
        const remining = state.cart.filter((v) => v.id !== action.payload.id);
        isExist.quantity += 1;
        newProduct = [...remining, isExist];
      }

      return {
        ...state,
        cart: newProduct,
      };

    case "REMOVE_TO_CART":
      state.cart.splice(+action.payload, 1);
      // const reminingItem = state.cart.filter((v) => v.id !== action.payload);
      return {
        ...state,
        cart: state.cart,
      };
    case "INCREMENT_QTY":
      const _dataInc = [...state.cart];
      _dataInc[action.payload].orderQuantity += 1;
      return {
        ...state,
        cart: _dataInc,
      };
    case "DECREMENT_QTY":
      // const detargetedItem = state.cart.find((v) => v.id === action.payload);
      // detargetedItem.orderQuantity -= 1;
      // const dereminingItem = state.cart.filter((v) => v.id !== action.payload);
      const _data = [...state.cart];
      _data[action.payload].orderQuantity -= 1;

      return {
        ...state,
        cart: _data,
      };
    case "MODIFY_QUANTITY_BY_INPUT":
      const targetedInput = state.cart.find((v) => v.id === action.payload.id);
      targetedInput.orderQuantity = action.payload.obj;
      const reminingProducts = state.cart.filter(
        (v) => v.id !== action.payload.id
      );
      return {
        ...state,
        cart: [...reminingProducts, targetedInput],
      };

      break;
    default:
      return state;
  }
};

export default cartReducers;
