import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='w-[18%] min-h-screen border-r-2'>
        <div className='flex flex-col gap-4 pt-6 pl-[20%] text-[15px]'>
            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to="/">
                <img className='w-5 h-5' src={assets.dashboard} alt="" />
                <p className='hidden md:block'>Dashboard</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to="/chat">
                <img className='w-5 h-5' src={assets.add_icon} alt="" />
                <p className='hidden md:block'>Chat</p>
            </NavLink>

            <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to="/symptoms">
                <img className='w-5 h-5' src={assets.stethoscope} alt="" />
                <p className='hidden md:block'>Symptoms</p>
            </NavLink>

            {/* <NavLink className='flex items-center gap-3 border border-gray-300 border-r-0 rounded-l px-3 py-2' to="/appointments">
                <img className='w-5 h-5' src={assets.order_icon} alt="" />
                <p className='hidden md:block'>Appointments</p>
            </NavLink> */}
        </div>
    </div>
  )
}

export default Sidebar
