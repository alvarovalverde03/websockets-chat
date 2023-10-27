'use client'

import { sendMessage } from '@/utils/chat'
import { TMessage } from '@/utils/db';
import { useState } from 'react';

export type FormData = {
  message: string;
}

export default function SendInput(props: any) {
  const [form, setForm] = useState<FormData>({
    message: ''
  })

  function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value }  = event.target
    setForm({
      ...form,
      [name]: value 
    })
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!form.message) return

    const data: TMessage = {
      content: form.message,
      user_name: localStorage.getItem('user_name') || '',
      user_id: localStorage.getItem('user_id') || '',
      date: new Date().toISOString()
    }

    await sendMessage(data)
    setForm({
      message: ''
    })

    props.onCreate()
  }

  return (
    <form className="relative w-full py-3" onSubmit={handleSend}>
      <input type="text" id="message" name='message'
        onChange={handleInputOnChange}
        value={form.message}
        className="pr-10 text-base placeholder-gray-800 dark:placeholder-gray-400 text-black dark:text-white flex h-10 w-full rounded-md border border-black dark:border-white border-input bg-gray-100 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed" 
        placeholder="Write a message..." autoComplete="off"
      />

      <button type='submit' className="absolute inset-y-0 right-0 top-0 flex items-top pt-[1.125rem] pr-3 z-40 disabled:opacity-40" 
              { ...(form.message ? {} : { disabled: true }) }
      >
        <svg className="w-7 h-7 fill-dark dark:fill-white hover:text-gray-500" viewBox="0 0 24 24">
          <path d="M3 20V4l19 8l-19 8Zm2-3l11.85-5L5 7v3.5l6 1.5l-6 1.5V17Zm0 0V7v10Z"/>
        </svg>
      </button>
    </form>
  )
}