// import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, ChevronRight } from 'lucide-react';

const ServiceDetails = () => {
  const navigate = useNavigate();

  const subServices = [
    { id: 1, name: 'Basic Manicure', price: '$30', image: 'https://www.shutterstock.com/image-photo/woman-basic-white-nails-design-600nw-2516507057.jpg' },
    { id: 2, name: 'Basic Pedicure', price: '$35', image: 'https://spongelle.com/cdn/shop/articles/pedicure-types.jpg?v=1689702966https://spongelle.com/cdn/shop/articles/pedicure-types.jpg?v=1689702966' },
    { id: 3, name: 'Gel Manicure', price: '$50', image: 'https://cdn.prod.website-files.com/630f3c750051ac8f612287b7/634f6d631508d68af298b2a2_image-%20what%20is%20gel%20manicure.jpg' },
    { id: 4, name: 'Gel Pedicure', price: '$55', image: 'https://media.istockphoto.com/id/1280301022/photo/manicure-master-is-painting-female-toenails.jpg?s=612x612&w=0&k=20&c=bR_RKlEnpdjvZCezzBeVQ3Qpr-XnZ4D22mROvs-duXI=' },
    { id: 5, name: 'Acrylic Extensions', price: '$100', image: 'https://images.unsplash.com/photo-1522337660859-02fbefca4702?w=200' },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-6 pb-10">
      
      {/* Header (Back & Logo) */}
      <div className="flex items-center justify-between mb-6 relative">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark">
            <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
      </div>

      {/* Stepper (Step 2 Active) */}
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-8 h-1.5 bg-primary rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
        <div className="w-1.5 h-1.5 bg-gray-200 rounded-full"></div>
      </div>

      {/* Title */}
      <h2 className="text-2xl font-medium text-dark text-center mb-8 px-4">
        Now, choose one that fit your needs:
      </h2>

      {/* List */}
      <div className="flex flex-col gap-4">
        {subServices.map((item) => (
          <div 
            key={item.id}
            onClick={() => navigate('/professional')}
            className="flex items-center gap-4 p-2 rounded-xl hover:bg-surface cursor-pointer transition-colors group"
          >
            {/* Image */}
            <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>
            
            {/* Text */}
            <div className="flex-1">
                <h3 className="text-dark font-semibold text-sm">{item.name}</h3>
                <span className="text-grey text-sm">{item.price}</span>
            </div>

            {/* Arrow Icon */}
            <ChevronRight size={20} className="text-gray-300 group-hover:text-primary" />
          </div>
        ))}
      </div>

    </div>
  );
};

export default ServiceDetails;