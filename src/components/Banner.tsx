import { type } from 'os'
import React from 'react'

export type BannerData = {
  message: string;
  state: 'success' | 'error';
}

export default function Banner({banner: {message, state}}: {banner: BannerData}) {
  const isSuccess = state === 'success';
  const icon = isSuccess ? '💌' : '❌';

  return (
    <p
      className={`${isSuccess ? 'bg-blue-400' : 'bg-gray-600'} fixed top-1/2 py-2 px-4 rounded-full text-sm text-white drop-shadow-2xl`}
    >
      {`${icon} ${message}`}
    </p>
  )
}

