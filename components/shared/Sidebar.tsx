"use client";

import { navLinks } from '@/constants'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { Button } from '../ui/button';

const Sidebar = () => {
    const pathname = usePathname();
    return (
        <aside className='sidebar'>
            <div className='flex size-full flex-col gap-4'>
                <Link href="/" className='sidebar-logo'>
                    {/* <Image 
                        src="/assets/images/logo-text.svg" 
                        alt='logo' 
                        width={82} 
                        height={30} /> */}
                        <span>Gimper</span>
                </Link>

                <nav className='sidebar-nav'>
                    <SignedIn>
                        <ul className='sidebar-nav_elements  '>

                            {navLinks.slice(0, 6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-white shadow-[0px_0px_0px_1px_rgba(25,_28,_33,_0.08),_0px_1px_0px_0px_rgba(25,_28,_33,_0.04),_0px_2px_3px_-1px_rgba(0,_0,_0,_0.06)] text-[#2f3037]' : 'text-[#5e606e] hover:bg-[#e8e8e8] hover:text-[#2f3037]'}`}>
                                        <Link className='sidebar-link' href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}
                        </ul>

                        <ul className='sidebar-nav_elements'>
                        {navLinks.slice(6).map((link) => {
                                const isActive = link.route === pathname
                                return (
                                    <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-white shadow-[0px_0px_0px_1px_rgba(25,_28,_33,_0.08),_0px_1px_0px_0px_rgba(25,_28,_33,_0.04),_0px_2px_3px_-1px_rgba(0,_0,_0,_0.06)] rounded-lg text-[#2F302D]' : 'text-[#5e606e] hover:bg-[#e8e8e8] hover:text-[#2f3037]'}`}>
                                        <Link className='sidebar-link' href={link.route}>
                                            <Image 
                                                src={link.icon}
                                                alt='logo'
                                                width={24}
                                                height={24}
                                                className={`${isActive && 'brightness-200'}`}
                                            />
                                            {link.label}
                                        </Link>
                                    </li>
                                )
                            })}

                            <li className='"flex-center cursor-pointer gap-2 p-5'>
                                <UserButton afterSignOutUrl='/' showName />
                            </li>
                        </ul>
                        
                    </SignedIn>

                    <SignedOut>
                        <Button asChild className='button bg-purple-gradient bg-cover'>
                            <Link href="/sign-in">Login</Link>
                        </Button>
                    </SignedOut>
                </nav>
            </div>
        </aside>
        
    )
}

export default Sidebar