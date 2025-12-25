import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Phone, MessageSquare, MapPin, Share2, Star, ChevronRight } from 'lucide-react';

const SalonDetails = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-white pb-10">

            {/* Hero Section (Image & Title) */}
            <div className="relative h-72 w-full">
                <img
                    src="https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80"
                    alt="Salon Interior"
                    className="w-full h-full object-cover brightness-75"
                />

                {/* Header (Back Button & Logo) */}
                <div className="absolute top-0 left-0 w-full p-6 flex items-center justify-between text-white z-10">
                    <button onClick={() => navigate(-1)} className="p-2 -ml-2 hover:bg-white/20 rounded-full transition-colors">
                        <ArrowLeft size={24} />
                    </button>
                    <span className="font-bold text-lg font-sans">MeTime</span>
                    <div className="w-8"></div>
                </div>

                {/* Salon Info Overlay */}
                <div className="absolute bottom-0 left-0 w-full p-6 text-white bg-gradient-to-t from-black/80 to-transparent pt-20">
                    <h1 className="text-3xl font-bold mb-1">The Gallery Salon</h1>
                    <p className="text-gray-200 text-sm">8502 Preston Rd. Inglewood • $$</p>
                </div>
            </div>

            <div className="px-6 -mt-4 relative z-20 bg-white rounded-t-3xl pt-8">

                {/* Action Buttons */}
                <div className="flex sm:justify-start justify-between sm:gap-8 mb-8 border-b border-gray-100 pb-8">
                    <ActionBtn icon={<Phone size={24} />} label="Call" />
                    <ActionBtn icon={<MessageSquare size={24} />} label="Message" />
                    <ActionBtn icon={<MapPin size={24} />} label="Directions" />
                    <ActionBtn icon={<Share2 size={24} />} label="Share" />
                </div>

                {/* Coupons */}
                <div className="flex gap-4 overflow-x-auto no-scrollbar mb-8">
                    <CouponCard
                        discount="10% off"
                        detail="use code FREE10"
                        bg="bg-red-50"
                        iconColor="text-primary"
                    />
                    <CouponCard
                        discount="30% off on Debit Card"
                        detail="No coupon required"
                        bg="bg-red-50"
                        iconColor="text-primary"
                    />
                </div>

                {/* Customer Reviews */}
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-dark mb-2">Customer reviews</h3>
                    <div className="flex items-end gap-2 mb-1">
                        <span className="text-sm text-dark font-medium">4.8 out of 5</span>
                    </div>
                    <p className="text-grey text-xs mb-6">27 global ratings</p>

                    {/* Rating Bars (Static Demo) */}
                    <div className="space-y-2 mb-8">
                        <RatingBar star={5} percent="80%" />
                        <RatingBar star={4} percent="10%" />
                        <RatingBar star={3} percent="5%" />
                        <RatingBar star={2} percent="5%" />
                        <RatingBar star={1} percent="0%" />
                    </div>

                    {/* Write Review Button */}
                    <button className="w-full border border-gray-200 py-4 rounded-lg font-bold text-dark hover:bg-gray-50 transition-colors">
                        Write a review
                    </button>
                </div>
            </div>

        </div>
    );
};

const ActionBtn = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
    <button className="flex flex-col items-center gap-2 text-dark hover:text-primary transition-colors">
        <div className="w-12 h-12 rounded-full border border-gray-200 flex items-center justify-center mb-1">
            {icon}
        </div>
        <span className="text-xs font-medium">{label}</span>
    </button>
);

const CouponCard = ({ discount, detail, bg, iconColor }: any) => (
    <div className={`shrink-0 p-4 rounded-2xl border border-gray-100 w-64 flex items-center gap-4 cursor-pointer hover:border-primary transition-colors`}>
        <div className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center ${iconColor}`}>
            <span className="text-lg">🏷️</span>
        </div>
        <div>
            <h4 className="font-bold text-dark text-sm">{discount}</h4>
            <p className="text-grey text-[10px]">{detail}</p>
        </div>
    </div>
);

const RatingBar = ({ star, percent }: { star: number, percent: string }) => (
    <div className="flex items-center gap-3">
        <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
                <Star
                    key={i}
                    size={12}
                    className={`${i < star ? "fill-yellow-400 text-yellow-400" : "text-gray-200"}`}
                />
            ))}
        </div>
        <span className="text-xs text-grey w-8">{percent}</span>
    </div>
);

export default SalonDetails;