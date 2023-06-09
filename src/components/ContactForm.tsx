'use client';

import { sendContactEmail } from '@/app/service/contact';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Banner, { BannerData } from './Banner';

type Form = {
  from: string;
  subject: string;
  message: string;
}

const DEFAULT_DATA = {
    from: '',
    subject: '',
    message: ''
}

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form)
      .then(()=> {
        setBanner({message: ' 성공적으로 전송되었습니다.', state: 'success'
        })   
        setForm(DEFAULT_DATA)
      })
      .catch(()=> {
        setBanner({message: ' 전송에 실패했습니다. 다시 시도해주세요..', state: 'error'
        })    
      })
      .finally(()=> {
        setTimeout(()=> {
          setBanner(null)
        }, 3000)
      })
  }

  const TEXT = 'text-sm font-semibold mb-1'
  const INPUT = 'border-b-2 mb-4 md:mb-8 border-blue-300 text-sm font-thin'

  return (
    <>
      { banner && <Banner  banner={banner}/> }
      <form 
        onSubmit={onSubmit}
        className='flex flex-col w-4/5 md:w-3/5 lg:w-2/5'
      >
        <label htmlFor='from' className={TEXT}>Your Email</label>
        <input
          className={INPUT}
          type='email'
          id="from" 
          name="from" 
          required 
          autoFocus 
          value={form.from}
          onChange={onChange}
        />
        <label htmlFor='subject' className={TEXT}>subject</label>
        <input
          className={INPUT}
          type='text' 
          id="subject" 
          name="subject" 
          required 
          value={form.subject}
          onChange={onChange}
        />
        <label htmlFor='message' className={TEXT}>Message</label>
        <textarea
          className='bg-blue-100 p-1 text-sm font-thin rounded-lg'
          rows={10}
          id="message" 
          name="message" 
          required 
          value={form.message}
          onChange={onChange}
        />
        <button
          className='bg-blue-400 w-fit py-1 px-3 my-2 rounded-full text-xs text-white hover:opacity-60 transition-all duration-200'
        >
          Submit
        </button>
      </form>
    </>
  )
}