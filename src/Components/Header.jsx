import React from 'react';
import { MagnifyingGlassIcon
  , GlobeAltIcon ,
  Bars3Icon,
  UserCircleIcon
 } from '@heroicons/react/24/solid'; // Updated for v2
import Logo from '../assets/logo.svg'; // Make sure this path is correct

const Header = () => {
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md py-3 px-5 md:px-10 md:py-5'>
      <div className='relative flex items-center my-auto h-10 cursor-pointer'>
        <img src={Logo} width={100} alt="Logo"/>
      </div>
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input type="text" placeholder="Start your search" className=" flex-grow pl-5 bg-transparent outline-none text-gray-600 placeholder-gray-400" />
        <MagnifyingGlassIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>


      <div className='flex items-center justify-end space-x-4 text-gray-500'>
        <p className='hidden md:inline cursor-pointer'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer'/>

        <div className='flex items-center space-x-2 border-2 p-2 rounded-full'>
          <Bars3Icon className='h-6'/>
          <UserCircleIcon className='h-6'/>
        </div>
      </div>
    </header>
  );
};

export default Header;
