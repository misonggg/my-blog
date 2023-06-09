import { Post } from '@/app/service/posts'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { categoryColors } from './CategoryColors'

type Props = {post: Post}

export default function PostCard({post: {title, description, date, category, path}}: Props) {
  const categoryColor = categoryColors[category] || 'bg-gray-300';

  return (
    <Link href={`/posts/${path}`}>
      <article className='rounded-md overflow-hidden shadow-md h-full hover:scale-105 hover:shadow-2xl transition-all duration-00'>
        <div className='relative' style={{ paddingBottom: '55%' }}>
          <Image
            className='absolute top-0 left-0 w-full object-cover'
            src={`/images/posts/${path}.png`} 
            alt={title} 
            // width={300} 
            // height={150}
            layout="fill"
          />
        </div>
        <div className='flex flex-col items-left m-2'>
          {date && 
            <time className='text-[12px] text-gray-500 mb-3 self-end'>
              {date.toString()}
            </time> }
          <h3 className='text-md font-semibold  overflow-hidden whitespace-nowrap overflow-ellipsis mb-2 self-center hover:opacity-60'>{title}</h3>
          <p className='text-sm w-full truncate mb-3'>{description}</p>
          <span className={`text-[7px] ${categoryColor} text-white px-2 py-1 mb-2 w-fit rounded-xl self-center`}>{category}</span>
        </div>
      </article>
    </Link>
  )
}