'use client'

import { useForm } from 'react-hook-form'
import { sendMessage } from '@/utils/chat'
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

  function handleSend(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    event.preventDefault()

    sendMessage(form)

    const messageInput = document.getElementById("message") as HTMLInputElement
    if (messageInput) messageInput.value = ""

    props.onCreate()
  }

  return (
    <form className="relative w-full pb-3">
      <input type="text" id="message" name='message'
        onChange={handleInputOnChange}
        className="pr-10 dark:placeholder-gray-400 dark:text-white flex h-10 w-full rounded-md border border-input bg-gray-400 dark:bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" 
        placeholder="Escribe un mensaje..."
      />

      <button  onClick={handleSend} type='submit' className="absolute inset-y-0 right-0 top-0 flex items-top pt-2 pr-3.5 z-40">
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-100 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m3 3 3 9-3 9 19-9Z" />
          <path d="M6 12h16" />
        </svg>
      </button>
    </form>
  )
}