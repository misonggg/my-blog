import { Post } from '@/app/service/posts'
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

type Props = {
  post: Post;
  type: 'prev' | 'next';
};

export default function AdjacentPostCard({post: {path, title, description}, type}: Props) {
  const ICON_CLASS = `absolute top-1/2 ${type === 'prev' ? 'left-1' : 'right-1' } text-2xl md:text-3xl text-blue-400 group-hover:scale-125 transition-all duration-100 md:m-2 bg-white rounded-full hover:drop-shadow-2xl`

  return (
    <Link 
      className='w-full h-[150px] md:h-[300px] bg-white rounded-xl overflow-hidden relative group drop-shadow-lg'
      href={`/posts/${path}`}
    >
      {/* <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div> */}
      <Image 
        className='w-full h-2/3 object-cover'
        src={`/images/posts/${path}.png`} 
        alt={title} width={150} 
        height={100}
      />
      <div className='flex items-center justify-center'>
        {type === 'prev' && <FaAngleLeft className={ICON_CLASS}/>}
        <div className='flex flex-col w-full md:p-2'>
          <h3 className='text-xs mt-3 md:mt-1 font-semibold p-1 md:text-base'>{title}</h3>
          <p className='md:block hidden md:text-sm md:p-1 overflow-hidden md:max-h-11'>{description}</p>
        </div>
        {type === 'next' && <FaAngleRight className={ICON_CLASS}/>}
      </div>
    </Link>
  )
}

// export default function AdjacentPostCard({post: {path, title, description}, type}: Props) {
//   return (
//     <Link 
//       className='relative w-full'
//       href={`/posts/${path}`}
//     >
//       <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
//       <Image 
//         className='w-full'
//         src={`/images/posts/${path}.png`} 
//         alt={title} width={150} 
//         height={100}
//       />
//       <div className='group absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-around items-center px-1 md:px-4'>
//         {type === 'prev' && <FaAngleLeft className={ICON_CLASS}/>}
//         <div>
//           <h3 className='text-white text-xs md:text-lg font-bold mb-2'>{title}</h3>
//           <p className='text-white text-[10px] md:text-base'>{description}</p>
//         </div>
//         {type === 'next' && <FaAngleRight className={ICON_CLASS}/>}
//       </div>
//     </Link>
//   )
// }