import React, { useState } from 'react';
import { FiShoppingBag, FiMenu, FiX, FiChevronRight } from 'react-icons/fi';

import logo from "../../assets/logo.svg"

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className=" fixed top-0 left-0 w-full bg-white py-3 px-6 md:px-12 lg:px-24 flex items-center justify-between border-b border-gray-100 z-[100] shadow-sm">
                <div className="flex flex-col ">
                    <img src={logo} alt='logo' className='h-[45px] md:h-[60px] lg:h-[75px]' />
                </div>

                <ul className="hidden lg:flex space-x-8 text-[14px] font-bold text-gray-700">
                    {['Home', 'About', 'Shop', 'Contact'].map((item) => (
                        <li key={item} className="hover:text-orange-500 transition-colors cursor-pointer uppercase tracking-wider">
                            {item}
                        </li>
                    ))}
                </ul>

                <div className="flex items-center space-x-5">
                    <div className="relative cursor-pointer">
                        <FiShoppingBag size={22} className="text-gray-800" />
                        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                            0
                        </span>
                    </div>

                    <button className="hidden lg:block bg-[#fdb714] hover:bg-orange-500 text-white px-8 py-2.5 rounded font-bold text-sm transition-all shadow-md">
                        Contact
                    </button>

                    <button className="lg:hidden p-1.5 text-gray-800 border border-gray-200 rounded-md" onClick={() => setIsOpen(true)}>
                        <FiMenu size={24} />
                    </button>
                </div>

                {isOpen && (
                    <div className="fixed inset-0 z-[105] lg:hidden" onClick={() => setIsOpen(false)} />
                )}
                <div className={`fixed top-4 right-4 w-[220px] bg-white z-[110] shadow-[0_10px_40px_rgba(0,0,0,0.15)] rounded-2xl border border-gray-100 transition-all duration-300 ease-in-out lg:hidden ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0 pointer-events-none'}`}>
                    <div className="flex items-center justify-between p-4 border-b border-gray-50">
                        <span className="font-black text-base tracking-tighter">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-gray-50 rounded">
                            <FiX size={20} className="text-gray-500" />
                        </button>
                    </div>

                    <div className="flex flex-col p-3">
                        {['Home', 'About', 'Shop', 'Contact'].map((item) => (
                            <a key={item} href={`#${item.toLowerCase()}`} className="flex items-center justify-between py-3 px-3 text-gray-600 font-bold text-[13px] hover:bg-gray-50 hover:text-orange-500 rounded-lg transition-all" onClick={() => setIsOpen(false)}>
                                {item}
                                <FiChevronRight size={12} className="text-gray-300" />
                            </a>
                        ))}
                    </div>

                    <div className="p-3 pt-0">
                        <button className="w-full bg-[#fdb714] text-white py-2.5 rounded-lg font-bold text-xs shadow-sm active:scale-95 transition-transform">
                            Contact Us
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;