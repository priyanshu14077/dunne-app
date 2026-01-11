"use client";

import Link from "next/link";
import Image from "next/image";


export default function LandingPage() {
  return (
    <div className="relative min-h-[100dvh] bg-[#FDF0D5] flex flex-col items-center justify-between py-10 lg:py-16 px-6 overflow-hidden select-none">
      {/* Background Image */}
      <div className="absolute inset-0 pointer-events-none">
        <Image 
          src="/landing-bg.png" 
          alt="Background" 
          fill
          className="object-cover opacity-100"
          priority
        />
      </div>

      {/* Quote Top */}
      <div className="relative z-20 text-center space-y-2">
        <p 
          className="text-[#DE3C27] text-[16px] lg:text-[22px] leading-relaxed max-w-[280px] lg:max-w-[500px] mx-auto font-medium" 
          style={{ fontFamily: 'Neutra Text, sans-serif' }}
        >
          "Each charm is an invitation to pause, to enjoy the little luxury of healing."
        </p>
      </div>

      {/* Central Orbital Layout */}
      <div className="relative w-full aspect-square max-w-[340px] lg:max-w-[700px] flex items-center justify-center -my-2 lg:-my-4">
        {/* Orbital Image */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
           <Image 
            src="/landing-orbit.png" 
            alt="Charms" 
            width={700}
            height={700}
            className="w-full h-full object-contain"
            priority
          />
        </div>


      </div>

      {/* Bottom Section */}
      <div className="relative z-20 flex flex-col items-center gap-6 w-full">
        <div className="text-center space-y-1">
          <h2 
            className="text-black text-[18px] lg:text-[28px] font-normal" 
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            Create your dream jewellery
          </h2>
          <p 
            className="text-[14px] lg:text-[18px] text-gray-700 font-medium" 
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            with <span className="text-[#DE3C27] font-bold text-[20px] lg:text-[32px] ml-1">Dunne</span>
          </p>
        </div>

        <Link href="/customize" className="w-full max-w-[280px] lg:max-w-[400px]">
          <button 
            className="w-full bg-[#1F4B30] text-white py-4 lg:py-5 rounded-full text-[18px] lg:text-[24px] font-bold shadow-xl hover:bg-[#153421] transition-all active:scale-95 flex items-center justify-center translate-y-[-10px]"
            style={{ fontFamily: 'Neutra Text, sans-serif' }}
          >
            Create Now
          </button>
        </Link>
      </div>
    </div>
  );
}
