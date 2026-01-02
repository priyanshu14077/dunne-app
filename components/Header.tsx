import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD] shadow-sm">
      {/* Main Nav - Updated to 96px with 48px padding */}
      <div className="flex items-center justify-between px-12 bg-[#F5EBDD] h-[96px] relative z-10 w-full">
        {/* Mobile Menu */}
        <button className="hover:opacity-70 transition-opacity text-[#1F4B30]">
          <Menu className="w-7 h-7" strokeWidth={2} />
        </button>

        {/* Logo - Centered and Enlarged */}
        <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <Image 
               src="/Workmark_Dunne.svg" 
               alt="Dunne Jewelry" 
               width={160} 
               height={64} 
               priority
               className="h-[48px] w-auto opacity-100" 
             />
        </Link>

        {/* Cart - Perfectly aligned with Menu */}
        <button className="relative hover:scale-105 transition-transform active:scale-95 group flex items-center justify-center text-[#1F4B30]">
           <ShoppingBag className="w-7 h-7" strokeWidth={2} />
        </button>
      </div>

      {/* Promo Banner - Updated to 31px */}
      <div className="bg-[#DE3C27] text-white text-center flex items-center justify-center text-[12px] font-bold tracking-[0.15em] uppercase h-[31px] w-full">
         USE "DUNNE10" ON YOUR FIRST ORDER
      </div>
    </header>
  );
}
