// import React from 'react';
import { useNavigate } from 'react-router-dom';

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginPopup = ({ isOpen, onClose }: LoginPopupProps) => {
  const navigate = useNavigate();

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 z-40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="fixed z-50 bg-white p-8 flex flex-col items-center text-center shadow-2xl
                      bottom-0 left-0 w-full rounded-t-[40px] 
                      md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 
                      md:w-[450px] md:h-auto md:rounded-[32px] md:bottom-auto
                      animate-in slide-in-from-bottom duration-300 md:fade-in
                      ">

        <h2 className="text-3xl font-bold text-dark mb-4">Hey there!</h2>

        <p className="text-grey text-sm mb-8 px-4 leading-relaxed">
          Before schedule, please enter your account or create one!
        </p>

        {/* Log In Button */}
        <button
          onClick={() => { onClose(); navigate('/signin'); }}
          className="w-full bg-primary hover:bg-[#ff9f98] text-white py-4 rounded-xl font-bold text-lg shadow-lg shadow-red-100 mb-4 transition-transform active:scale-95"
        >
          Log In
        </button>

        {/* Create Account Link */}
        <button
          onClick={() => { onClose(); navigate('/sign-up'); }}
          className="text-primary font-medium text-sm hover:underline p-2"
        >
          Create Account
        </button>
        <div className="md:hidden absolute top-3 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full"></div>
      </div>
    </>
  );
};

export default LoginPopup;