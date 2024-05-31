"use client";

import React from 'react'
import {Sheet,SheetContent,SheetTrigger,} from "@/components/ui/sheet"
import Link from 'next/link'
import Image from 'next/image'
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { navLinks } from '@/constants'
import { usePathname } from 'next/navigation'
import { Button } from '../ui/button';


const MobileNav = () => {
    const pathname = usePathname();
    return (
        <header className="header">
            {/* <Link href="/" className='flex items-center gap-2 md:py-2' >
                <Image 
                    src="/assets/images/logo-text.svg"
                    alt='logo'
                    width={82}
                    height={30}
                />
            </Link> */}
            <span>Gimper</span>

            <nav className='flex gap-2 '>
                <SignedIn>
                    <UserButton afterSignOutUrl='/' />

                    <Sheet>
                        <SheetTrigger>
                            <Image 
                                src="assets/icons/menu.svg"
                                alt='menu'
                                width={32}
                                height={32}
                                className="cursor-pointer"
                            />
                        </SheetTrigger>
                        <SheetContent className='sheet-content sm:w-64 bg-[#f7f7f8]'>
                            <>
                                {/* <Image 
                                    src="/assets/images/logo-text.svg"
                                    alt='logo'
                                    width={82}
                                    height={30}
                                /> */}
                                <span>Gimper</span>
                                <ul className='header-nav_elements'>
                                    {navLinks.map((link) => {
                                        const isActive = link.route === pathname
                                        return (
                                            <li 
                                                className={`${isActive ? 'bg-white shadow-[0px_0px_0px_1px_rgba(25,_28,_33,_0.08),_0px_1px_0px_0px_rgba(25,_28,_33,_0.04),_0px_2px_3px_-1px_rgba(0,_0,_0,_0.06)] rounded-lg text-[#2F302D]' : 'text-[#5e606e]'}`}
                                                    key={link.route} 
                                                    >
                                                <Link className='sidebar-link
                                                    cursor-pointer' href={link.route}>
                                                    <Image 
                                                        src={link.icon}
                                                        alt='logo'
                                                        width={24}
                                                        height={24}
                                                    />
                                                    {link.label}
                                                </Link>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </>
                        </SheetContent>
                    </Sheet>

                </SignedIn>
                <SignedOut>
                    <Button asChild className='button bg-purple-gradient bg-cover'>
                        <Link href="/sign-in">Login</Link>
                    </Button>
                </SignedOut>
            </nav>
        </header>
    )
}

export default MobileNav