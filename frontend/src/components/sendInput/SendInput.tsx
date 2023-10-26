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
        className="pr-10 text-base dark:placeholder-gray-400 dark:text-white flex h-10 w-full rounded-md border border-input bg-gray-400 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed" 
        placeholder="Write a message..." autoComplete="off"
      />

      <button type='submit' className="absolute inset-y-0 right-0 top-0 flex items-top pt-5 pr-3.5 z-40 disabled:opacity-40" 
              { ...(form.message ? {} : { disabled: true }) }
      >
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-100 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 3 3 9-3 9 19-9Z" />
          <path d="M6 12h16" />
        </svg>
      </button>
    </form>
  )
}