import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD] shadow-sm">
      {/* Main Nav - Strict 82px */}
      <div className="flex items-center justify-between px-6 bg-[#F5EBDD] h-[82px] relative z-10 w-full max-w-5xl mx-auto">
        {/* Mobile Menu */}
        <button className="p-2 -ml-2 hover:opacity-70 transition-opacity text-[#1F4B30]">
          <Menu className="w-6 h-6" strokeWidth={1.5} />
        </button>

        {/* Logo - Centered */}
        <Link href="/" className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
             <Image 
               src="/Workmark_Dunne.svg" 
               alt="Dunne Jewelry" 
               width={120} 
               height={48} 
               priority
               className="h-[40px] w-auto opacity-100" 
             />
        </Link>

        {/* Cart - Perfectly aligned with Menu */}
        <button className="p-2 -mr-2 relative hover:scale-105 transition-transform active:scale-95 group flex items-center justify-center text-[#1F4B30]">
           <ShoppingBag className="w-6 h-6" strokeWidth={1.5} />
        </button>
      </div>

      {/* Promo Banner - Strict 26px */}
      <div className="bg-[#DE3C27] text-white text-center flex items-center justify-center text-[10px] font-bold tracking-widest uppercase h-[26px] w-full">
         USE "DUNNE10" ON YOUR FIRST ORDER
      </div>
    </header>
  );
}
