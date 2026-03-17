
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"

import Checkout from "./pages/Checkout"

import Bag from "./pages/Bag"
import AddPayment from "./pages/AddPayment"
import AddAddress from "./pages/AddAddress"

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/add-Address" element={<AddAddress />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/add-payment" element={<AddPayment />} />
        <Route path="/bag" element={<Bag />} />
        <Route path="/add-payment" element={<AddPayment />} />
        <Route path="/add-address" element={<AddAddress />} />

      </Routes>
    </BrowserRouter>
  )
}

export default App
