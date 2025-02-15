import React from 'react'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
            <div >
                <img src={assets.logo1} className="mb-5 w-32" alt="" />
                <p className='w-full md:w-2/3 text-gray-600'>
                    Our AI Health Assistant is designed to provide personalized health insights and support, empowering you to take control of your well-being with cutting-edge technology.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>+1 234 567 890</li>
                    <li>contact@brainrot.com</li>
                </ul>
            </div>
        </div>

        <div className=''>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024@ brainrot.com - All Right Reserved.</p>
        </div>

    </div>
  )
}

export default Footer
