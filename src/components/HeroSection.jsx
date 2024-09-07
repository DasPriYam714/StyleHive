import { assets } from "../assets/assets"


const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-700 rounded">
        {/* Hero Left */}
        <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
            <div className="flex items-center gap-2">
                <p className="w-5 md:w-11 h-[2px] bg-[#414141]"></p>
                <p className="font-medium text-sm md:text-base">Customer Favorites</p>
            </div>
            <h1 className="text-3xl prata-regular sm:py-3 lg:text-5xl leading-relaxed">New Arrivals You will Love</h1>
            <div className="flex items-center gap-2">
                <p className="font-semibold text-sm md:text-base">Shop the Latest Trends</p>
                <p className="w-5 md:w-11 h-[1px] bg-[#414141]"></p>
            </div>

        </div>

        </div>

        {/* Hero Right */}
        <div className="w-full sm:w-1/2 rounded" >
        <img src={assets.heroLogo} alt="" />

        </div>
      
    </div>
  )
}

export default HeroSection