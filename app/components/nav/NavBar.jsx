'use client';

import { useState } from "react";
import Icon from "./Icon";

const NavBar = () => {

    const [selected, setSelected] = useState(null);

    const icons = [
        {
            src: '/icons/home.svg',
            alt: 'Inicio',
            title: 'Inicio',
        },
        {
            src: '/icons/trophy.svg',
            alt: 'Sobre mí', 
            title: 'Sobre mí',
        },
        {
            src: '/icons/identification.svg',
            alt: 'Contactos',
            title: 'Contactos',
        },
        {
            src: '/icons/folder-open.svg',
            alt: 'Proyectos',
            title: 'Proyectos',
        },
        {
            src: '/icons/academic-cap.svg',
            alt: 'Estudios',
            title: 'Estudios',
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
        <div className="w-[500px] flex items-center justify-between p-2 border border-gray-300 rounded-lg bg-white">
            {icons.map((icon, index) => (
                <Icon 
                    key={icon.alt}  // Cambiado `key={icon}` a `key={icon.alt}` ya que `icon` no es una cadena
                    src={icon.src}
                    alt={icon.alt}
                    title={icon.title}
                    isSelected={selected === index}  // Corregido `selected == index` a `selected === index`
                    onClick={() => setSelected(index)}
                />
            ))}        
        </div>
    );
    
}

export default NavBar;