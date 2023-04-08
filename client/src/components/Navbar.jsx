import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { SidebarContext } from '../contexts/SidebarContext';
import {BsBag, BsFillPersonFill} from 'react-icons/bs';
import { CartContext } from '../contexts/CartContext';
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { isSidebarOpen, setIsSidebarOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  const toggleNav = () => setIsOpen(!isOpen);

  return (
    <div>
    <nav className="flex bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div  className="flex items-center">
            <Link to="/" className="flex-shrink-0 text-white">
              My Furniture
            </Link>
            
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              onClick={toggleNav}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          <Link
                  to="/products"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Products
                </Link>
                <Link
                  to="/booking"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Booking
                </Link>
                <Link
                  to="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact
                </Link>
                <Link to="/login">
                <BsFillPersonFill className='text-2xl text-amber-100 items-center justify-center' />
                </Link>
                <div
                  onClick={toggleNav}
                  className='cursor-pointer  flex relative max-w-[50px] pl-2'
                >
                
                  <BsBag onClick={() => setIsSidebarOpen(!isSidebarOpen)} className='text-2xl text-white'/>
                
                <div className=' bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>{itemAmount}</div>
                </div>

            {/* <div className='cursor-pointer flex relative pl-5' onClick={() => setIsSidebarOpen(!isSidebarOpen)}><BsBag className='text-2xl text-white'/></div> */}
        </div>
        </div>
      </div>
    </nav>
    
    </div>
    
  );
}

export default Navbar;