import ContactForm from '@/components/ContactForm';
import MouseFollower from '@/components/MouseFollower';
import React from 'react'
import { FaGithub, FaInstagram, FaYoutube, FaWhatsapp } from "react-icons/fa";
import { Metadata } from 'next';
import styles from './page.module.css';

export const metadata: Metadata = {
  title: 'Contact Me',
  description: '미송이한테 메일 보내기',
}

const LINKS = [
  {icon: <FaGithub />, url: '' },
  {icon: <FaInstagram />, url: '' },
  {icon: <FaYoutube />, url: '' },
  {icon: <FaWhatsapp />, url: '' },
]
export default function ContactPage() {
  return (
    <section className='flex flex-col items-center'>
      <h2 className='text-lg font-bold py-1 px-3 mb-2 bg-yellow-200 rounded-full md:mb-6'>Contact Me</h2>
      <p className='text-sm p-1 mb-1'>cute_song_2@gmail.com</p>
      <ul className='flex flex-row gap-1 md:mb-12'>
        {LINKS.map((link, index)=> 
          <a 
            className='text-xl bg-blue-500 text-white p-2 rounded-full m-1 mb-8 hover:scale-125 hover:translate-y-1 hover:drop-shadow-lg transition-all duration-200'
            key={index}
            href={link.url}
            target='_blank'
            rel='noreferrer'
          >
            {link.icon}
          </a>
        )}
      </ul>
      <h2 className='text-md font-bold mb-6'>Or Send me an email !</h2>
      <ContactForm />
      <div className={styles.paperPlane1}>💌</div>
      <div className={styles.paperPlane2}>💌</div>
      <div className={styles.paperPlane3}>💌</div>
      <div className={styles.paperPlane4}>💌</div>
      <div className={styles.paperPlane5}>💌</div>
      <div className={styles.paperPlane6}>💌</div>
      <div className={styles.paperPlane3}>💌</div>
      <div className={styles.paperPlane4}>💌</div>
    </section>
  )
}
