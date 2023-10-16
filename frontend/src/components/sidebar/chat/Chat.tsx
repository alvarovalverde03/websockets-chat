import Image from "next/image"

export default function Chat() {
    return (
        <div className="flex flex-row place-content-start items-center gap-2 px-5 py-2 hover:bg-violet-600 border-b-2 border-black">
            <Image src={"https://api.multiavatar.com/Binx Bond.svg"} className="rounded-full" alt={""} width={50} height={50} />
            <div className="flex flex-row place-content-between items-center w-full">
                <div className="flex flex-col place-content-start">
                    <h2 className="text-gray-500 dark:text-gray-400">Nombre</h2>
                    <p>algún mensaje</p>
                </div>
                <div className="flex flex-col gap-1">
                    <span className="text-slate-400 text-sm capitalize">13:23</span>
                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                </div>
            </div>
        </div>
    )
}