'use client'

import { createUser } from "@/utils/users";
import { redirect, useRouter } from "next/navigation"
import { useEffect, useState } from 'react';

export type FormData = {
  name: string;
}

export default function Home() {
  const { push } = useRouter()
  const [form, setForm] = useState<FormData>({
    name: ''
  })

  useEffect(() => {
    if (localStorage.getItem('user_name') && localStorage.getItem('user_id')) redirect('/chats')
  }, [])  

  function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  async function handleSend(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name');
    if (!name) return;

    const { user } = await createUser(name?.toString())
    if (!user) return
    localStorage.setItem('user_name', user.username)
    localStorage.setItem('user_id', user.id)
    
    push('/chats')
  }

  return (
    <div className="absolute top-0 left-0 h-[100vh] max-w-[100vw] w-[1000vw] flex justify-center items-center backdrop-blur">

      <div className="border-black dark:border-white border-2 rounded-lg p-5 text-black dark:text-white">
        <h2 className="text-2xl font-medium">Set a nickname</h2>
        <form className="w-full py-3" onSubmit={handleSend}>
          <input type="text" id="name" name='name'
            onChange={handleInputOnChange}
            value={form.name}
            className="text-base placeholder-gray-800 dark:placeholder-gray-400 text-black dark:text-white flex mt-2 h-10 w-full rounded-md border border-black dark:border-white border-input bg-gray-100 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
            placeholder="Write your name..." autoComplete="off"
          />

          <button type='submit' className="flex items-center justify-center w-full mt-5 py-2 text-lg disabled:opacity-40 rounded-md border bg-black dark:bg-white text-white dark:text-black"
            {...(form.name ? {} : { disabled: true })}
          >
            Confirm
          </button>
        </form>
      </div>

    </div>
  )
}
