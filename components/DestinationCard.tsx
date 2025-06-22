import React from "react";
import Image from "next/image";

type DestinationCardProps = {
    imageSrc: string;
    imageAlt: string;
    label: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({imageSrc, imageAlt, label}) => {
  return (
    <div className="w-full max-w-xs mx-auto rounded-2xl overflow-hidden">
      {/* Phone Image */}
      <div className="relative w-full h-64">
        <Image
          src={imageSrc}
          alt={imageAlt}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />

        {/* Blurred Text Overlay */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[90%] bg-white/30 backdrop-blur-md text-black text-center py-2 rounded-full font-medium">
          {label}
        </div>
      </div>
    </div>
  );
}

export default DestinationCard;