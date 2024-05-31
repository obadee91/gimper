import MobileNav from '@/components/shared/MobileNav'
import Sidebar from '@/components/shared/Sidebar'
import { Toaster } from '@/components/ui/toaster'
import React from 'react'

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <main className='root'>
            <Sidebar />
            <MobileNav />

            <div className='root-container '>
                <div className='rounded-l-lg bg-[#] h-full flex-1 relative isolate -mt-6 '>
                <div className='wrapper'>
                    {children}
                </div>
                </div>
            </div>
            <Toaster />
        </main>
    )
}

export default Layout