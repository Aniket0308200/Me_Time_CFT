import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star, ChevronRight } from 'lucide-react';

const Booking = () => {
  const navigate = useNavigate();
  
  const [selectedDate, setSelectedDate] = useState(20);
  const [selectedTime, setSelectedTime] = useState('01:30 pm');

  const dates = [
    { day: 17, week: 'Sun' },
    { day: 18, week: 'Mon' },
    { day: 19, week: 'Tue' },
    { day: 20, week: 'Wed' },
    { day: 21, week: 'Thu' },
    { day: 22, week: 'Fri' },
  ];

  const timeSlots = [
    '10:00 am', '11:00 am', '01:30 pm', '03:00 pm', '07:00 pm', '05:00 pm'
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 pb-6 relative">
      
      <div className="w-full max-w-lg px-6 flex flex-col h-full min-h-[90vh]">
        
        {/* --- Header --- */}
        <div className="flex items-center justify-between mb-8">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <div className="w-8"></div>
        </div>

        {/* --- Profile Section --- */}
        <div className="flex flex-col items-center mb-8">
            <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border border-gray-100">
                <img 
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80" 
                    alt="Anna Smith" 
                    className="w-full h-full object-cover"
                />
            </div>
            <h1 className="text-xl font-bold text-dark mb-1">Anna Smith</h1>
            <p className="text-grey text-sm mb-2">Nail Designer</p>
            <div className="flex items-center gap-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-dark font-bold text-sm">5.0</span>
            </div>
        </div>

        <div className="border-xl h-[1px] w-[100%] bg-gray-300 mb-4"></div>

        {/* --- Section Title --- */}
        <div className="w-full text-center mb-8">
            <h2 className="text-xl font-medium text-dark">Select date & time</h2>
        </div>

        {/* --- Date Selection --- */}
        <div className="w-full mb-8">
            <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-dark font-bold">Day</span>
                <button className="text-grey text-sm flex items-center hover:text-primary">
                    October <ChevronRight size={14} className="ml-1" />
                </button>
            </div>

            {/* Horizontal Scroll Dates */}
            <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2">
                {dates.map((item) => {
                    const isSelected = selectedDate === item.day;
                    const isDisabled = item.day === 17; 

                    return (
                        <button 
                            key={item.day}
                            disabled={isDisabled}
                            onClick={() => navigate('/slot-selection')}
                            className={`shrink-0 flex flex-col items-center justify-center border-gray-300 w-16 h-20 rounded-xl border transition-all duration-200
                                ${isDisabled 
                                    ? 'opacity-40 bg-gray-50 border-transparent cursor-not-allowed'
                                    : isSelected 
                                        ? 'border-primary/90 bg-white text-primary shadow-sm' 
                                        : 'border-transparent text-grey hover:bg-gray-100'
                                }`}
                        >
                            <span className={`text-xl font-bold mb-1 ${isSelected && !isDisabled ? 'text-primary' : 'text-dark'}`}>{item.day}</span>
                            <span className="text-xs font-medium">{item.week}</span>
                        </button>
                    )
                })}
            </div>
        </div>

        {/* --- Time Availability --- */}
        <div className="w-full mb-auto">
            <div className="flex items-center justify-between mb-4 px-1">
                <span className="text-dark font-bold">Availability</span>
            </div>

            <div className="grid grid-cols-2 gap-4">
                {timeSlots.map((time) => {
                    const isSelected = selectedTime === time;
                    const isDisabled = time === '10:00 am' || time === '05:00 pm';

                    return (
                        <button 
                            key={time}
                            disabled={isDisabled} 
                            onClick={() => setSelectedTime(time)}
                            className={`py-3 rounded-md text-sm font-medium border transition-all duration-200
                                ${isDisabled
                                    ? 'opacity-40 bg-gray-50 text-gray-400 border-gray-100 cursor-not-allowed' 
                                    : isSelected 
                                        ? 'bg-primary/10 border-primary text-primary' 
                                        : 'bg-white border-gray-200 text-grey hover:border-primary/50'
                                }`}
                        >
                            {time}
                        </button>
                    )
                })}
            </div>
        </div>

        <div className="w-full mt-8">
            <button 
                className="w-full bg-primary hover:bg-[#ff9f98] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-100 transition-transform active:scale-95"
                onClick={() => navigate('/signup')}
            >
                Book
            </button>
        </div>

      </div>
    </div>
  );
};

export default Booking;