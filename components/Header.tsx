import Link from "next/link";
import Image from "next/image";
import { Menu, ShoppingBag } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-[#F5EBDD] shadow-sm">
      {/* Main Nav */}
      <div className="flex items-center justify-between px-6 py-4 relative z-10 bg-[#F5EBDD] h-[96px]">
        {/* Mobile Menu */}
        <button className="p-2 -ml-2">
          <Menu className="w-6 h-6 text-[#1F4B30]" strokeWidth={1.5} />
        </button>

        {/* Logo */}
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
             <Image 
               src="/dunne-logo.svg" 
               alt="Dunne Jewelry" 
               width={120} 
               height={40} 
               priority
               className="h-8 w-auto" 
             />
        </Link>

        {/* Cart */}
        <button className="p-2 -mr-2 relative">
          <ShoppingBag className="w-6 h-6 text-[#1F4B30]" strokeWidth={1.5} />
          {/* <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span> */}
        </button>
      </div>

      {/* Promo Banner */}
      <div className="bg-[#DE3C27] text-white text-center flex items-center justify-center text-xs font-medium tracking-wide h-[31px]">
        USE "DUNNE10" ON YOUR FIRST ORDER
      </div>
    </header>
  );
}
