import Image from "next/image";
import React from "react";



export default function Icon({ src, alt, title, onClick, isSelected}) {
    return (
        <div
            onClick={onClick}
            className={`flex items-center justify-center rounded-full p-2 cursor-pointer ${isSelected ? 'bg-gray-200' : ''}`}>
           <span title={title}>
                <Image src={src} alt={alt} width={20} height={20} />
            </span>
        </div>
    );

}