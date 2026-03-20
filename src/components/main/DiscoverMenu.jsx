import React from 'react';
import discover1 from "../../assets/discover1.png"
import discover2 from "../../assets/discover2.png"

const DiscoverMenu = () => {
    const categories = [
        {
            title: "Steaks & BBQ",
            desc: "Canonical classics to obscure tiki drinks",
            price: "$120",
            unit: "person",
            img: discover1,
        },
        {
            title: "Cocktails",
            desc: "Canonical classics to obscure tiki drinks",
            price: "$120",
            unit: "person",
            img: discover2,
        }
    ];

    return (
        <div className="bg-white px-5 md:px-20 pt-5 pb-10 md:py-10 font-sans overflow-hidden">
            <div>
                <div className="text-center">
                    <h2 className="text-3xl md:text-4xl font-black text-black mb-2 tracking-tight">
                        Discover Menu
                    </h2>
                    <div className="w-12 h-1 bg-[#fdb714] mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6 lg:gap-10">
                    {categories.map((item, idx) => (
                        <div key={idx} className="group relative h-50 md:h-56 lg:h-70 rounded-2xl bg-black flex items-center ">
                            <div className="absolute inset-0 overflow-hidden rounded-2xl">
                                <img src={item.img} alt={item.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-50 group-hover:scale-105 transition-all duration-700 rounded-3xl" />
                                <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/40 to-transparent"></div>
                            </div>

                            <div className="relative z-10 pl-6 md:pl-10 pr-4">
                                <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight uppercase">
                                    {item.title}
                                </h3>
                                <p className="text-gray-300 text-xs md:text-sm font-light max-w-45 md:max-w-56 leading-snug">
                                    {item.desc}
                                </p>
                            </div>

                            <div className="absolute -bottom-4 left-6 md:left-10 transition-transform duration-500 group-hover:-translate-y-1">
                                <div className="w-14 h-14 md:w-20 md:h-20 bg-[#fdb714] rounded-full flex flex-col items-center justify-center shadow-lg border-4 border-white">
                                    <span className="text-black font-black text-xs md:text-sm leading-none">
                                        {item.price}
                                    </span>
                                    <span className="text-black font-bold text-[7px] md:text-[8px] uppercase">
                                        /{item.unit}
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DiscoverMenu;