// productSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    imageUrl:
      "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/image-Photoroom.jpg",
    brand: "Brand A",
    productName: "9 Mukhi Rudraksha",
    price: 149,
    discountedPrice: 199,
  },
  {
    id: 2,
    imageUrl:
      "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/3.png",
    brand: "Divine Temples Heavy",
    productName: "Product A",
    price: 149,
    discountedPrice: 199,
  },
  {
    id: 3,
    imageUrl:
      "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/1.png",
    brand: "Brand A",
    productName: "Ganesh Ji Idol brass metal",
    price: 149,
    discountedPrice: 199,
  },
  {
    id: 4,
    imageUrl:
      "https://raw.githubusercontent.com/Arabhya07092007/SKPimages/main/DSC05857copy_1_900x.jpg",
    brand: "Brand A",
    productName: "Rudraksha malas",
    price: 149,
    discountedPrice: 199,
  },
];

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    getAllProducts: (state) => state,
  },
});

export const { getAllProducts } = productSlice.actions;

export default productSlice.reducer;
