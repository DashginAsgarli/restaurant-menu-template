import React from 'react';

function DealAndEvents() {
    return (
        <div className="bg-white font-sans py-8 md:py-12 lg:py-20">
            <div className="container mx-auto px-6">
                <section className="max-w-7xl mx-auto border-[3px] border-[#fdb714] rounded-[35px] md:rounded-[50px] p-4 md:p-6 lg:p-8 flex flex-col md:flex-row items-center gap-6 lg:gap-12 bg-white">
                    <div className="w-full md:w-1/2 grid grid-cols-2 gap-2 md:gap-3 lg:gap-4">
                        <img src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=400&fit=crop" className="rounded-tl-[25px] md:rounded-tl-[40px] rounded-br-[25px] md:rounded-br-[40px] h-24 md:h-32 lg:h-44 w-full object-cover shadow-md" alt="dining 1" />
                        <img src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=400&fit=crop" className="rounded-tr-[25px] md:rounded-tr-[40px] rounded-bl-[25px] md:rounded-bl-[40px] h-24 md:h-32 lg:h-44 w-full object-cover shadow-md" alt="dining 2" />
                        <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=400&fit=crop" className="rounded-bl-[25px] md:rounded-bl-[40px] rounded-tr-[25px] md:rounded-tr-[40px] h-24 md:h-32 lg:h-44 w-full object-cover shadow-md" alt="dining 3" />
                        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=400&fit=crop" className="rounded-br-[25px] md:rounded-br-[40px] rounded-tl-[25px] md:rounded-tl-[40px] h-24 md:h-32 lg:h-44 w-full object-cover shadow-md" alt="dining 4" />
                    </div>
                    <div className="w-full md:w-1/2 text-left px-1 md:px-0">
                        <h2 className="text-2xl md:text-3xl lg:text-5xl font-black text-black mb-2 md:mb-3 lg:mb-6 tracking-tighter leading-tight">
                            Private Dining and <br className="hidden lg:block" /> Events
                        </h2>

                        <p className="text-gray-500 text-[13px] md:text-xs lg:text-base font-medium mb-4 md:mb-5 lg:mb-8 leading-snug lg:leading-relaxed max-w-md">
                            With many private dining spaces, M is the perfect place to host your event or gathering. We provide top-notch service.
                        </p>

                        <button className="bg-[#ff3131] text-white px-6 md:px-5 lg:px-10 py-2.5 md:py-2.5 lg:py-4 rounded-xl font-black shadow-[3px_3px_0px_#000] lg:shadow-[5px_5px_0px_#000] mb-4 md:mb-2 hover:shadow-none transition-all transform hover:translate-x-1 hover:translate-y-1 text-xs lg:text-base">
                            Enquire Now
                        </button>

                        <div className="block mt-1 md:mt-2 text-xs lg:text-base">
                            <span className="font-black text-black">Booking: </span>
                            <span className="font-bold text-gray-700">+44 1298 123 987</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default DealAndEvents;