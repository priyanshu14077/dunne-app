import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag } from "lucide-react";

interface HeaderProps {
  onCartClick?: () => void;
  cartItemCount?: number;
}

export default function Header({ onCartClick, cartItemCount = 0 }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD] shadow-sm">
      {/* Main Nav - Updated to 96px with 48px padding */}
      <div className="flex items-center justify-between px-6 lg:px-12 bg-[#F5EBDD] h-[64px] lg:h-[96px] relative z-10 w-full transition-[height] duration-300">
        {/* Mobile Menu */}
        <button className="hover:opacity-70 transition-opacity text-black">
          <Menu className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2} />
        </button>

        {/* Logo - Centered and Enlarged */}
        <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <Image 
               src="/Workmark_Dunne.svg" 
               alt="Dunne Jewelry" 
               width={160} 
               height={64} 
               priority
               className="h-[32px] lg:h-[48px] w-auto opacity-100 transition-[height] duration-300" 
             />
        </Link>

        {/* Cart - Perfectly aligned with Menu */}
        <button 
          onClick={onCartClick}
          className="relative hover:scale-105 transition-transform active:scale-95 group flex items-center justify-center text-black"
        >
           <ShoppingBag className="w-6 h-6 lg:w-7 lg:h-7" strokeWidth={2} />
           {cartItemCount > 0 && (
             <span className="absolute -top-1 -right-1 bg-[#DE3C27] text-white text-[10px] w-4 h-4 lg:w-5 lg:h-5 rounded-full flex items-center justify-center font-bold animate-fade-in shadow-sm">
               {cartItemCount}
             </span>
           )}
        </button>
      </div>

      {/* Promo Banner - Updated to 31px */}
      <div 
        className="bg-[#DE3C27] text-white text-center flex items-center justify-center text-[10px] lg:text-[12px] font-bold tracking-[0.15em] uppercase h-[24px] lg:h-[31px] w-full transition-[height] duration-300"
        style={{ fontFamily: 'Manrope, sans-serif' }}
      >
         USE "DUNNE10" ON YOUR FIRST ORDER
      </div>
    </header>
  );
}
