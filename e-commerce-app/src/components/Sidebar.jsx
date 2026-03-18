import Logo1 from "../assets/Logo1.png"
import Logo2 from "../assets/Logo2.png"
import Logo3 from "../assets/Logo3.png"
import Logo4 from "../assets/Logo4.png"
import Logo5 from "../assets/Logo5.png"
import { Link } from "react-router-dom";

export default function Sidebar() {

  return (

    <div className="w-20 h-screen sticky top-0 bg-white rounded-2xl shadow flex flex-col justify-between items-center py-6">

      {/* Top Section */}

      <div className="flex flex-col items-center gap-8">

        <img src={Logo1} className="w-8"/>

        <img src={Logo2} className="w-8 cursor-pointer"/>

      {/* Store */}
        <div className="relative group">
          <Link to="/">
            <img src={Logo3} className="w-8 cursor-pointer" />
          </Link>

       {/* Tooltip */}
          <span className="absolute left-12 top-1/2 -translate-y-1/2 
                           bg-black text-white text-xs px-2 py-1 rounded 
                           opacity-0 group-hover:opacity-100 transition">
            Store
          </span>
        </div>

        {/* BAG */}
        <div className="relative group">
          <Link to="/bag">
            <img src={Logo4} className="w-8 cursor-pointer" />
          </Link>

          {/* Tooltip */}
          <span className="absolute left-12 top-1/2 -translate-y-1/2 
                           bg-black text-white text-xs px-2 py-1 rounded 
                           opacity-0 group-hover:opacity-100 transition">
            Bag
          </span>
        </div>

      </div>

      {/* Bottom Icon */}

      <div >

        <img src={Logo5} className="w-10"/>

      </div>

    </div>

  )
}