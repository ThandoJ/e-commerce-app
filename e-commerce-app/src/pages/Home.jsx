import Sidebar from "../components/Sidebar"
import ProductCard from "../components/ProductCard"
import products from "../data/products"
import icon from "../assets/icon.png"

import { useSelector } from "react-redux"
import { useState } from "react"

export default function Home() {

  const [search,setSearch] = useState("")
  const cart = useSelector(state => state.cart.items)

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(search.toLowerCase())
  )

  return (

     
<div className="min-h-screen bg-gray-100 flex p-6 gap-6">
   

      {/* Sidebar */}

      <Sidebar/>

      {/* Product Section */}

      <div className="flex-1">

        {/* Search */}

        <div className="mb-6">
          <input
            placeholder="Apple Watch, Samsung S21, Macbook Pro..."
            className="w-96 p-3 rounded-xl shadow"
            onChange={(e)=>setSearch(e.target.value)}
          />
        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-4 gap-6">

          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product}/>
          ))}

        </div>

      </div>

      {/* Bag Section */}

      <div className="w-64 bg-white rounded-xl shadow p-6">

        <h2 className="text-xl font-bold mb-6">Bag</h2>

        <div className="grid grid-cols-3 gap-3 mb-6">

          {cart.map(item => (
            <img
              key={item.id}
              src={item.image}
              className="w-14 h-14 object-contain bg-gray-100 rounded-lg"
            />
          ))}

       </div>

<button className="w-full bg-black text-white p-3 rounded-xl flex items-center justify-center gap-2">

  <img src={icon} className="w-6 h-6"/>

  View Bag

</button>

</div>

    
    </div>
    
  )
}