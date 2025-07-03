'use client';
import { useState } from 'react';
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi';
import Image from 'next/image';
import icon from '../../../../public/images/Icon.svg';

const links = [
    { href: '#home', label: 'Início' },
    { href: '#introducao', label: 'Introdução' },
    { href: '#implantacao ', label: 'Implantação' },
    { href: '#produto', label: 'Produto' },
    { href: '#formulario', label: 'Formulário' },
    { href: '#linkedin', label: 'LinkedIn' },
];

export default function Menu() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0d0d0d] z-50 text-white shadow-md">
            <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
                <div className='flex items-center'>
                    <Image src={icon} alt="Logo site" />
                    <span className="text-xl font-bold">Autobots</span>
                </div>

                {/* Menu Desktop */}
                <ul className="hidden md:flex gap-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a href={link.href} className="hover:text-blue-500 transition">
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Botão Mobile */}
                <button onClick={() => setOpen(!open)} className="md:hidden">
                    {open ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
                </button>
            </div>

            {/* Menu Mobile */}
            {open && (
                <ul className="md:hidden flex flex-col items-center gap-4 pb-6">
                    {links.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="hover:text-blue-400 transition text-lg"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
            <div
            className='h-1 bg-blue-600'></div>
        </nav>
    );
}
