import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const VerificationPage = () => {
  const navigate = useNavigate();

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
      <h2 className="text-3xl font-bold text-dark mb-4">Enter code</h2>
      <p className="text-grey text-sm mb-8 leading-relaxed">
        We've sent an SMS with an activation code to your phone <span className="text-dark font-medium">+55 47 9 9991 5060</span>
      </p>

      {/* OTP Inputs */}
      <div className="flex justify-center gap-4 mb-8 w-full">
        {[1, 2, 3, 4, 5].map((_, index) => (
            <input 
                key={index}
                type="text" 
                maxLength={1}
                className="w-12 h-14 md:w-16 md:h-16 border border-gray-200 rounded-xl text-center text-xl font-bold text-dark focus:border-primary focus:outline-none transition-colors"
            />
        ))}
      </div>

      {/* Resend Code */}
      <div className="text-center">
        <span className="text-grey text-sm">Send code again </span>
        <span className="text-dark font-medium text-sm">00:20</span>
      </div>

      {/* Keyboard ko ignore kar rahe hain kyunki mobile me native keyboard khulega */}
      
      {/* Verify Button (Hidden trick: Keyboard ke upar usually button hota hai ya auto submit) */}
       <div className="mt-10">
        <button 
            onClick={() => navigate('/home')} // Success ke baad Home
            className="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-100"
        >
            Confirm
        </button>
      </div>

    </div>
  );
};

export default VerificationPage;