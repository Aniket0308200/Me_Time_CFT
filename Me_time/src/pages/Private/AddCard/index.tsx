import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const AddCard = () => {
  const navigate = useNavigate();

  const handleAddCard = () => {
    navigate('/checkout'); 
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 pb-6 relative">
      <div className="w-full max-w-md px-6 flex flex-col h-full min-h-[90vh]">
        
        {/* --- Header --- */}
        <div className="flex items-center justify-between mb-8 relative">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
            <div className="w-8"></div>
        </div>

        <h2 className="text-2xl font-bold text-dark mb-8">Add Card</h2>

        <div className="w-full space-y-6">
            
            {/* Cardholder Name */}
            <div className="space-y-2">
                <label className="text-grey text-sm font-medium ml-1">Cardholder name</label>
                <input 
                    type="text" 
                    placeholder="Jannet Klein" 
                    className="w-full p-4 rounded-xl border border-gray-200 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                />
            </div>

            {/* Card Number */}
            <div className="space-y-2">
                <label className="text-grey text-sm font-medium ml-1">Card number</label>
                <div className="relative">
                    <input 
                        type="text" 
                        placeholder="7236 xxxx xxxx 2345" 
                        className="w-full p-4 rounded-xl border border-gray-200 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                    {/* Mastercard Icon */}
                    <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex -space-x-2 border-1 rounded-sm border-black bg-black px-2 py-2">
                        <div className="w-6 h-6 rounded-full bg-[#EB001B]"></div>
                        <div className="w-6 h-6 rounded-full bg-[#F79E1B]/90"></div>
                    </div>
                </div>
            </div>

            {/* Exp Date & CVV Row */}
            <div className="flex gap-4">
                <div className="flex-1 space-y-2">
                    <label className="text-grey text-sm font-medium ml-1">Exp. Date</label>
                    <input 
                        type="text" 
                        placeholder="MM/YY" 
                        className="w-full p-4 rounded-xl border border-gray-200 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>
                <div className="flex-1 space-y-2">
                    <label className="text-grey text-sm font-medium ml-1">CVV</label>
                    <input 
                        type="text" 
                        placeholder="123" 
                        className="w-full p-4 rounded-xl border border-gray-200 text-dark placeholder-gray-400 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20 transition-all"
                    />
                </div>
            </div>

        </div>

        <div className="w-full mt-auto pt-8">
            <button 
                onClick={handleAddCard}
                className="w-full bg-primary hover:bg-[#ff9f98] text-white hover:text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-50 hover:shadow-red-200 transition-all active:scale-95"
            >
                Add Card
            </button>
        </div>

      </div>
    </div>
  );
};

export default AddCard;