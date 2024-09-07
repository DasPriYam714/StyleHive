import { TbBrandFacebook } from "react-icons/tb";
import { IoLogoGoogle } from "react-icons/io5";
import { LiaFlagUsaSolid } from "react-icons/lia";

const Footer = () => {
  return (
    <div className="w-full bg-black text-white">
      <div className="px-20 py-10">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 text-sm mb-20">
          {/* Style */}
          <div className="justify-center md:justify-start">
            <p className="text-3xl ">
              Style<span className="text-blue-600">Hive</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-between gap-5">
            <div>
              <p className="text-xl font-medium mb-5">About Us</p>
              <ul className="flex flex-col gap-1 text-gray-600">
                <li>Master Plan</li>
                <li>Jobs</li>
                <li>Invest</li>
                <li>Pressroom</li>
                <li>Blog</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-medium mb-5">Explore EEVE</p>
              <ul className="flex flex-col gap-1 text-gray-600">
                <li>Starlight</li>
                <li>Robot Platform</li>
                <li>EEVE Roadmap</li>
              </ul>
            </div>
            <div>
              <p className="text-xl font-medium mb-5">Get In Touch</p>
              <ul className="flex flex-col gap-1 text-gray-600">
                <li>+1-222-345-4562</li>
                <li>contact@stylehive.com</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-5 pt-2 border-t-2  border-gray-400">
          <div className="flex text-lg my-5 gap-5 ">
            <TbBrandFacebook />
            <IoLogoGoogle />
          </div>
          <div className="flex justify-around text-lg  my-5">
            <p>Contact</p>
            <p>Policy</p>
            <p>General Term</p>
          </div>
          <div className="flex justify-center items-center gap-2 text-lg my-5">
            <LiaFlagUsaSolid />
            <p>United States</p>
          </div>
        </div>
        <div className="text-center items-center">
          <p>Copyright 2024@stylehive.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
