import React from 'react';
import { FaInstagram, FaFacebookF, FaChevronRight } from 'react-icons/fa';

function FinalSections() {
    return (
        <div className="bg-white font-sans overflow-hidden">

            <footer className="bg-[#f9fcff] pt-16 md:pt-20 lg:pt-24 pb-8 px-6 relative border-t border-gray-50">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16 items-start">

                        <div className="bg-[#ff3131] p-8 rounded-[40px] text-white shadow-2xl relative overflow-hidden group">
                            <div className="absolute -right-4 -top-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
                            <h3 className="text-2xl font-black mb-6 italic tracking-tighter">TasteNest</h3>
                            <div className="space-y-4 text-sm font-medium">
                                <p className="opacity-90">Tue – Sat: <span className="block font-black text-lg">12:00pm – 11:00pm</span></p>
                                <p className="opacity-90">Sunday: <span className="block font-black underline decoration-[#fdb714] decoration-2">Closed</span></p>
                                <div className="pt-4 border-t border-white/20 mt-4 flex items-center gap-2">
                                    <div className="w-2 h-2 bg-[#fdb714] rounded-full animate-pulse"></div>
                                    <p className="font-bold text-[10px] uppercase tracking-widest text-[#fdb714]">Top Rated Restaurant</p>
                                </div>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-8 md:gap-4 lg:gap-12">
                            <div>
                                <h4 className="text-lg font-black mb-6 text-black border-b-2 border-[#fdb714] w-fit">About</h4>
                                <ul className="space-y-3 text-gray-500 font-bold text-sm">
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Story</a></li>
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Reserve</a></li>
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Contact</a></li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-lg font-black mb-6 text-black border-b-2 border-[#fdb714] w-fit">Menu</h4>
                                <ul className="space-y-3 text-gray-500 font-bold text-sm">
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Steaks</a></li>
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Burgers</a></li>
                                    <li><a href="#" className="hover:text-[#ff3131] transition flex items-center gap-1">› Drinks</a></li>
                                </ul>
                            </div>
                        </div>

                        <div className="md:col-span-2 lg:col-span-1">
                            <h4 className="text-lg font-black mb-6">Newsletter</h4>
                            <p className="text-gray-500 text-sm font-bold mb-6 leading-snug">Subscribe for tasty updates and exclusive offers.</p>
                            <div className="relative group">
                                <input
                                    type="email"
                                    placeholder="Your Email"
                                    className="w-full p-4 pr-14 rounded-2xl border-2 border-gray-100 focus:border-[#ff3131] outline-none transition-all shadow-sm font-medium"
                                />
                                <button className="absolute right-2 top-2 bottom-2 bg-[#ff3131] text-white px-4 rounded-xl shadow-lg hover:bg-black transition-colors">
                                    <FaChevronRight />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="mt-16 lg:mt-24 pt-8 border-t border-gray-100">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                            <p className="text-gray-400 text-[10px] md:text-xs font-bold tracking-tight text-center">
                                <span className="text-[#ff3131]">© 2026 TASTENEST</span> | CRAFTED BY SHAWONETC3
                            </p>
                            <div className="flex gap-6">
                                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-gray-400 hover:text-[#ff3131] hover:shadow-md transition-all"><FaFacebookF size={16} /></a>
                                <a href="#" className="w-10 h-10 rounded-full bg-white shadow-sm border border-gray-50 flex items-center justify-center text-gray-400 hover:text-[#ff3131] hover:shadow-md transition-all"><FaInstagram size={16} /></a>
                            </div>
                        </div>
                        <div className="w-24 md:w-40 h-1.5 bg-[#fdb714] mt-8 mx-auto md:mx-0 rounded-full"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default FinalSections;