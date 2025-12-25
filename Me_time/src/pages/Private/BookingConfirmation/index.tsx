// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Heart } from 'lucide-react';

const BookingConfirmation = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center px-6 pt-6 pb-6 relative">
      
      <div className="w-full max-w-md flex flex-col h-full min-h-[90vh]">
        
        {/* --- Header --- */}
        <div className="flex items-center justify-between mb-12 relative">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
            <div className="w-8"></div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center -mt-10">
            
            {/* Heart Icon Circle */}
            <div className="w-24 h-24 bg-[#FFE8E5] rounded-full flex items-center justify-center mb-8 shadow-sm">
                <Heart size={60} className="fill-[#FF4538] text-[#FF4538]" />
            </div>

            <h2 className="text-2xl font-bold text-dark text-center leading-tight mb-12">
                Thank you for booking <br /> with <span className="font-extrabold">MeTime</span>
            </h2>

            {/* Booking Details */}
            <div className="text-center space-y-2 mb-2">
                <p className="text-grey text-sm">Your booking details:</p>
                <p className="text-dark font-medium text-lg">Tuesday, 19 04:30pm</p>
                <p className="text-grey text-sm">At The Gallery Salon</p>
                <button className="text-dark font-medium text-sm underline pt-1 hover:text-primary">
                    8502 Preston Rd. Inglewood
                </button>
            </div>

        </div>

        {/* Bottom Buttons */}
        <div className="w-full mt-auto space-y-4 text-center">
            <button 
                onClick={() => navigate('/bookings')} 
                className="w-full bg-primary hover:bg-[#ff9f98] text-white py-4 rounded-xl font-bold text-lg transition-transform active:scale-95"
            >
                Keep booking
            </button>

            <button 
                onClick={() => navigate('/home')}
                className="text-primary text-sm font-medium hover:text-primary py-2"
            >
                Main page
            </button>
        </div>

      </div>
    </div>
  );
};

export default BookingConfirmation;