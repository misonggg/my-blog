import { getFeaturedPosts } from '@/app/service/posts'
import Image from 'next/image'
import React from 'react'
import PostGrid from './PostGrid'

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <section className='mb-10'>
      <h2 className='font-semibold text-md p-2 bg-whitemy-4 rounded-lg'>🍬 Featured Posts</h2>
      <PostGrid posts={posts}/>
    </section>
  )
}
