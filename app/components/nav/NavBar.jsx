'use client';

import React, { useState } from "react";
import Icon from "./Icon";
import Link from "next/link";

const NavBar = () => {
    const [selected, setSelected] = useState(null);

    const icons = [
        {
            src: '/icons/home.svg',
            alt: 'Inicio',
            title: 'Inicio',
            href: '/'
        },
        {
            src: '/icons/trophy.svg',
            alt: 'Sobre mí', 
            title: 'Sobre mí',
            href: '/about'
        },
        {
            src: '/icons/identification.svg',
            alt: 'Contactos',
            title: 'Contactos',
            href: '/contact'
        },
        {
            src: '/icons/folder-open.svg',
            alt: 'Proyectos',
            title: 'Proyectos',
            href: '/projects'

        },
        {
            src: '/icons/academic-cap.svg',
            alt: 'Estudios',
            title: 'Estudios',
            href: '/studies'
        },
        {
            src: '/icons/sun.svg',
            alt: 'Cambiar tema',
            title: 'Tema',
        },
        {
            src: '/icons/idiom.svg',
            alt: 'Cambiar idioma',
            title: 'Idioma',
        }
    ]

    return (
        <div className="flex justify-center mt-[800px]">
            <div className="w-[500px] flex items-center justify-between p-2 border border-gray-300 rounded-2xl bg-gray-200 opacity-75 ring-2 ring-white">
            {icons.slice(0, 5).map((icon, index) => (
                <Link href={icon.href} key={icon.alt}>
                    <Icon
                        src={icon.src}
                        alt={icon.alt}
                        title={icon.title}
                        isSelected={selected === index}
                        onClick={() => setSelected(index)}
                    />
                </Link>
            ))}
            <div className="border-l border-gray-400 h-6 mx-2"></div>
            {icons.slice(5).map((icon, index) => (
                
                <Icon
                    key={icon.alt}
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    isSelected={selected === index + 5}
                    onClick={() => setSelected(index + 5)}
                />
            ))}
        </div>
        </div>
        
    );
};

export default NavBar;
