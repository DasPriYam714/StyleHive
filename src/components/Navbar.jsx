import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, Link } from 'react-router-dom'
import { ShopContext } from '../context/ContextShop';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const{getCartCount} =useContext(ShopContext)
  return (
    <div className='flex items-center justify-between py-5 font-medium'>
       <Link to='/'> <img src={assets.mainLogo} alt="Logo" className='w-20'/></Link>

        <ul className='hidden sm:flex gap-4 text-sm text-gray-800'>
            <NavLink to='/' className={'flex flex-col items-center gap-1'}>
                <p>Home</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>

            </NavLink>
            <NavLink to='/products' className={'flex flex-col items-center gap-1'}>
                <p>Products</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>

            </NavLink>
            <NavLink to='/categories' className={'flex flex-col items-center gap-1'}>
                <p>Categories</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>

            </NavLink>
            <NavLink to='/custom' className={'flex flex-col items-center gap-1'}>
                <p>Custom</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>

            </NavLink>
            <NavLink to='/blogs' className={'flex flex-col items-center gap-1'}>
                <p>Blogs</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-600 hidden'/>

            </NavLink>

        </ul>
        <div className='flex items-center gap-6'>
            
           
            <Link to='/cart' className='relative'>
            <img src={assets.cart_icon} alt="cart icon" className='w-5 min-w-5  cursor-pointer'/>
            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-slate-800 text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
              
            </Link>

            <div className='group relative'>
                <img src={assets.profile_icon} alt="profile icon" className='w-5  cursor-pointer'/>
                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-300 text-gray-600 rounded'>
                        <p className='cursor-pointer hover:text-black'>My Profile</p>
                        <p className='cursor-pointer hover:text-black'>Orders</p>
                        <p className='cursor-pointer hover:text-black'>Logout</p>
                    </div>
                </div>
            </div>

            <img src={assets.menu_icon} alt="menu icon" onClick={()=> setVisible(true)} className='w-5 cursor-pointer sm:hidden'  />

        </div>
        {/* Menubar for mobile device */}
        <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
            <div className='flex flex-col text-gray-600'>
                <div onClick={()=> setVisible(false)} className='flex items-center gap-4 p-3'>
                    <img src={assets.dropdown_icon} alt="drop down" className='h-5 rotate-180' />
                    <p>Back</p>

                </div>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/'>Home</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/products'>Products</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/categories'>Categories</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/custom'>Custom</NavLink>
                <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/blogs'>Blogs</NavLink>
            </div>

        </div>
      
    </div>
  )
}

export default Navbar
