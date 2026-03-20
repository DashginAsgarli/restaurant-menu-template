import React from 'react';
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import sale from "../../assets/sale.png"

function SpecialOfferBanner() {
    return (
        <div className="px-5 md:px-20 py-10 md:py-10">
            <div className="w-full bg-[#FFD95A] rounded-3xl overflow-hidden relative flex flex-col lg:flex-row items-stretch min-h-86 lg:min-h-100 shadow-2xl">

                <div className="bg-white w-full lg:w-[50%] p-8 md:p-10 lg:p-14 flex flex-col justify-center z-10 relative" style={{ clipPath: typeof window !== 'undefined' && window.innerWidth > 1024 ? 'polygon(0 0, 100% 0, 92% 100%, 0% 100%)' : 'none' }}>
                    <div className="space-y-4">
                        <h4 className="text-[#2D935D] font-serif italic text-lg md:text-xl">Special Offer</h4>

                        <h2 className="text-[#1A1A1A] font-black text-2xl md:text-3xl lg:text-4xl leading-tight uppercase tracking-tighter">
                            Burgers With <br className="hidden md:block" />
                            Onion Dip and <br className="hidden md:block" />
                            Potato Chips
                        </h2>

                        <p className="text-gray-500 text-[10px] md:text-xs leading-relaxed max-w-sm uppercase tracking-widest border-l-2 border-[#FFD95A] pl-4">
                            <span className="font-bold text-gray-800">Per Serving:</span> 510 calories; fat 26g; saturated fat 10g;
                            cholesterol 88mg; protein 31g; carbohydrates 36g.
                        </p>

                        <div className="flex flex-wrap items-center gap-6 pt-3">
                            <button className="bg-[#FF3131] text-white px-6 py-3 md:px-7 md:py-3.5 rounded-full font-bold flex items-center gap-3 hover:bg-red-600 transition-all shadow-lg group text-sm">
                                ORDER NOW
                                <span className="bg-white text-red-500 rounded-full p-1 group-hover:translate-x-1 transition-transform">
                                    <HiOutlineArrowNarrowRight size={18} />
                                </span>
                            </button>

                            <div className="flex flex-col">
                                <span className="text-gray-400 line-through text-sm leading-none">$25.00</span>
                                <span className="text-[#FF9100] text-3xl md:text-4xl font-black leading-none">$12.99</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex-1 relative flex justify-center items-center p-6 lg:p-0">
                    <div className="absolute top-6 left-6 md:top-8 md:left-8 z-20 scale-90">
                        <div className="relative w-20 h-20 md:w-22 md:h-22 flex items-center justify-center bg-orange-100/20 rounded-full backdrop-blur-sm">
                            <svg className="absolute w-full h-full animate-[spin_10s_linear_infinite]" viewBox="0 0 100 100">
                                <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                                <text className="text-[11px] font-black fill-orange-800 uppercase">
                                    <textPath xlinkHref="#circlePath">Get Up To • 50% OFF • Get Up To • </textPath>
                                </text>
                            </svg>
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-black text-orange-800 leading-none">50%</span>
                                <span className="text-[10px] font-bold text-orange-800">OFF</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative z-10 transition-transform hover:scale-105 duration-700">
                        <img src={sale} alt="Delicious Burger" className="w-62 sm:w-[320px] md:w-100 lg:w-114 drop-shadow-[0_20px_20px_rgba(0,0,0,0.3)]" />
                    </div>

                    <div className="absolute top-8 right-10 text-center -rotate-12 hidden lg:block">
                        <p className="font-serif italic text-orange-900 text-lg md:text-2xl leading-tight drop-shadow-sm">
                            Free Home <br /> Delivery
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SpecialOfferBanner;