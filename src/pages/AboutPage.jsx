import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <div className="bg-white  pt-28 pb-20 font-sans">
            <div className="px-5 md:px-20">

                <div className="text-center mb-16">
                    <span className="text-[#ff3131] font-bold text-xs uppercase tracking-widest">About Us</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-3 mb-6">
                        Who Are <span className="text-[#ff3131]">We?</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        TasteNest is a restaurant dedicated to bringing you the finest dishes prepared with the most delicious flavors.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&fit=crop" alt="Restaurant Interior" className="rounded-3xl h-72 md:h-96 object-cover w-full shadow-xl" />
                    <div className="space-y-5">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Our Story</h2>
                        <p className="text-gray-500 leading-relaxed">
                            Starting in a small kitchen in 2019, TasteNest has grown to become one of Baku's most beloved restaurants.
                            We prepare every meal with love and treat every customer like a member of our family.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            Quality ingredients, professional chefs, and a warm atmosphere — that is the TasteNest difference.
                        </p>

                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { val: '5+', label: 'Years Experience' },
                                { val: '50k', label: 'Happy Customers' },
                                { val: '4.9', label: 'Average Rating' },
                            ].map(stat => (
                                <div key={stat.label} className="text-center bg-gray-50 rounded-2xl py-4">
                                    <p className="text-2xl font-black text-[#ff3131]">{stat.val}</p>
                                    <p className="text-xs text-gray-400 font-medium mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mb-10">
                    <h2 className="text-2xl font-black">Our Team</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { name: 'Ali Hasanov', role: 'Head Chef', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=200&fit=crop' },
                        { name: 'Nigar Muradova', role: 'Sous Chef', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop' },
                        { name: 'Tural Aliyev', role: 'Manager', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop' },
                        { name: 'Leyla Guliyeva', role: 'Pastry Chef', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&fit=crop' },
                    ].map(member => (
                        <div key={member.name} className="text-center">
                            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md" />
                            <p className="font-black text-sm">{member.name}</p>
                            <p className="text-gray-400 text-xs">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-[#ff3131] rounded-3xl py-14 px-6">
                    <h2 className="text-3xl font-black text-white mb-4">Come and Join Us</h2>
                    <p className="text-white/80 mb-8">New flavors every day, a fresh experience every time.</p>
                    <Link to="/shop" className="bg-white text-[#ff3131] px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition shadow-lg">
                        View Menu
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage