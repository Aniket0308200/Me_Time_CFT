import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const SlotSelection = () => {
    const navigate = useNavigate();

    const [selectedDate, setSelectedDate] = useState(19);
    const [selectedSlot, setSelectedSlot] = useState(3); 

    const dates = [
        { day: 17, week: 'Sun', disabled: true },
        { day: 18, week: 'Mon', disabled: false },
        { day: 19, week: 'Tue', disabled: false },
        { day: 20, week: 'Wed', disabled: false },
        { day: 21, week: 'Thu', disabled: false },
        { day: 22, week: 'Fri', disabled: false },
    ];

    const slots = [
        { id: 1, time: '10:00 am', professional: 'with Jordan', disabled: true }, 
        { id: 2, time: '10:30 am', professional: 'with Anna', disabled: false },
        { id: 3, time: '04:30 pm', professional: 'with Paty', disabled: false },
        { id: 4, time: '06:00 pm', professional: 'with Jordan', disabled: false },
    ];

    return (
        <div className="min-h-screen bg-white flex flex-col items-center pt-6 pb-6 relative">

            <div className="w-full max-w-lg px-6 flex flex-col h-full min-h-[90vh]">

                <div className="flex items-center justify-between mb-8 relative">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
                    <div className="w-8"></div>
                </div>

                <div className="w-full text-center mb-10 px-4">
                    <h2 className="text-2xl font-medium text-dark leading-snug">
                        Select a date to see the <br />
                        <span className="text-primary font-bold">next</span> slot available for you
                    </h2>
                </div>

                {/* Month Selector */}
                <div className="w-full mb-6 flex items-center gap-1 cursor-pointer">
                    <span className="text-lg font-medium">October <span className="text-primary/70 ">2023</span></span>
                    <ChevronRight size={18} className="text-primary/70 mt-1" />
                </div>

                {/* Date Selection */}
                <div className="w-full mb-8">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <span className="text-dark font-bold">Day</span>
                    </div>

                    {/* Horizontal Scroll Dates */}
                    <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                        {dates.map((item) => {
                            const isSelected = selectedDate === item.day;
                            return (
                                <button
                                    key={item.day}
                                    disabled={item.disabled}
                                    onClick={() => setSelectedDate(item.day)}
                                    className={`shrink-0 flex flex-col items-center justify-center bg-white border-gray-300 w-16 h-20 rounded-xl border transition-all duration-200
                                ${item.disabled
                                            ? 'opacity-40 bg-gray-50 border-transparent cursor-not-allowed'
                                            : isSelected
                                                ? 'border-primary/50 bg-white text-primary shadow-sm ring-1 ring-primary/20'
                                                : 'border-transparent bg-gray-50 text-grey hover:bg-gray-100'
                                        }`}
                                >
                                    <span className={`text-xl font-bold mb-1 ${isSelected && !item.disabled ? 'text-primary' : 'text-dark'}`}>
                                        {item.day}
                                    </span>
                                    <span className="text-xs font-medium">{item.week}</span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Availability (With Names) */}
                <div className="w-full mb-auto">
                    <div className="flex items-center justify-between mb-4 px-1">
                        <span className="text-dark font-bold">Availability</span>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {slots.map((slot) => {
                            const isSelected = selectedSlot === slot.id;

                            return (
                                <button
                                    key={slot.id}
                                    disabled={slot.disabled}
                                    onClick={() => setSelectedSlot(slot.id)}
                                    className={`py-3 px-2 rounded-xl border transition-all duration-200 flex flex-col items-center justify-center gap-1
                                ${slot.disabled
                                            ? 'opacity-40 bg-gray-50 border-gray-100 cursor-not-allowed text-gray-400'
                                            : isSelected
                                                ? 'bg-white border-primary/50 text-primary shadow-sm ring-1 ring-primary/20'
                                                : 'bg-white border-gray-200 text-dark hover:border-primary/50'
                                        }`}
                                >
                                    <span className={`text-sm font-bold ${slot.disabled ? 'text-gray-400' : isSelected ? 'text-primary' : 'text-gray-400'}`}>
                                        {slot.time}
                                    </span>
                                    <span className={`text-xs ${slot.disabled ? 'text-gray-300' : isSelected ? 'text-primary/70' : 'text-grey'}`}>
                                        {slot.professional}
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Book Button */}
                <div className="w-full mt-8">
                    <button
                        className="w-full bg-primary hover:bg-[#ff9f98] text-white hover:text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-50 hover:shadow-red-200 transition-all active:scale-95"
                        onClick={() => navigate('/signup', { state: { returnTo: '/booking-confirmation' } })}
                    >
                        Book
                    </button>
                </div>

            </div>
        </div>
    );
};

export default SlotSelection;