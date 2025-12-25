import React, { useEffect, useRef } from 'react'; 
import { Menu, Search, Calendar, Home as HomeIcon, User, Bookmark } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const promoBanners = [
    { id: 2, title: 'Special Offer: 20% off on Massage', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=500&q=80' },
    { id: 1, title: 'Find the best hair stylist for you.', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=500&q=80' }, 
    { id: 3, title: 'New Nail Art Collection', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=500&q=80' },
];

const categories = ['Recommended', 'Packages', 'Professionals'];

const services = [
    { id: 1, name: 'Haircut', duration: '45 mins', price: '$90', image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?w=300&q=80' },
    { id: 2, name: 'Massage', duration: '60 mins', price: '$60', image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=300&q=80' },
    { id: 3, name: 'Manicure', duration: '30 mins', price: '$35', image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=300&q=80' },
];

const Home = () => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (scrollRef.current) {
            setTimeout(() => {
                const container = scrollRef.current;
                if (container) {
                    const scrollAmount = container.offsetWidth * 0.75;
                    container.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                }
            }, 100);
        }
    }, []);

    return (
        <div className="min-h-screen bg-white pb-20 relative">

            {/* Header & Search */}
            <div className="px-6 pt-6 pb-4 bg-white sticky top-0 z-10">
                <h1 className="text-center text-xl font-bold text-dark font-sans mb-6 md:hidden">MeTime</h1>

                <div className="hidden md:flex items-center justify-between mb-6 max-w-[1024px] mx-auto w-full">
                    <h1 className="text-2xl font-bold text-dark font-sans">MeTime</h1>
                    <div className="flex gap-8 text-grey font-medium">
                        <a href="#" className="text-primary">Home</a>
                        <a href="#" className="hover:text-primary">Services</a>
                        <a href="#" className="hover:text-primary">Appointments</a>
                        <a href="#" className="hover:text-primary">Profile</a>
                    </div>
                </div>

                <div className="max-w-[1024px] mx-auto w-full">
                    <div className="flex items-center gap-4 mb-4 md:mb-6">
                        <Menu className="text-dark md:hidden" size={28} />
                        <h2 className="text-2xl md:text-3xl font-medium text-dark">
                            Hello, <span className="text-primary font-bold">Carol</span>
                        </h2>
                    </div>

                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full bg-surface rounded-2xl py-4 pl-12 pr-4 text-dark placeholder-gray-400 focus:outline-none"
                        />
                    </div>
                </div>
            </div>

            <div className="max-w-[1024px] mx-auto w-full">

                <div
                    ref={scrollRef}
                    className="my-8 overflow-x-auto no-scrollbar snap-x snap-mandatory flex gap-4 px-6 md:px-0"
                >
                    <div className="shrink-0 w-[5%] md:hidden"></div>

                    {promoBanners.map((banner, index) => (
                        <div
                            key={banner.id}
                            onClick={() => navigate('/salon-details')} 
                            className={`snap-center shrink-0 relative rounded-xl overflow-hidden w-[80%] md:w-[60%] aspect-[16/9] transition-all duration-300 cursor-pointer`} 
                        >
                            <img src={banner.image} alt={banner.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                                <h3 className="text-white text-2xl md:text-3xl font-bold max-w-xs">{banner.title}</h3>
                            </div>
                        </div>
                    ))}

                    <div className="shrink-0 w-[5%] md:hidden"></div>
                </div>

                {/* Categories */}
                <div className="flex gap-3 overflow-x-auto no-scrollbar px-6 md:px-0 mb-8">
                    {categories.map((cat, index) => (
                        <button
                            key={cat}
                            className={`px-6 py-2 rounded-xl border-2 border-gray-400 font-medium whitespace-nowrap transition-colors
                                ${index === 0 ? 'bg-secondary text-gray-500 border-none' : 'bg-white text-gray-500 hover:bg-secondary hover:border-none'}`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Upcoming Appointment */}
                <div className="px-6 md:px-0 mb-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Upcoming</h3>
                    <div className="bg-secondary/30 rounded-xl flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className="bg-primary w-20 h-20 rounded-xl flex flex-col items-center justify-center text-white font-bold">
                                <span className="text-xl leading-none">19</span>
                                <span className="text-sm leading-none">Oct</span>
                            </div>
                            <div>
                                <h4 className="text-dark font-bold text-sm">Basic Pedicure</h4>
                                <p className="text-grey text-sm mb-1">with Paty</p>
                                <p className="text-dark font-bold text-sm">Tuesday, 04:30pm</p>
                            </div>
                        </div>
                        <button className="text-dark font-bold text-sm px-4 py-2">
                            Edit
                        </button>
                    </div>
                </div>

                {/* Services Carousel */}
                <div className="pl-6 md:px-0 mb-8">
                    <h3 className="text-xl font-bold text-dark mb-4">Services</h3>
                    <div className="flex gap-4 overflow-x-auto no-scrollbar pb-4">
                        {services.map((service) => (
                            <div key={service.id} className="shrink-0 w-48 bg-gray-50 rounded-xl overflow-hidden shadow-sm border border-gray-100">
                                <div className="h-32 w-full">
                                    <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
                                </div>
                                <div className="p-4">
                                    <h4 className="text-dark font-bold mb-1">{service.name}</h4>
                                    <div className="flex items-center text-grey text-xs mb-2">
                                        <Calendar size={14} className="mr-1" /> {service.duration}
                                    </div>
                                    <p className="text-dark font-bold">{service.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;