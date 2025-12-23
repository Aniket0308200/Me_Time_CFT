// import React from 'react';
import { useNavigate } from 'react-router-dom';
import welcomeGirl from '../assets/welcome-girl.png';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full bg-white relative overflow-hidden flex flex-col md:flex-row">
      
      {/* --- HEADER (Logo) --- */}
      <div className="absolute top-0 left-0 w-full pt-6 z-50 text-center md:text-left md:pl-20">
        <h1 className="text-xl md:text-2xl font-bold text-dark font-sans tracking-wide">MeTime</h1>
      </div>

      {/* --- LEFT SIDE (Image & New BG Shape) --- */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-screen relative flex items-center justify-center bg-white">
        
        {/* --- YOUR CUSTOM BACKGROUND SHAPE --- */}
        {/* Logic: Pink Box ke upar aur niche White Circles overlap kar rahe hain */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
            
            {/* The Pink Box (Beech wala part) */}
            <div className="relative w-full md:w-[80%] h-[350px] md:h-[500px] bg-[rgba(253,204,197,1)] flex flex-col justify-between">
                
                {/* Top White Cutout (Upar wala circle jo pink ko katta hai) */}
                <div className="absolute -top-[100px] left-1/2 transform -translate-x-1/2 
                                w-[120%] h-[150px] bg-white rounded-[50%]">
                </div>

                {/* Bottom White Cutout (Niche wala circle jo pink ko katta hai) */}
                <div className="absolute -bottom-[100px] left-1/2 transform -translate-x-1/2 w-[120%] h-[150px] bg-white rounded-[50%]">
                </div>
            </div>
        </div>

        {/* --- MAIN IMAGE --- */}
        <img 
          src={welcomeGirl} 
          alt="Meditating Girl" 
          className="w-90 md:w-[400px] object-contain z-10 drop-shadow-xl mb-4"
        />
      </div>

      {/* --- RIGHT SIDE (Text Content) --- */}
      <div className="w-full md:w-1/2 flex flex-col justify-start md:justify-center items-center md:items-start px-6 text-center md:text-left z-20 bg-white">
        
        <div className="space-y-3 max-w-sm mt-4 md:mt-0">
            <h2 className="text-3xl md:text-5xl font-bold text-dark leading-tight">
              Welcome to <br />
              The Gallery Salon!
            </h2>
            
            <p className="text-grey text-sm md:text-lg leading-relaxed">
              Follow the steps to schedule your next appointment with us.
            </p>
        </div>

        {/* Buttons */}
        {/* Buttons */}
        <div className="flex items-center gap-4 w-full max-w-md pt-8 justify-center md:justify-start pb-10 md:pb-0">
            
            {/* SKIP BUTTON (Outline Style -> Fills on Hover) */}
            <button 
                onClick={() => console.log("Skip")}
                className="border-1 border-primary text-primary bg-transparent 
                           px-10 py-3 rounded-lg font-semibold text-sm md:text-lg 
                           hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-red-100
                           transition-all active:scale-95"
            >
                Skip
            </button>

            {/* START BUTTON (Filled Style) */}
            <button 
                onClick={() => navigate('/service')}
                className="bg-primary text-white 
                           px-10 py-3 rounded-lg font-semibold text-sm md:text-lg 
                           shadow-lg shadow-red-100 hover:bg-[#FF7A70] 
                           transition-transform active:scale-95"
            >
                Start
            </button>
        </div>
      </div>

    </div>
  );
};

export default Welcome;