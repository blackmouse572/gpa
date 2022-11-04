import { createSlice } from '@reduxjs/toolkit';
import { PRODUCTS } from '../../shared/products';
export interface IProduct {
  id: number,
  name: string,
  gpa: number,
}
export interface IStateProduct {
  count: number,
  products: IProduct[],
}
//Load product from products.json
let init_products: IProduct[] = PRODUCTS;
const initState = {
  count: init_products.length,
  products: init_products
}
export const ProductSlice = createSlice({
  initialState: initState,
  name: "Products",
  reducers: {
    addProduct: (state, action) => {

      const newProduct: IProduct = {
        id: Math.random() * 100,
        name: action.payload.name,
        gpa: action.payload.gpa
      }
      state.products.push(newProduct);
    },
    removeProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload.id)
    },
  }
})
export const { addProduct, removeProduct } = ProductSlice.actions;

export default ProductSlice.reducer;
