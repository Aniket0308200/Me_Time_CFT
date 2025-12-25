import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const LoginPage = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-6 pb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-8 relative">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark">
            <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
      </div>

      {/* Title Section */}
      <h2 className="text-3xl font-bold text-dark mb-4">Log in</h2>
      <p className="text-grey text-sm mb-8 leading-relaxed">
        Please confirm your country code and enter your phone number.
      </p>

      {/* Form Fields */}
      <div className="space-y-4">
        
        {/* Country Selector (Static for design) */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-3">
            <span className="text-2xl">🇧🇷</span>
            <span className="text-dark font-medium flex-1">Brazil</span>
        </div>

        {/* Phone Input */}
        <div className="flex items-center gap-3 border-b border-gray-200 py-3">
            <span className="text-dark font-medium">+55</span>
            <input 
                type="tel" 
                placeholder="00 0 0000 0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="flex-1 outline-none text-dark placeholder-gray-300 font-medium bg-transparent"
            />
        </div>
      </div>

      {/* Continue Button */}
      <div className="mt-8">
        <button 
            onClick={() => navigate('/verification')} 
            className="w-full bg-primary hover:bg-[#FF7A70] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-100 transition-transform active:scale-95"
        >
            Continue
        </button>
      </div>

    </div>
  );
};

export default LoginPage;