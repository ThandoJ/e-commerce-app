
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import AddAddress from "./pages/AddAddress"
import Checkout from "./pages/Checkout"
import AddPayment from "./pages/AddPayment"
import Bag from "./pages/Bag"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-Address" element={<AddAddress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-success" element={<OrderSuccess />} />
        <Route path="/bag" element={<Bag />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
