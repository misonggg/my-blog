import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <div className='flex justify-between text-sm text-gray-500 font-medium p-2 my-2'>
      <p className='text-xs'>All Right Reserved</p>
      <div className=''>
        <Link href="/"
          className='p-2'
        >Portfolio</Link>
        <Link href="/"
          className='p-2'
        >Github</Link>
        <Link href="/"
          className='p-2'
        >Contact</Link>
      </div>
    </div>
  )
}
