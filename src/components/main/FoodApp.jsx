import React from 'react';
import { FaStar, FaRegHeart } from 'react-icons/fa';
import { FiShoppingBag } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import kebab from "../../assets/kebab.png"
import bbq from "../../assets/bbq.png"
import biryani from "../../assets/biryani.png"
import burgers from "../../assets/burgers.png"
import chicken from "../../assets/chicken.png"
import pasta from "../../assets/pasta.png"
import nuggets from "../../assets/nuggets.png"


function FoodApp() {
    const allProducts = [
        { id: 1, title: "PASTA", price: "20.00", oldPrice: "26.00", discount: "-23%", image: pasta },
        { id: 2, title: "Butter Chicken", price: "18.00", image: chicken },
        { id: 3, title: "Biryani", price: "11.00", oldPrice: "12.50", discount: "-12%", image: biryani },
        { id: 4, title: "BBQ. Chicken & Pork", price: "15.00", oldPrice: "19.00", discount: "-21%", image: bbq, isLarge: true },
        { id: 5, title: "Nuggets Recipe", price: "18.00", image: nuggets },
        { id: 6, title: "Burgers", price: "20.00", image: burgers },
        { id: 7, title: "Seekh Kebab", price: "33.00", image: kebab }
    ];

    const renderCard = (item) => (
        <div key={item.id} className={`  bg-white rounded-2xl shadow-sm border border-gray-100 relative overflow-hidden flex group transition-all hover:shadow-md  ${item.isLarge ? 'flex-col h-full' : 'flex-col sm:flex-row h-full sm:h-[140px] lg:h-[160px]'}`}>
            <div className={`relative overflow-hidden ${item.isLarge ? 'w-full h-[250px] md:h-full' : 'w-full sm:w-[130px] lg:w-[170px] h-[180px] sm:h-full flex-shrink-0'}`}>
                <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                {item.discount && <div className="absolute top-3 left-3 bg-[#FFE100] text-black text-[10px] font-extrabold px-2 py-1 rounded z-10">⚡ {item.discount}</div>}
                <button className="absolute top-3 right-3 p-2 bg-white/90 rounded-full text-gray-400 hover:text-red-500 z-10"><FaRegHeart size={14} /></button>

                {item.isLarge && (
                    <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 px-4">
                        {[{ v: '266', l: 'Dəq' }, { v: '04', l: 'Saat' }, { v: '56', l: 'Dəq' }].map((t, i) => (
                            <div key={i} className="bg-white/95 backdrop-blur shadow-lg rounded-md py-1 px-2 min-w-[45px] text-center">
                                <div className="text-[10px] font-bold text-gray-800">{t.v}</div>
                                <div className="text-[7px] text-gray-400 uppercase font-medium">{t.l}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <div className={`p-4 flex flex-col justify-center flex-grow ${item.isLarge ? 'items-center text-center' : 'items-start'}`}>
                <div className={`flex items-center gap-0.5 mb-1 ${item.isLarge ? 'justify-center' : ''}`}>
                    {[...Array(5)].map((_, i) => <FaStar key={i} className={`text-[10px] ${i < 1 ? 'text-orange-400' : 'text-gray-200'}`} />)}
                </div>
                <h3 className="font-bold text-gray-800 text-[13px] uppercase mb-1 group-hover:text-emerald-600 line-clamp-1">{item.title}</h3>
                <div className="flex items-center gap-2">
                    <span className="text-[#FF1F1F] font-bold text-lg">${item.price}</span>
                    {item.oldPrice && <span className="text-gray-300 line-through text-xs">${item.oldPrice}</span>}
                </div>
                <div className={`mt-3 sm:mt-0 ${item.isLarge ? 'mt-4' : 'sm:absolute sm:bottom-4 sm:right-4'}`}>
                    <button className="p-2.5 bg-gray-50 text-gray-600 rounded-full hover:bg-emerald-500 hover:text-white transition-all border border-gray-100">
                        <FiShoppingBag size={16} />
                    </button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="bg-[#F9FAFB] min-h-screen p-4 md:p-8">
            <div className="max-w-7xl mx-auto">

                <div className="block sm:hidden">
                    <Swiper modules={[Pagination, Autoplay]} spaceBetween={20} slidesPerView={1} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} className="pb-10">
                        {allProducts.map((item) => <SwiperSlide key={item.id}>{renderCard(item)}</SwiperSlide>)}
                    </Swiper>
                </div>

                <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="md:order-1 lg:order-2 h-full">
                        {renderCard(allProducts[3])}
                    </div>
                    <div className="flex flex-col gap-4 md:order-2 lg:order-1">
                        {allProducts.slice(0, 3).map(item => renderCard(item))}
                    </div>
                    <div className="hidden lg:flex flex-col gap-4 order-3">
                        {allProducts.slice(4, 7).map(item => renderCard(item))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodApp;