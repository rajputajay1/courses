import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <>
      <header className="bg-[#FFF1ED] shadow-lg sticky top-0 z-50 pr-5">
        <div className="flex justify-between items-center ">
          <div className="flex items-center">
            <img src="./l2.png" alt="Logo" className="h-32 w-auto mr-4" />
          </div>

          <div className="flex lg:hidden">
            <button id="hamburger" className="text-black focus:outline-none" onClick={toggleSidebar}>
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
              </svg>
            </button>
          </div>

          <nav className="hidden lg:flex lg:flex-grow justify-center">
            <ul className="flex justify-center space-x-4 text-black">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dmit"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  DMIT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/carrercounselling"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  CARRER COUNSELLING
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/mba"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  M.B.A
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <p className="bg-green-500 hover:bg-blue-500 text-white font-semibold px-4 py-2 rounded inline-block cursor-pointer">
              Book An Appointment
            </p>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform lg:hidden`}
        // Added z-index for the overlay
      >
        <div className="absolute top-40 left-0 w-56 bg-white h-full shadow-lg p-4" style={{ zIndex: '70' }}> {/* Added z-index for the sidebar */}
       
          <nav className="mt-4">
            <ul className="space-y-4 text-black" onClick={closeSidebar}>
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  HOME
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/about"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  ABOUT US
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/dmit"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  DMIT
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/carrercounselling"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  CARRER COUNSELLING
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/mba"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  M.B.A
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"/contact"}
                  className={({ isActive }) =>
                    `hover:text-secondary font-bold cursor-pointer ${isActive ? 'text-blue-500' : 'text-black'}`
                  }
                >
                  CONTACT
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
