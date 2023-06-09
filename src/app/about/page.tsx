'use client'
import Bubble from '@/components/Bubble';
import MouseFollower from '@/components/MouseFollower';
import ProfileImage from '@/components/ProfileImage';
import { Metadata } from 'next';

const metadata: Metadata = {
  title: 'About Me',
  description: '미송이 소개',
}

export default function AboutPage() {
  return (
    <div className='relative'>
      <Bubble className="z-0"/>
      {/* <h1 className='text-black font-bold text-2xl'>About Me</h1> */}
      <div className='flex flex-col max-w-lg p-10 z-10 relative w-full m-auto justify-center items-center'>
        <div className='text-center flex flex-col items-center'>
          <ProfileImage />
          <h1 className='font-bold text-xl'>Kim mi song</h1>
          <p className='text-sm text-gray-500 p-1 w-4/5'>만나서 반갑습니다! 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리나라 만세</p>
          <button
            className='text-xs text-white bg-yellow-500 px-4 py-2 rounded-xl mt-1 mb-4 hover:opacity-60 transition-all duration-200'
          >
            Contact Me
          </button>
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum explicabo suscipit quod, vitae incidunt deserunt vel inventore numquam fugit quo veniam omnis voluptates sit accusantium soluta reiciendis officiis quia!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum explicabo suscipit quod, vitae incidunt deserunt vel inventore numquam fugit quo veniam omnis voluptates sit accusantium soluta reiciendis officiis quia!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum explicabo suscipit quod, vitae incidunt deserunt vel inventore numquam fugit quo veniam omnis voluptates sit accusantium soluta reiciendis officiis quia!
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, nostrum explicabo suscipit quod, vitae incidunt deserunt vel inventore numquam fugit quo veniam omnis voluptates sit accusantium soluta reiciendis officiis quia!
        </p>
      </div>
      <MouseFollower />
    </div>
  );
}
