export default function SendInput() {
  return (
    <div className="relative w-full pb-3">
      <input type="text" id="input-group-1"
        className="pr-10 dark:placeholder-gray-400 dark:text-white flex h-10 w-full rounded-md border border-input bg-gray-400 dark:bg-black px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[1px] focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" placeholder="Busca un chat"
      />

      <button className="absolute inset-y-0 right-0 top-0 flex items-top pt-2 pr-3.5 z-40">
        <svg className="w-6 h-6 text-gray-500 dark:text-gray-100 hover:text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="m3 3 3 9-3 9 19-9Z" />
          <path d="M6 12h16" />
        </svg>
      </button>
    </div>
  )
}