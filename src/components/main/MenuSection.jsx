import React from 'react';

function MenuSection() {
    return (
        <div className="bg-white px-5 md:px-20 py-10 md:py-20 font-sans text-black">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-12 mb-16 md:mb-20">
                    <div className="w-full lg:w-1/2">
                        <span className="text-[#ff3131] font-bold text-xs md:text-[13px] uppercase tracking-[0.2em] mb-3 md:mb-4 block">
                            About The Food Restaurant
                        </span>
                        <h2 className="text-3xl md:text-[52px] font-black leading-[1.1] tracking-tight">
                            New Ground with <br className="hidden md:block" /> Dishes to be Enjoyed
                        </h2>
                    </div>
                    <div className="w-full lg:w-1/2 lg:pl-10 text-gray-500">
                        <p className="text-sm md:text-[15px] leading-relaxed mb-6 md:mb-8 max-w-md">
                            Nisl quam vestibulum ac quam nec odio eleme aucan ligula. Orci varius nat oque pena tibus et urient monte nascete ridiculus mus.
                        </p>
                        <div className="flex items-center space-x-4">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
                                alt="CEO"
                                className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover grayscale"
                            />
                            <div>
                                <h4 className="font-bold text-black text-sm md:text-base leading-none">Willimes James</h4>
                                <p className="text-[10px] md:text-xs mt-1 font-medium italic">Director and COO</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {[
                        { title: "Restaurant", img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600", offset: "" },
                        { title: "Coctail Bar", img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=600", offset: "lg:mt-12" },
                        { title: "Private Dining", img: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=600", offset: "" }
                    ].map((card, i) => (
                        <div key={i} className={`relative group rounded-3xl md:rounded-[30px] overflow-hidden bg-black aspect-4/5 ${card.offset} shadow-xl md:shadow-2xl`}>
                            <img src={card.img} className="w-full h-full object-cover opacity-80 group-hover:scale-110 transition duration-1000" alt={card.title} />
                            <div className="absolute inset-4 border border-white/20 rounded-[20px] md:rounded-3xl pointer-events-none group-hover:border-[#fdb714]/50 transition duration-500"></div>
                            <div className="absolute bottom-6 left-0 w-full px-6">
                                <div className="bg-[#fdb714] py-3 rounded-xl text-center font-bold text-black text-xs md:text-sm uppercase tracking-widest transition duration-500 shadow-xl">
                                    {card.title}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>


            </div>
        </div>
    );
};

export default MenuSection;