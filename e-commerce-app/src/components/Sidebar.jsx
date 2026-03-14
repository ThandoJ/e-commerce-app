import logo1 from "../assets/logo1.png"
import logo2 from "../assets/logo2.png"
import logo3 from "../assets/logo3.png"
import logo4 from "../assets/logo4.png"
import logo5 from "../assets/logo5.png"

export default function Sidebar() {

  return (

    <div className="w-20 h-screen sticky top-0 bg-white rounded-2xl shadow flex flex-col justify-between items-center py-6">

      {/* Top Section */}

      <div className="flex flex-col items-center gap-8">

        <img src={logo1} className="w-8"/>

        <img src={logo2} className="w-8 cursor-pointer"/>

         <img src={logo3} className="w-8 cursor-pointer"/>

        <img src={logo4} className="w-8 cursor-pointer"/>

       

      </div>

      {/* Bottom Icon */}

      <div >

        <img src={logo5} className="w-10"/>

      </div>

    </div>

  )
}