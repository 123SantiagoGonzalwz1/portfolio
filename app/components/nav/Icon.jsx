import Image from "next/image"; 
import React from "react"; 

export default function Icon({ src, alt, title, onClick, isSelected }) { 
    return ( 
        <div onClick={onClick} className="flex flex-col items-center cursor-pointer"> 
            <div className={`flex items-center justify-center rounded-full p-2 ring-2 ring-white-500 bg-gray-300 ${isSelected ? 'bg-gray-400' : ''} transform transition-transform duration-200 hover:scale-[1.3]`}> 
                <span title={title}> 
                    <Image src={src} alt={alt} width={20} height={20} /> 
                </span> 
            </div> 
            {isSelected && <div className="mt-1 w-2 h-2 rounded-full bg-primaryDark"></div>
            } 
        </div> 
    );
} 
