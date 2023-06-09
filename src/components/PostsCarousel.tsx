import { getNonFeaturedPosts } from '@/app/service/posts';
import React from 'react'
import MultiCarousel from './MultiCarousel';
import PostCard from './PostCard';

export default async function PostsCarousel() {
  const posts = await getNonFeaturedPosts(); 

  return (
    <section className='my-4'>
      <h2 className='font-semibold text-md p-2 bg-whitemy-4 rounded-lg'>🍓 All Posts</h2>
      <MultiCarousel>
        { posts.map(post => <PostCard key={post.path} post={post}/>) }
      </MultiCarousel>
    </section>
  )
}
