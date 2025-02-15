import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../../assets/assets';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className='flex items-center py-2 px-[4%] justify-between'>
      <img className='w-[max(15%,80px)]' src={assets.logo1} alt="Logo" />
      
      <div className="relative" ref={dropdownRef}>
        <button 
          className='w-10 h-10 overflow-hidden border-gray-200 hover:border-gray-300 focus:outline-none'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <img 
            className='w-6 cursor-pointer' 
            src={assets.profile_icon} 
            alt="Profile" 
          />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
            <Link 
              to="/myprofile"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              My Profile
            </Link>
            <Link 
              to="/appointments"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsDropdownOpen(false)}
            >
              Appointments
            </Link>
            <hr className="my-1" />
            <button 
              className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
              onClick={() => {
                setIsDropdownOpen(false);
                // Add logout logic here
              }}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
