import React from 'react'
import { Link } from 'react-router-dom'

function AboutPage() {
    return (
        <div className="bg-white min-h-screen pt-24 pb-20 font-sans">
            <div className="max-w-5xl mx-auto px-6 md:px-12">

                <div className="text-center mb-16">
                    <span className="text-[#ff3131] font-bold text-xs uppercase tracking-widest">Haqqımızda</span>
                    <h1 className="text-4xl md:text-6xl font-black tracking-tight mt-3 mb-6">
                        Biz Kim<span className="text-[#ff3131]">iz?</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        TasteNest — ən yaxşı yeməkləri ən dadlı formada sizə çatdırmaq üçün yaradılmış restorandır.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
                    <img
                        src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&fit=crop"
                        alt="Restaurant"
                        className="rounded-3xl h-72 md:h-96 object-cover w-full shadow-xl"
                    />
                    <div className="space-y-5">
                        <h2 className="text-2xl md:text-3xl font-black tracking-tight">Hekayəmiz</h2>
                        <p className="text-gray-500 leading-relaxed">
                            2019-cu ildə kiçik bir mətbəxdə başlayan TasteNest, bu gün Bakının ən sevilən restoranlarından birinə çevrilib.
                            Hər yeməyimizi sevgi ilə hazırlayır, hər müştəriyə ailəmiz kimi yanaşırıq.
                        </p>
                        <p className="text-gray-500 leading-relaxed">
                            Keyfiyyətli ingredientlər, peşəkar aşpazlar və isti atmosfer — bax budur TasteNest fərqi.
                        </p>
                        <div className="grid grid-cols-3 gap-4 pt-4">
                            {[
                                { val: '5+', label: 'İl təcrübə' },
                                { val: '50k', label: 'Xoşbəxt müştəri' },
                                { val: '4.9', label: 'Ortalama reytinq' },
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
                    <h2 className="text-2xl font-black">Komandamız</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
                    {[
                        { name: 'Əli Həsənov', role: 'Baş aşpaz', img: 'https://images.unsplash.com/photo-1607631568010-a87245c0daf8?w=200&fit=crop' },
                        { name: 'Nigar Muradova', role: 'Sous Chef', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop' },
                        { name: 'Tural Əliyev', role: 'Menencer', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop' },
                        { name: 'Leyla Quliyeva', role: 'Pastissier', img: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&fit=crop' },
                    ].map(member => (
                        <div key={member.name} className="text-center">
                            <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mx-auto mb-3 shadow-md" />
                            <p className="font-black text-sm">{member.name}</p>
                            <p className="text-gray-400 text-xs">{member.role}</p>
                        </div>
                    ))}
                </div>

                <div className="text-center bg-[#ff3131] rounded-3xl py-14 px-6">
                    <h2 className="text-3xl font-black text-white mb-4">Gəlin bizə qoşulun</h2>
                    <p className="text-white/80 mb-8">Hər gün yeni dadlar, hər dəfə yeni təcrübə</p>
                    <Link to="/shop" className="bg-white text-[#ff3131] px-10 py-4 rounded-xl font-black hover:bg-gray-100 transition shadow-lg">
                        Menyuya bax
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default AboutPage