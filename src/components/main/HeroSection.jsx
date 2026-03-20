import React, { useState, useEffect } from 'react';
import { FiPlay, FiShoppingCart } from 'react-icons/fi';
import imgFon1 from "../../assets/imgFon1.png";
import imgFon2 from "../../assets/imgFon2.png";;
import imgFon3 from "../../assets/imgFon3.png";;
import imgFon4 from "../../assets/imgFon4.png";;

const slides = [
    {
        id: 0,
        title: "The Perfect Space to Enjoy Fantastic Food",
        desc: "Festive dining at Farthings where we are strong believers in using the very best produce",
        img: imgFon1,
        special: "Sicilian Pizza",
        btnText: "See Our Menus"
    },
    {
        id: 1,
        title: "Kings Burger",
        subTitle: "Fastest Delivery & Easy Pickup",
        desc: "Good food starts with good ingredients. We only bring you the best.",
        img: imgFon2,
        btnText: "View Our Menu"
    },
    {
        id: 2,
        title: "CHICKEN BURGER",
        subTitle: "Crispy, Every Bite Taste",
        desc: "Limited Offer / $5",
        img: imgFon3,
        btnText: "Order Now"
    },
    {
        id: 3,
        title: "The Best Food Collection 2024",
        subTitle: "Starting at $24.00",
        desc: "Exclusive offer -35% off this week",
        img: imgFon4,
        btnText: "Order Now"
    }
];

function HeroSection() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="mt-10 lg:mt-20 relative w-full  h-112 md:h-124 lg:h-screen overflow-hidden bg-black">
            {slides.map((slide, index) => (
                <div key={slide.id} className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out flex items-center ${index === current ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                    style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3)), url(${slide.img})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

                    <div className="container mx-auto px-6 md:px-10">
                        <div className="max-w-xl md:max-w-2xl lg:max-w-3xl text-white space-y-4 lg:space-y-6 animate-fadeIn">
                            {slide.subTitle && (
                                <h4 className="text-red-500 font-bold uppercase tracking-[2px] lg:tracking-[4px] text-[10px] lg:text-base">
                                    {slide.subTitle}
                                </h4>
                            )}
                            <h1 className="text-3xl md:text-4xl lg:text-7xl font-black leading-tight uppercase">
                                {slide.title}
                            </h1>

                            <p className="text-xs md:text-sm lg:text-xl opacity-90 max-w-xs md:max-w-xl font-light line-clamp-2 lg:line-clamp-none">
                                {slide.desc}
                            </p>

                            <div className="flex flex-row items-center gap-4 lg:gap-6 pt-2 lg:pt-4">
                                <button className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 lg:px-10 lg:py-4 rounded-full text-[10px] lg:text-base font-bold transition-all flex items-center gap-2">
                                    {slide.id !== 0 && <FiShoppingCart className="scale-75 lg:scale-100" />} {slide.btnText}
                                </button>

                                {slide.id === 0 && (
                                    <button className="flex items-center gap-2 lg:gap-3 group">
                                        <div className="w-8 h-8 lg:w-14 lg:h-14 border-2 border-white rounded-full flex items-center justify-center group-hover:bg-red-600 group-hover:border-red-600 transition-all">
                                            <FiPlay fill="white" size={10} className="lg:w-4 lg:h-4" />
                                        </div>
                                        <span className="font-bold tracking-widest text-[9px] lg:text-sm uppercase">WATCH VIDEO</span>
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="absolute bottom-7 lg:bottom-8 left-6 md:left-20 lg:left-20 flex gap-2 lg:gap-3 z-30">
                {slides.map((_, index) => (
                    <button key={index} onClick={() => setCurrent(index)} className={`h-1 lg:h-2 rounded-full transition-all duration-300 ${current === index ? "w-8 lg:w-12 bg-red-600" : "w-3 lg:w-4 bg-white/40"}`} />
                ))}
            </div>

        </section>
    );
};

export default HeroSection;