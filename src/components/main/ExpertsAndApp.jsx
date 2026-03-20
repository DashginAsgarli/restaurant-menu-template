import React from 'react';

import sponsor1 from "../../assets/sponsor1.svg"
import sponsor2 from "../../assets/sponsor2.svg"
import sponsor3 from "../../assets/sponsor3.svg"
import sponsor4 from "../../assets/sponsor4.svg"
import sponsor5 from "../../assets/sponsor5.svg"
import sponsor6 from "../../assets/sponsor6.svg"

function AboutAndSponsors() {
    const sponsors = [
        { name: "Organic Food", img: sponsor1 },
        { name: "Health Food", img: sponsor2 },
        { name: "Vegetarian", img: sponsor3 },
        { name: "Vegan", img: sponsor4 },
        { name: "Natural", img: sponsor5 },
        { name: "Natural", img: sponsor6 }
    ];
    const menuData = [
        {
            category: "Breakfast",
            items: [
                { name: "Dasi Breakfast", price: "$12.00", desc: "Sausage, three rashers of streaky bacon, two fried eggs" },
                { name: "Three Meat Skillet", price: "$9.00", desc: "Hickory house bacon, sausage, ham, cheddar cheese" },
                { name: "Breakfast Bowl", price: "$14.00", desc: "Three eggs, tater tots, choice of bacon or sausage, shredded cheese" }
            ]
        },
        {
            category: "Lunch",
            featured: true,
            items: [
                { name: "Potato Skins", price: "$9.00", desc: "Sour cream, bacon, cheddar cheese, olive oil" },
                { name: "Apple Pie Pancakes", price: "$9.00", desc: "Spiced batter with butter and dunk them in some homemade vanilla" },
                { name: "Sweet Cream Waffle", price: "$9.00", desc: "Refrigerated; 2 Eggs; Baking & Spices; 2 cups" },
                { name: "Caesar Wrap", price: "$9.00", desc: "This classic handheld with tender chicken, Parmesan cheese and chopped" }
            ]
        },
        {
            category: "Dinner",
            items: [
                { name: "Beef Lasagna Food", price: "$9.00", desc: "2 olive oil, plus a little for the dish; 750g lean beef mince; 90g pack prosciutto" },
                { name: "Chicken Mayo Roll", price: "$9.00", desc: "Cook the chicken in a grill pan, once the chicken is cooked place chicken" },
                { name: "Mutton Curry", price: "$9.00", desc: "Mutton Curry" }
            ]
        }
    ];

    return (
        <div className="bg-[#fcfcfc] font-sans overflow-hidden">
            <section className="py-12 bg-white border-b border-gray-50">
                <div className="container mx-auto ">
                    <h3 className="text-center text-lg font-black text-black mb-10 uppercase tracking-tighter">
                        Highly Trusted Sponsor
                    </h3>
                    <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 lg:gap-16">
                        {sponsors.map((src, i) => (
                            <img key={i} src={src.img} alt={src.name} className="h-7 md:h-12 lg:h-16 " />
                        ))}
                    </div>
                </div>
            </section>

            <section className="py-20 px-6">
                <div className="container mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-black text-black mb-2 tracking-tighter">
                            Delicious Menus
                        </h2>
                        <div className="w-20 h-1 bg-[#fdb714] mx-auto"></div>
                    </div>

                    <div className="flex flex-row items-stretch gap-4 max-w-6xl mx-auto  overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-3 md:overflow-visible">

                        {menuData.map((menu, idx) => (
                            <div key={idx} className={` min-w-[85%] sm:min-w-[70%] snap-center  md:min-w-full md:w-full  bg-white rounded-[35px] shadow-lg p-5 lg:p-8 transition-all duration-300 flex flex-col ${menu.featured
                                ? 'z-10 md:scale-105 border-t-[6px] border-[#fdb714] shadow-2xl'
                                : 'z-0 md:scale-95 border-t border-gray-100'
                                }`}>
                                <h3 className="text-xl md:text-lg lg:text-2xl font-black text-black mb-4 tracking-tight">
                                    {menu.category}
                                </h3>

                                <div className="space-y-3 md:space-y-4 lg:space-y-6 grow">
                                    {menu.items.map((item, i) => (
                                        <div key={i} className="group">
                                            <div className="flex justify-between items-baseline gap-2 mb-0.5">
                                                <h4 className="font-bold text-sm md:text-[13px] lg:text-base text-black group-hover:text-[#ff3131] transition-colors leading-tight">
                                                    {item.name}
                                                </h4>
                                                <span className="text-[#ff3131] font-black text-xs md:text-[11px] lg:text-sm whitespace-nowrap">
                                                    {item.price}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-[10px] md:text-[10px] lg:text-[11px] font-medium leading-tight">
                                                {item.desc}
                                            </p>

                                            {i !== menu.items.length - 1 && (
                                                <div className="mt-3 md:mt-2 lg:mt-5 border-b border-gray-50"></div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default AboutAndSponsors;