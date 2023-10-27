'use client'

import { useState } from "react"

type SettingsProps = {
  open: boolean,
  setOpen: Function
}

type FormData = {
  name: string;
}

export default function Settings({ open, setOpen }: SettingsProps) { 
  const [form, setForm] = useState<FormData>({
    name: ''
  })

  function handleInputOnChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    localStorage.setItem('user_name', form.name)

    setOpen(false)
  }

  return (
    <div className={`absolute top-0 left-0 z-50 h-[100vh] max-w-[100vw] w-[100vw] flex justify-center items-center backdrop-blur ${ open ? '' : 'hidden'}`}>

      <div className="bg-white dark:bg-black border-black dark:border-white text-black dark:text-white border-2 rounded-lg p-5 flex flex-col">
        <div className="flex justify-between mb-4">
          <h2 className="text-2xl font-medium">Settings</h2>
          <button onClick={() => setOpen(false)}>
            <svg className="w-7 h-7" 
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M18 6 6 18"/>
              <path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
        <form className="w-full py-3"  onSubmit={handleSubmit}>
          <label>New name:</label>
          <input type="text" id="name" name='name'
            className="text-base placeholder-gray-800 dark:placeholder-gray-400 text-black dark:text-white flex mt-2 h-10 w-full rounded-md border border-black dark:border-white border-input bg-gray-100 dark:bg-black px-3 py-2 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed"
            placeholder="Write your new name..." autoComplete="off"
            onChange={handleInputOnChange}
            value={form.name}
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