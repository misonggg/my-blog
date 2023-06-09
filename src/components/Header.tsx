import Link from 'next/link'
import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <header className='flex justify-between border-b border-gray-300 text-gray-500 py-1'>
      <Link href="/">
        <h1
          className='text-semibold font-bold text-blue-500 text-lg p-2 hover-shake'
        >
          {"Misong's Blog"}
        </h1>
      </Link>
      <nav className='flex text-sm font-semibold items-center'>
        <Link href="/"
          className='p-2 hover:text-blue-400 transition-all duration-200'
        >home</Link>
        <Link href="/about"
          className='p-2 hover:text-blue-400 transition-all duration-200'
        >about</Link>
        <Link href="/posts"
          className='p-2 hover:text-blue-400 transition-all duration-200'
        >posts</Link>
        <Link href="/contact"
          className='p-2 hover:text-blue-400 transition-all duration-200'        
        >contact</Link>
      </nav>
    </header>
  )
}
