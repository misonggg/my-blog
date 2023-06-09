import FilterablePosts from '@/components/FilterablePosts';
import { Metadata } from 'next';
import React from 'react'
import { getAllPosts, getFeaturedPosts } from '../service/posts';

export const metadata: Metadata = {
  title: 'All Posts',
  description: '미송이 블로그 전체 글 보기',
}

export default async function PostPage() {
  const posts = await getAllPosts();
  // 중복을 피하기 위해 Set으로 변환한 다음, Set을 다시 배열로 변환
  const categories = [...new Set(posts.map(post => (post.category)))]
  return (
    <section className='mt-1 md:mt-4'>
      {/* <h2 className='font-semibold text-md p-2 bg-whitemy-4 rounded-lg'>Post Page</h2> */}
      <FilterablePosts posts={posts} categories={categories}/>
    </section>
  )
}