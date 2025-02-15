import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Symptoms from './pages/Symptoms';
import Signin from './pages/Signin';
import MyProfile from './pages/MyProfile';
import Navbar from './components/reusable/Navbar';
import Sidebar from './components/reusable/Sidebar';
import Footer from './components/reusable/Footer';
import Appointments from './pages/Appointments';
import Chatbox from './components/reusable/Chatbox';
import Chat from './pages/Chat';

// import List from './pages/List'
// import Orders from './pages/Orders'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const location = useLocation();
  const isChatRoute = location.pathname === '/chat';

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navbar />
      <hr />
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/symptoms" element={<Symptoms />} />
            {/* <Route path="/list" element={<List/>} />
            <Route path="/orders" element={<Orders/>} /> */}
            <Route path="/signin" element={<Signin />} />
            <Route path="/myprofile" element={<MyProfile />} />
            <Route path="/appointments" element={<Appointments />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </div>
      </div>
      {!isChatRoute && <Footer />}
      {!isChatRoute && <Chatbox />}
    </div>
  );
};

export default App;
