import React from 'react';

const Sidebar = () => {
  return (
    <div className='text-black  h-screen border w-48'>
      <ul className='text-xl'>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">Dashboard</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">Explore</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">Settings</li>
      </ul>
      <ul className='text-xl mt-10'>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">Notification</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">My Profile</li>
        <li className="py-4 px-2 hover:bg-gray-900 hover:text-white mt-2 text-xl font-medium rounded-xl m-3 pl-6 cursor-pointer">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
