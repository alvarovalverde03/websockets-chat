import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <h2 className='text-4xl mb-3'>404 - Not Found</h2>
      <p className='mb-1 text-slate-700 dark:text-slate-400'>Could not find requested resource</p>
      <Link href="/" className='underline hover:text-slate-400'>Return Home</Link>
    </div>
  )
}