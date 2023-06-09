import { Post } from '@/app/service/posts'
import React from 'react'
import PostCard from './PostCard'

export default function PostGrid({posts}: {posts: Post[]}) {
  return (
    <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
      {posts.map((post) => (<li key={post.path}><PostCard post={post}/></li>))}
    </ul>
  )
}
