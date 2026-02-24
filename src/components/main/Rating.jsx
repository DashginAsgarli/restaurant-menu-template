import React from 'react';
import { FaStar } from 'react-icons/fa';

function Rating() {
    return (
        <div className="bg-white min-h-screen font-sans text-gray-800">
            <main className="max-w-6xl mx-auto px-4 py-8 space-y-16">

                <section className="py-6 md:py-10">
                    <div className="relative bg-white border-2 border-gray-50 rounded-[35px] md:rounded-[45px] shadow-xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-5xl mx-auto overflow-hidden">
                        <div className="absolute top-0 left-0 w-1.5 h-full bg-[#fdb714]"></div>

                        <div className="text-center md:w-1/3 md:border-r border-gray-100 md:pr-8 w-full">
                            <h2 className="text-5xl md:text-6xl font-black text-[#ff3131] mb-1 tracking-tighter">4.9</h2>
                            <div className="flex justify-center text-yellow-400 mb-2">
                                {[...Array(5)].map((_, i) => <FaStar key={i} size={14} />)}
                            </div>
                            <p className="text-gray-400 text-[9px] md:text-[10px] font-bold uppercase tracking-widest mb-4">5000+ Reviews</p>

                            <div className="space-y-1 max-w-[180px] mx-auto">
                                {[95, 5, 0, 0, 0].map((percent, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <span className="text-[9px] font-bold text-gray-500 w-2">{5 - i}</span>
                                        <div className="w-full bg-gray-50 h-1.5 rounded-full overflow-hidden">
                                            <div className="bg-[#ff3131] h-full rounded-full" style={{ width: `${percent}%` }}></div>
                                        </div>
                                        <span className="text-[8px] font-bold text-gray-400 w-6">{percent}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="md:w-2/3 w-full text-center md:text-left">
                            <div className="hidden md:block text-[#fdb714] opacity-20 mb-[-10px] text-4xl font-serif">"</div>

                            <p className="text-gray-600 italic text-sm md:text-[13px] lg:text-base leading-snug md:leading-relaxed mb-5">
                                "Botanica rice crackers are a staple in my pantry. They are a healthier alternative to traditional crackers and chips, but still satisfy my craving for something spicy and crunchy. Chilli garlic flavor is my personal favorite - it's so delicious!"
                            </p>

                            <div className="flex items-center justify-center md:justify-between border-t border-gray-50 pt-4">
                                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-2">
                                    <span className="text-sm font-black text-black">Jennifer</span>
                                    <span className="hidden md:block text-gray-300">|</span>
                                    <span className="text-xs text-gray-400 font-medium">Verified Customer from California</span>
                                </div>

                                <div className="hidden lg:flex items-center gap-1 text-[#22c55e] text-[10px] font-bold uppercase">
                                    <div className="w-4 h-4 bg-[#22c55e] rounded-full flex items-center justify-center">
                                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={4} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    Verified
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>
        </div>
    );
};

export default Rating;