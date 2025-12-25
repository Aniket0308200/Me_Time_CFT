import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

import cancelIcon from '../../../assets/cancel-icon.png'; 

const YourBookings = () => {
  const navigate = useNavigate();
  
  const [activeTab, setActiveTab] = useState<'past' | 'upcoming'>('past');
  const [showCancelModal, setShowCancelModal] = useState(false);
  const [selectedBookingId, setSelectedBookingId] = useState<number | null>(null);

  const pastBookings = [
    {
      id: 1,
      salon: "Luna's Salon",
      professional: "Paty Sinclair",
      distance: "5.0 Kms",
      services: ["Basic Manicure 1 x"],
      date: "8 Mar 2022",
      price: "$30"
    },
    {
      id: 2,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: ["Basic Manicure 1 x + Basic Pedicure 1 x"],
      date: "12 May 2022",
      price: "$65"
    }
  ];

  const upcomingBookings = [
    {
      id: 3,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: ["Acrylic Extensions 1 x + Gel Manicure 1 x"],
      date: "19 Oct 2023",
      price: "$150"
    },
    {
      id: 4,
      salon: "The Gallery Salon",
      professional: "Anna Smith",
      distance: "5.0 Kms",
      services: ["Gel Pedicure 1 x"],
      date: "31 Oct 2023",
      price: "$55"
    }
  ];

  const handleCancelClick = (id: number) => {
    setSelectedBookingId(id);
    setShowCancelModal(true);
  };

  const confirmCancel = () => {
    console.log(`Booking ${selectedBookingId} cancelled`);
    setShowCancelModal(false);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 pb-6 relative">
      
      <div className="w-full max-w-md px-6 flex flex-col h-full min-h-[90vh] relative">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-8 relative">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
            <div className="w-8"></div>
        </div>

        <h2 className="text-2xl font-medium text-dark mb-6">Your Bookings</h2>

        <div className="flex items-center border-b border-gray-100 mb-6">
            <button 
                onClick={() => setActiveTab('past')}
                className={`flex-1 pb-3 text-sm font-medium transition-all relative
                    ${activeTab === 'past' ? 'text-primary' : 'text-grey hover:text-dark'}`}
            >
                Past
                {activeTab === 'past' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>}
            </button>
            <button 
                onClick={() => setActiveTab('upcoming')}
                className={`flex-1 pb-3 text-sm font-medium transition-all relative
                    ${activeTab === 'upcoming' ? 'text-primary' : 'text-grey hover:text-dark'}`}
            >
                Upcoming
                {activeTab === 'upcoming' && <div className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-t-full"></div>}
            </button>
        </div>

        {/* Bookings List */}
        <div className="flex flex-col gap-6">
            {(activeTab === 'past' ? pastBookings : upcomingBookings).map((booking) => (
                <div key={booking.id} className="border-b border-gray-50 pb-6 last:border-none">
                    <div className="flex justify-between items-start mb-1">
                        <h3 className="font-bold text-dark text-base">{booking.salon}</h3>
                    </div>
                    
                    <p className="text-xs text-grey mb-3">
                        with {booking.professional} • {booking.distance}
                    </p>

                    <div className="mb-3">
                        {booking.services.map((service, idx) => (
                            <p key={idx} className="text-sm text-grey leading-relaxed">{service}</p>
                        ))}
                    </div>

                    <div className="flex items-center gap-2 text-sm text-dark font-medium mb-3">
                        <span>{booking.date}</span>
                        <span>•</span>
                        <span>{booking.price}</span>
                    </div>

                    {activeTab === 'upcoming' && (
                        <button 
                            onClick={() => handleCancelClick(booking.id)}
                            className="text-[#FF4538] text-sm font-medium hover:underline"
                        >
                            Cancel
                        </button>
                    )}
                </div>
            ))}
        </div>

      </div>

      {/* Cancel Confirmation Modal */}
      {showCancelModal && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm" onClick={() => setShowCancelModal(false)}></div>
          <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white w-[85%] max-w-sm rounded-[32px] p-8 text-center shadow-2xl animate-in fade-in zoom-in duration-200">
             
             <div className="mb-6 mx-auto flex justify-center rotate-3">
                <img 
                    src={cancelIcon} 
                    alt="Cancel Icon" 
                    className="w-20 h-20 object-contain drop-shadow-lg"
                />
             </div>

             <h3 className="text-lg font-bold text-dark mb-8 leading-snug px-4">
                Are you sure, you want to <span className="text-[#FF7A70]">cancel</span> this appointment?
             </h3>

             {/* Buttons */}
             <div className="flex items-center justify-center gap-8">
                <button 
                    onClick={() => setShowCancelModal(false)}
                    className="hover:bg-[#FF7A70] hover:text-white text-primary px-8 py-3 rounded-xl font-bold text-sm transition-transform active:scale-95"
                >
                    No
                </button>
                <button 
                    onClick={confirmCancel}
                    className="bg-[#FF7A70] hover:bg-[#ff655a] text-white px-8 py-3 rounded-xl font-bold text-sm shadow-lg shadow-red-100 transition-transform active:scale-95"
                >
                    Cancel
                </button>
             </div>
          </div>
        </>
      )}

    </div>
  );
};

export default YourBookings;