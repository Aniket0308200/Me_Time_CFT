import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginPopup from '../../../components/Common/LoginPopup';

const ServiceSelect = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  const services = [
    { 
      id: 1, 
      name: 'Nail', 
      image: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?auto=format&fit=crop&q=80&w=300' 
    },
    { 
      id: 2, 
      name: 'Eyebrows', 
      image: 'https://img.freepik.com/premium-photo/close-up-view-beautiful-brown-female-eye-perfect-trendy-eyebrow-good-vision-contact-lenses-brow-bar-fashion-eyebrow-makeup-concept_254969-2329.jpg?semt=ais_hybrid&w=740&q=80' 
    },
    { 
      id: 3, 
      name: 'Massage', 
      image: 'https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&fit=crop&q=80&w=300' 
    },
    { 
      id: 4, 
      name: 'Hair', 
      image: 'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80&w=300' 
    },
  ];

  const handleServiceClick = () => {
    navigate('/service-details'); 
  };

  const handleSkip = () => {
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center pt-6 px-6 relative">
      <h1 className="text-xl font-bold text-dark font-sans tracking-wide mb-6">MeTime</h1>

      <div className="flex items-center gap-2 mb-10">
        <div className="w-8 h-1.5 bg-primary rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      <div className="w-full max-w-md text-center mb-8">
        <h2 className="text-2xl font-medium text-dark">Please, choose a service:</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 w-full max-w-md">
        {services.map((service) => (
          <div key={service.id} onClick={handleServiceClick} className="group cursor-pointer flex flex-col items-center gap-3">
            <div className="w-full aspect-square rounded-3xl overflow-hidden shadow-sm border border-transparent hover:border-primary transition-all">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
            </div>
            <span className="text-dark font-medium">{service.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 pb-10">
        <button onClick={handleSkip} className="text-primary font-medium hover:text-[#ff9f98] transition-colors">Skip</button>
      </div>

      <LoginPopup isOpen={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};

export default ServiceSelect;