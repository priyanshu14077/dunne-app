import Image from "next/image";
import { PRODUCT_ANCHORS } from "@/lib/anchor";
import { Charm } from "@/lib/mock-data";

interface CharmOverlayProps {
  baseProductId: string;
  baseImageSrc: string;
  selectedCharms: Charm[]; // Array of selected charms
}

export default function CharmOverlay({ 
  baseProductId, 
  baseImageSrc, 
  selectedCharms,
}: CharmOverlayProps) {
 
  const anchors = PRODUCT_ANCHORS[baseProductId]?.anchors?.mobile || [];

  return (
    <div className="relative w-full h-auto aspect-auto flex items-center justify-center">
      
      {/* Base Product Image */}
      <div className="relative w-full">
         <Image
            src={baseImageSrc}
            alt="Base Product"
            width={0}    // Next.js 'width=0 height=0 sizes=100vw w-full' trick for responsive
            height={0}
            sizes="100vw"
            className="w-full h-auto object-contain"
            priority
         />

         {/* Charms Overlay */}
         {selectedCharms.map((charm, index) => {
            // Map charm index to anchor index. 
            // If more charms than anchors, we stack at the last anchor (per requirement edge case)
            const anchorIndex = index < anchors.length ? index : anchors.length - 1;
            const anchor = anchors[anchorIndex];

            // If no anchors defined at all, return null
            if (!anchor) return null;

            return (
               <div
                  key={`${charm.id}-${index}`}
                  className="absolute flex items-center justify-center w-[24%] pointer-events-none"
                  style={{
                     left: `${anchor.x}%`,
                     top: `${anchor.y}%`,
                     // EXACT TRANSFORM as requested
                     transform: `translate(-50%, -50%) rotate(${anchor.rotation}deg) scale(${anchor.scale || 1})`,
                     zIndex: 10, // Ensure charms appear above base image
                  }}
               >
                  {/* Inner container for aspect ratio handling if needed, but per request keeping it simple with scale */}
                  <Image
                      src={charm.previewImage || charm.image}
                      alt={charm.name}
                      width={100}
                      height={100}
                      className="object-contain w-full h-auto"
                   />
               </div>
            );
         })}
      </div>
    </div>
  );
}
