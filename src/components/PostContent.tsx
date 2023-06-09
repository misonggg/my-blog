import React from 'react'
import MarkdownViewer from '@/components/MarkdownViewer';
import { PostData } from '@/app/service/posts';

export default function PostContent({post}: {post: PostData}) {
  const {title, description, date, content} = post;

  return (
    <section className='w-full py-2'>
      <h1 className='text-2xl font-extrabold mb-3'>{title}</h1>
      <p className='text-base mb-2'>{description}</p>
      <div className=''>
        <p className='text-base text-gray-500 pb-6 m:pb-12 mb-6 md:mb-12 border-b-2 border-blue-200'>{date.toString()}</p>
      </div>
      <MarkdownViewer content={content} />
    </section>
  )
}
