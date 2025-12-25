import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';
import PaymentMethodModal from '../../../components/Common/LoginPopup/PaymentMethodModal';

const Checkout = () => {
  const navigate = useNavigate();
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 pb-6 relative">
      
      <div className="w-full max-w-md px-6 flex flex-col h-full min-h-[90vh]">
        
        <div className="flex items-center justify-between mb-8 relative">
            <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
                <ArrowLeft size={24} />
            </button>
            <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">Checkout</h1>
            <div className="w-8"></div>
        </div>

        <div className="space-y-6 mb-8 w-full">
            
            {/* Date */}
            <div className="flex justify-between items-center text-sm">
                <span className="text-grey font-medium">Date</span>
                <span className="text-dark font-bold">Tuesday, 19 04:30pm</span>
            </div>

            {/* Service */}
            <div className="flex justify-between items-center text-sm">
                <span className="text-grey font-medium">Service</span>
                <span className="text-dark font-bold">Basic pedicure with Paty</span>
            </div>

            {/* Location */}
            <div className="flex justify-between items-start text-sm">
                <span className="text-grey font-medium">Location</span>
                <span className="text-dark font-bold underline cursor-pointer hover:text-primary text-right max-w-[60%]">
                    8502 Preston Rd. Inglewood
                </span>
            </div>

            <div 
                onClick={() => setShowPaymentModal(true)} 
                className="flex justify-between items-center text-sm cursor-pointer group py-2" 
            >
                <span className="text-grey font-medium">Payment</span>
                <div className="flex items-center gap-2">
                    {/* Mastercard Icon */}
                    <div className="flex -space-x-1 mr-1 border-1 rounded-sm border-black bg-black px-2 py-2">
                        <div className="w-4 h-4 rounded-full bg-[#eb001bc4] z-10"></div>
                        <div className="w-4 h-4 rounded-full bg-[#F79E1B]"></div>
                    </div>
                    <span className="text-dark font-bold group-hover:text-primary transition-colors">
                        **** 2345
                    </span>
                    <ChevronRight size={16} className="text-grey" />
                </div>
            </div>

            <div className="flex justify-between items-center pt-6">
                <span className="text-grey font-medium">Total</span>
                <span className="text-dark font-bold text-xl">$35</span>
            </div>
        </div>

        <div className="w-full mt-auto">
            <button 
                onClick={() => navigate('/booking-confirmation')}
                className="w-full bg-primary hover:bg-[#ff9f98] text-white hover:text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-50 hover:shadow-red-200 transition-all active:scale-95"
            >
                Book
            </button>
        </div>

      </div>

      <PaymentMethodModal 
        isOpen={showPaymentModal} 
        onClose={() => setShowPaymentModal(false)} 
      />

    </div>
  );
};

export default Checkout;