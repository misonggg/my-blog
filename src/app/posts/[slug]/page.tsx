import { getFeaturedPosts, getPostData } from '@/app/service/posts';
import AdjacentPostCard from '@/components/AdjacentPostCard';
import { categoryColors } from '@/components/CategoryColors';
import PostContent from '@/components/PostContent';
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'

export async function generateMetadata({params: {slug}}: Props): Promise<Metadata> {
  const {title, description} = await getPostData(slug);
  return {
    title,
    description
  }
}

type Props = {
  params: {
    slug: string;
  }
}
export default async function PostPage({params: {slug}}: Props) {
  const post = await getPostData(slug);
  const {title, path, category, next, prev} = post;
  const categoryColor = categoryColors[category] || 'bg-gray-300';

  return (
    <article className='flex flex-col w-full h-full p-2 md:p-4 md:px-16'>
      <Image
        className='w-full items-center max-h-[600px] object-cover'
        src={`/images/posts/${path}.png`} 
        alt={title} 
        width={720} 
        height={420}
      />
      <span className={`text-sm ${categoryColor} text-white px-2 py-1 w-fit rounded-xl items-center mt-6`}>{category}</span>
      <PostContent post={post}/>
      <section className='flex rounded-xl p-2 md:p-4 max-w-3xl bg-slate-100 gap-2 md:gap-4 mt-2 md:mt-12'>
        {prev && <AdjacentPostCard post={prev} type='prev' />}
        {next && <AdjacentPostCard post={next} type='next' />}
      </section>
    </article>
  )
}

export async function generateStaticParams() {
  const posts = await getFeaturedPosts();
  return posts.map((post) => ({
    slug: post.path,
  }))
}