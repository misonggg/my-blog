import FeaturedPosts from '@/components/FeaturedPosts'
import PostsCarousel from '@/components/PostsCarousel'
import Profile from '@/components/Profile'

export default function Home() {
  return (
    <>
      <Profile />
      
      <FeaturedPosts />
      
      <PostsCarousel />
    </>
  )
}
