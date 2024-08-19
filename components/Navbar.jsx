'use client';

import Link from 'next/link';
import { CiSearch, CiShoppingCart, CiHeart, CiUser } from 'react-icons/ci';

import { Button } from './ui/button';

export default function Navbar() {
  const isAuth = true;

  return (
    <nav className="flex justify-between items-center md:px-16 sm:px-8 px-2 h-20 gap-8">
      <div className="font-semibold text-xl">
        <Link href="/">MyShop</Link>
      </div>
      <div className="w-3/5">
        <div className="flex justify-between px-6 py-2 rounded-md items-center bg-[#F5F5F5] ">
          {/* TODO Search functionality */}
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-[95%]"
          />
          <CiSearch className="text-black" size={24} />
        </div>
      </div>
      <div className="md:w-1/5 w-auto">
        <div className="flex justify-center items-center md:gap-8 gap-4">
          <div className="relative">
            {/* TODO Cart Functionality */}
            <Button variant="icon" size="icon" className="absolute right-0">
              0
            </Button>
            <CiShoppingCart
              color="black"
              size={40}
              className="cursor-pointer"
            />
          </div>
          {/* TODO Authentication System */}
          {isAuth ? (
            <div className="flex justify-center items-center md:gap-8 gap-4">
              {/* TODO Redirection to whislist page */}
              <CiHeart color="black" size={32} className="cursor-pointer" />
              {/* TODO Dropdown for user options */}
              <Button variant="icon" size="icon" className="w-10 h-10">
                <CiUser color="white" size={28} className="cursor-pointer" />
              </Button>
            </div>
          ) : (
            <Button variant="secondary" size="lg">
              Login
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}
