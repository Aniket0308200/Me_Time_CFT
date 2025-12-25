import { useNavigate } from 'react-router-dom';
import { ArrowLeft, EyeOff } from 'lucide-react';

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col px-6 pt-6 pb-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6 relative">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 text-dark">
            <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-bold text-dark font-sans absolute left-1/2 transform -translate-x-1/2">MeTime</h1>
      </div>

      <h2 className="text-3xl font-bold text-dark mb-6">Sign up</h2>

      <div className="space-y-5">
        
        <div>
            <label className="text-grey text-sm mb-1 block">Full Name</label>
            <input type="text" placeholder="Enter your full name" className="w-full p-4 rounded-xl border border-gray-200 text-dark focus:border-primary focus:outline-none" />
        </div>

        {/* Email */}
        <div>
            <label className="text-grey text-sm mb-1 block">Email</label>
            <input type="email" placeholder="Enter your email" className="w-full p-4 rounded-xl border border-gray-200 text-dark focus:border-primary focus:outline-none" />
        </div>

        {/* Password */}
        <div className="relative">
            <label className="text-grey text-sm mb-1 block">Password</label>
            <input type="password" placeholder="Enter your password" className="w-full p-4 rounded-xl border border-gray-200 text-dark focus:border-primary focus:outline-none" />
            <EyeOff className="absolute right-4 top-[38px] text-gray-400 cursor-pointer" size={20} />
        </div>

        {/* Phone Number */}
        <div>
            <label className="text-grey text-sm mb-1 block">Phone Number</label>
            <div className="flex gap-3">
                <div className="w-24 p-4 rounded-xl border border-gray-200 text-dark flex items-center justify-center">
                    +55
                </div>
                <input type="tel" placeholder="00 0 0000 0000" className="flex-1 p-4 rounded-xl border border-gray-200 text-dark focus:border-primary focus:outline-none" />
            </div>
        </div>

      </div>

      {/* Register Button */}
      <div className="mt-8">
        <button 
            onClick={() => navigate('/verify')}
            className="w-full bg-primary hover:bg-[#FF7A70] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-100 transition-transform active:scale-95"
        >
            Register
        </button>
      </div>

      {/* Login Link */}
      <div className="mt-6 text-center">
        <span className="text-grey text-sm">Already have an account? </span>
        <button onClick={() => navigate('/signin')} className="text-primary font-bold text-sm hover:underline">
            Log In
        </button>
      </div>

    </div>
  );
};

export default Signup;