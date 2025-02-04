"use client"
import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import { FaSearch, FaShoppingCart } from 'react-icons/fa';
import { useSelector } from "react-redux";
import { RootState } from "@/app/redux/Store";
import { FiShoppingCart } from "react-icons/fi";
import { FiUser } from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const item = useSelector((state: RootState) => state.cart);

  const toggleMenu = () => setIsOpen(!isOpen);
  const handleSearchChange = (e: { target: { value: SetStateAction<string>; }; }) => setSearchTerm(e.target.value);

  return (
    <nav className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <Link href="/"> Online-Solution Shop</Link>
        </div>

        {/* Navbar Links for Desktop */}
        <div className="hidden md:flex space-x-8 items-center">
          <Link href="/" className="text-xl hover:text-gray-400 transition duration-200">Home</Link>
          <Link href="/products" className="text-xl hover:text-gray-400 transition duration-200">Products</Link>
          <Link href="/contact" className="text-xl hover:text-gray-400 transition duration-200">Contact</Link>

          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-lg text-black w-72"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </button>
          </div>

          {/* Cart Icon */}
          </div>
        <Link href="/cart"><FiShoppingCart className="text-2xl cursor-pointer mr-2" /></Link>
        {item.length}
        <FiUser className="text-2xl cursor-pointer" />
        <FiShoppingCart size={24} color="black" />
        

        {/* Mobile Menu Button */}
        <button onClick={toggleMenu} className="md:hidden text-2xl">
          &#9776;
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 px-4">
          <Link href="/" className="block text-xl hover:text-gray-400 transition duration-200">Home</Link>
          <Link href="/products" className="block text-xl hover:text-gray-400 transition duration-200">Products</Link>
          <Link href="/contact" className="block text-xl hover:text-gray-400 transition duration-200">Contact</Link>

          {/* Search Bar for Mobile */}
          <div className="relative">
            <input
              type="text"
              className="px-4 py-2 rounded-lg text-black w-full"
              placeholder="Search Products..."
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400">
              <FaSearch />
            </button>
          </div>

          {/* Cart Icon for Mobile */}
          <Link href="/" className="relative">
            <FaShoppingCart className="text-2xl hover:text-gray-400 transition duration-200" />
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-2 py-1">3</span>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;