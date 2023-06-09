import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImage from '../../public/Images/profile1.jpeg'
import ProfileImage from './ProfileImage'

export default function Profile() {
  return (
    <div className='flex flex-col items-center gap-1 mb-6 '>
      <ProfileImage />
      <h1 className='font-semibold text-md'>Kim mi song</h1>
      {/* <h3 className='text-xs font-medium'>Full-stack Engineer</h3> */}
      <p className='text-xs text-gray-500'>안녕하세요. 만나서 반갑습니다!</p>
      <Link href='./contact'>
        <button
          className='text-xs text-white bg-blue-500 px-4 py-2 rounded-xl mt-2 hover:opacity-60 transition-all duration-200'
        >
          Contact Me
        </button>
      </Link>
    </div>
  )
}
