import Image from 'next/image'
import React from 'react'
import profileImage from '../../public/Images/profile1.jpeg'

export default function ProfileImage() {
  return (
    <div className='rounded-full drop-shadow-lg p-2'>
      <Image 
          src={profileImage}
          alt="profile"
          width={130}
          height={130}
          className='rounded-full p-1 transform hover:rotate-12 hover:scale-105 hover:drop-shadow-xl transition-all duration-100'
        />
    </div>
  )
}
