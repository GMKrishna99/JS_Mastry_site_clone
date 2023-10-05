import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import JSMLogo from "@/public/jsm-logo.svg"
import HamBurgerSVG from '@/public/hamburger-menu.svg'

const NavBar = () => {
    return (
        <nav className='flex-center fixed top-0 z-50 w-full border-b-2 border-black-200 bg-black-100 py-7 text-white'>
            <div className='flex-between mx-auto w-full max-w-screen-2xl px-6 xs:px-8 sm:px-16 '>
                <Link href="/">
                    <Image src={JSMLogo} alt='Logo' width={55} height={40} />
                </Link>

                <Image src={HamBurgerSVG} alt='Hamburger_Menu' width={30} height={30} className='block md:hidden cursor-pointer' />

                <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10'>
                    <li className='body-text text-gradient_blue-purple !font-bold'>
                        <Link href="https://jsmastery.pro/next13" target='_blank'>
                            Next.js 13.4 Course
                        </Link>
                    </li>
                    <li className='body-text !font-normal'>
                        <Link href="https://jsmastery.pro/masterclass" target='_blank'>
                            Masterclass
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar