'use client'
import { Post } from '@/app/service/posts';
import React, { useState } from 'react'
import Categories from './Categories';
import PostGrid from './PostGrid';

type Props = {
  posts: Post[];
  categories: string[];
}

const ALL_POSTS = 'All Posts'

export default function FilterablePosts({posts, categories}: Props) {
  const [selected, setSelected] = useState(ALL_POSTS)
  // 만약 seleted가 All Posts라면, 그대로 Props 전달받은 포스트 보여주고, 특정 카테고리라면 현재 seleted된 것이 맞는지 필터링해줌
  const filtered = 
    selected === ALL_POSTS 
    ? posts 
    : posts.filter((post) => post.category === selected)

  return (
    <section className='flex'>
      <Categories 
        categories={[ALL_POSTS, ...categories]}
        selected={selected}
        onClick={(selected) => setSelected(selected)}
      />
      <PostGrid posts={filtered} />
    </section>
  )
} 
  