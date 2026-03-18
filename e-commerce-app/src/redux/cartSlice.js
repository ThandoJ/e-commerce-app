import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: []
  },

  reducers: {

    addToCart: (state, action) => {
      const item = state.items.find(i => i.id === action.payload.id)

      if(item){
        item.quantity += 1
      }else{
        const {image, ...serializableProduct} = action.payload 
        state.items.push({...serializableProduct, quantity:1, subtitle: action.payload.subtitle || ""})
      }
    },

    removeFromCart: (state, action) => {
      state.items = state.items.filter(i => i.id !== action.payload)
    },

    increaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      item.quantity += 1
    },

    decreaseQty: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if(item.quantity > 1){
        item.quantity -= 1
      }
    },

    clearCart: (state) => {
      state.items = []
    }

  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer