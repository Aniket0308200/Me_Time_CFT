// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, CreditCard, Wallet, Banknote, ChevronRight } from 'lucide-react';

interface PaymentMethodModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const PaymentMethodModal = ({ isOpen, onClose }: PaymentMethodModalProps) => {
    const navigate = useNavigate();

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center backdrop-blur-sm animate-in fade-in duration-200 px-4">

            {/* Modal Content */}
            <div className="bg-white w-full max-w-sm rounded-3xl p-6 relative shadow-2xl animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                    <button onClick={onClose}>
                        <X size={24} className="text-dark" />
                    </button>
                    <h3 className="text-lg font-bold text-dark flex-1 text-center pr-6">Add payment method</h3>
                </div>

                {/* Options List */}
                <div className="space-y-4">

                    {/* Apple Pay */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-5 border border-gray-300 rounded flex items-center justify-center text-[10px] font-bold text-dark">Pay</div>
                            <span className="text-sm font-bold text-dark">Apple Pay</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    {/* PayPal */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                            <Wallet size={20} className="text-blue-600" />
                            <span className="text-sm font-bold text-dark">PayPal</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    {/* Cash */}
                    <div className="flex items-center justify-between p-4 border-b border-gray-50 cursor-pointer hover:bg-gray-50 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                            <Banknote size={20} className="text-green-600" />
                            <span className="text-sm font-bold text-dark">Cash</span>
                        </div>
                        <ChevronRight size={16} className="text-gray-300" />
                    </div>

                    {/* Existing Card (with Remove option) */}
                    <div className="flex items-center justify-between p-4 rounded-xl transition-colors">
                        <div className="flex items-center gap-3">
                            <CreditCard size={20} className="text-dark" />
                            <span className="text-sm font-bold text-dark">7236 xxxx xxxx 2345</span>
                        </div>
                        <button className="text-[#FF4538] text-xs font-bold hover:underline">
                            Remove
                        </button>
                    </div>

                </div>

                <button
                    onClick={() => {
                        onClose();
                        navigate('/add-card');
                    }}
                    className="w-full mt-6 py-3 border border-gray-200 rounded-xl text-sm font-bold text-dark hover:bg-gray-50 transition-colors"
                >
                    + Add New Card
                </button>

            </div>
        </div>
    );
};

export default PaymentMethodModal;