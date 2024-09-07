import { GiCardExchange } from "react-icons/gi";
import { RiPoliceBadgeFill } from "react-icons/ri";
import { MdOutlineSupportAgent } from "react-icons/md";

const Policy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-600
    ">
        <div>
        <GiCardExchange className="text-6xl m-auto mb-5"/>
        <p className="font-semibold">Effortless Exchanges</p>
        <p className="text-gray-400">Enjoy a Seamless, Hassle-Free Exchange Policy</p>
        </div>

        <div>
        <RiPoliceBadgeFill className="text-6xl m-auto mb-5"/>
        <p className="font-semibold">Returns Made Easy: 7-Day Guarantee</p>
        <p className="text-gray-400">Experience a 7-Day Worry-Free Return Policy</p>
        </div>

        <div>
        <MdOutlineSupportAgent className="text-6xl m-auto mb-5"/>
        <p className="font-semibold">Best customer support</p>
        <p className="text-gray-400">We provide 24/7 customer support</p>
        </div>
      
    </div>
  )
}

export default Policy