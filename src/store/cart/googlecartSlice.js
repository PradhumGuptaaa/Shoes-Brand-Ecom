import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: 0,
};

const googlecartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartSetUp: (state, action) => {
      state.cart = action.payload;
    },
    cartAdd: (state) => {
      state.cart += 1;
    },
    cartRemove: (state) => {
      state.cart -= 1;
    },
    cartItemRemove: (state, action) => {
      state.cart -= action.payload;
    },
  },
});

export const { cartSetUp, cartAdd, cartItemRemove, cartRemove, cartEmpty } =
  googlecartSlice.actions;
export default googlecartSlice.reducer;