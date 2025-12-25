// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Star } from 'lucide-react';

const ProfessionalSelect = () => {
  const navigate = useNavigate();

  const professionals = [
    { id: 1, name: 'Anna Smith', role: 'Nail designer', rating: '5.0', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150' },
    { id: 2, name: 'Jordan Mcmiller', role: 'Nail designer', rating: '4.9', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150' },
    { id: 3, name: 'Paty Sinclair', role: 'Nail designer', rating: '4.8', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-6 pb-6 relative">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark hover:bg-gray-50 rounded-full transition-colors">
            <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-8 h-1.5 bg-primary rounded-full"></div> 
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      <h2 className="text-2xl font-medium text-dark text-center mb-10 px-2">
        Choose a professional and see the slots available
      </h2>

      {/* Professionals List */}
      <div className="flex flex-col gap-6">
        {professionals.map((prof) => (
          <div 
            key={prof.id} 
            onClick={() => navigate('/booking')}
            className="flex items-center gap-4 border-b border-gray-50 pb-4 cursor-pointer hover:bg-surface rounded-lg p-2 transition-all"
          >
            <div className="w-14 h-14 rounded-full overflow-hidden border border-gray-100 flex-shrink-0">
                <img src={prof.image} alt={prof.name} className="w-full h-full object-cover" />
            </div>
            <div className="flex-1">
                <h3 className="text-dark font-bold text-base">{prof.name}</h3>
                <span className="text-grey text-xs">{prof.role}</span>
            </div>
            <div className="flex items-center gap-1">
                <Star size={14} className="fill-yellow-400 text-yellow-400" />
                <span className="text-dark font-bold text-sm">{prof.rating}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Link */}
      <div className="mt-auto text-center pt-8 pb-4">
        <button 
            onClick={() => navigate('/slot-selection')}
            className="md:text-xl text-primary text-sm font-medium underline hover:text-[#ff9f98]"
        >
            I don't have a preference
        </button>
      </div>

    </div>
  );
};

export default ProfessionalSelect;