import Link from 'next/link'
import Image from 'next/image'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex items-center justify-between py-2 '>
            <Link href='/'>
                <div className='flex items-center cursor-pointer gap-2 '>
                    <Image src='/m.png' alt='logo' width='40' height='40' />
                    <span className='font-bold text-darkcyan'>Mubi&apos;s Blog</span>
                </div>
            </Link>
            <ul className='flex items-center gap-8 text-gray-600 font-medium uppercase'>
                <li>
                    <Link href={'/'}>products</Link>
                </li>
                <li>
                    <Link href={'/'}>price</Link>
                </li>
                <li>
                    <Link href={'/'}>docs</Link>
                </li>
                <li>
                    <Link href={'/blog'}>blog</Link>
                </li>
                <li>
                    <Link href={'/'}>company</Link>
                </li>
            </ul>
            <ul className='flex items-center gap-3 text-gray-600 font-medium uppercase'>
                <li>
                    <Link href={'/'} className='hover:text-gray-400'>
                        log in
                    </Link>
                </li>
                <li>
                    <Link href={'/'} className='bg-darkcyan py-2 px-4 rounded-5 text-white hover:bg-emerald-800 transition-all'>
                        Sign up
                    </Link>
                </li>

            </ul>

        </nav>
    )
}

export default Navbar